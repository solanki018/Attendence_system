import httpStatus from "http-status";
import { Students } from "../models/student.registrations.js";
import bcrypt from "bcrypt";

// we will also send emails along with the attendance updation !!
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import getDate from "./getDate.js";
dotenv.config();


// setting up nodemailer to send email alerts !!
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

async function sendEmail(receiver, subject, message) {
    const info = await transporter.sendMail({
        from: "keshav11y@gmail.com", // sender address
        to: receiver, // list of receivers
        subject: subject, // Subject line
        text: message, // plain text body
        html: message, // html body
    });

    console.log("Message sent: %s", info.messageId);
}

const register = async (req, res) => {
    const { email, password, branch, course, phone, batch } = req.body;
    try {
        const existingUser = await Students.findOne({ email });
        if (existingUser) {
            return res.status(httpStatus.FOUND).json({ message: "Student already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newStudent = new Students({ email, password: hashedPassword, batch, branch, course, phone });
        await newStudent.save();

        return res.status(httpStatus.CREATED).json({ message: "Student Registered Successfully" });
    }
    catch (err) {
        return res.json({ message: `Error in registering student: ${err}` });
    }
}

const login = async (req, res) => {
    console.log(req.body);
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
        return res.status(httpStatus.BAD_REQUEST).json({ message: "Please Provide Complete Information" });
    }

    try {
        const student = await Students.findOne({ email });
        if (!student) {
            return res.status(httpStatus.NOT_FOUND).json({ message: "Student not Registered, Please Contact Administration !!" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, student.password);
        if (!isPasswordCorrect) {
            return res.status(httpStatus.UNAUTHORIZED).json({ message: "Invalid Credentials" });
        }
        else {
            return res.status(httpStatus.OK).json({ message: "Student Logged In Successfully" });
        }
    }
    catch (err) {
        return res.json({ message: `Something went wrong : ${err}` });
    }
}

const getStudentData = async (req, res) => {
    try {
        const studentData = await Students.find({});
        return res.status(httpStatus.OK).json(studentData);
    }
    catch (err) {
        console.log(err);
        return res.json({ message: `Error in fetching student data : ${err}` });
    }
}

// Here we are exporting student details to be shown in the profile section of the student panel
const getStudentDetails = async (req, res) => {
    const { email } = req.params;
    const decodedEmail = decodeURIComponent(email);
    console.log(decodedEmail);
    try {
        const studentData = await Students.findOne({ email: decodedEmail });
        return res.status(httpStatus.OK).json(studentData);
    }
    catch (err) {
        return res.json({ message: `Error in fetching student details: ${err}` });
    }
}

const takeAttendance = async (req, res) => {
    const { email } = req.body;
    const decodedEmail = decodeURIComponent(email);
    console.log(`Searching for the student : "${email}"`);
    try {
        const student = await Students.findOne({ email: decodedEmail });
        if (!student) {
            return res.status(httpStatus.NOT_FOUND).json({ message: "Student not found" });
        }

        // Get today's date normalized to midnight for comparison
        const today = getDate();
        // console.log("this is the student : ", student);
        // console.log("this is the date : ", today);
        const todayLog = student.attendanceLog.find(log => { return log.date === today });
        // console.log("this is the today log : ", todayLog);

        // If the student has already checked in but not checked out, check them out
        if (todayLog && todayLog.checkInTime && !todayLog.checkOutTime) {
            // Call check-out function
            // console.log("Inside checkOut Function");
            return await checkOut(req, res);
        }
        else if (todayLog && todayLog.checkInTime && todayLog.checkOutTime) {
            return res.status(httpStatus.BAD_REQUEST).json({ message: "Student already checked out for today" });
        }
        else {
            return await checkIn(req, res);
        }
    }
    catch (err) {
        console.log(err);
        return res.json({ message: `Error in taking attendance: ${err}` });
    }
}

const checkIn = async (req, res) => {
    // console.log("Inside checkIn Function");
    const { email } = req.body;
    const decodedEmail = decodeURIComponent(email);
    console.log(`Checking in for the student: "${decodedEmail}"`);

    try {
        const student = await Students.findOne({ email: decodedEmail });
        // console.log("This is the student : ", student);
        if (!student) {
            return res.status(httpStatus.NOT_FOUND).json({ message: "Student not found" });
        }

        // Get today's date without the time portion for easy comparison
        const today = getDate();
        // console.log("This is the today's date : ", today);
        let todayLog = student.attendanceLog.find(log => log.date === today);
        // console.log("This is the today's log : ", todayLog);

        if (!todayLog) {
            // If no log for today, create a new entry with check-in time
            todayLog = { date: getDate(), checkInTime: new Date().toTimeString().split(" ")[0] };
            student.attendanceLog.push(todayLog);
            student.attendance += 1;  // Increment attendance only on first check-in
        } else if (!todayLog.checkInTime) {
            todayLog.checkInTime = new Date();
        } else {
            return res.status(httpStatus.BAD_REQUEST).json({ message: "Student already checked in for today" });
        }

        await student.save();
        console.log("Student Checked-In Successfully");
        await sendEmail(email, "Attendance Update", `You have successfully checked in at ${todayLog.checkInTime}. Your current attendance stands at ${student.attendance}. Please visit the portal for more details.`).catch(console.error);
        await sendEmail('christopherwillson966@gmail.com', "Attendance Update", `${student.email} has checked In at ${todayLog.checkInTime}. The updated attendance of the student is : ${student.attendance}. Please visit the admin portal for more details.`).catch(console.error);
        return res.status(httpStatus.OK).json({ message: "Check-in recorded successfully" });
    } catch (err) {
        console.log(err);
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: `Error in check-in: ${err}` });
    }
};

const checkOut = async (req, res) => {
    const { email } = req.body;
    const decodedEmail = decodeURIComponent(email);
    console.log(`Checking out for the student: "${decodedEmail}"`);

    try {
        const student = await Students.findOne({ email: decodedEmail });
        console.log(student);
        if (!student) {
            return res.status(httpStatus.NOT_FOUND).json({ message: "Student not found" });
        }

        const today = getDate();
        // console.log("This is the today's date : ", today);
        let todayLog = student.attendanceLog.find(log => log.date === today);
        // console.log("This is the today's log : ", todayLog);

        if (!todayLog || !todayLog.checkInTime) {
            return res.status(httpStatus.BAD_REQUEST).json({ message: "Student has not checked in today" });
        }

        if (!todayLog.checkOutTime) {
            todayLog.checkOutTime = new Date().toTimeString().split(" ")[0];
        } else {
            return res.status(httpStatus.BAD_REQUEST).json({ message: "Student already checked out for today" });
        }

        await student.save();
        await sendEmail(email, "Attendance Update", `You have successfully checked out at ${todayLog.checkOutTime}. Your current attendance stands at ${student.attendance}. Please visit the portal for more details.`).catch(console.error);
        await sendEmail('christopherwillson966@gmail.com', "Attendance Update", `${student.email} has checked out at ${todayLog.checkOutTime}. The updated attendance of the student is : ${student.attendance}. Please visit the admin portal for more details.`).catch(console.error);
        console.log("Student Checked-Out Successfully");
        return res.status(httpStatus.OK).json({ message: "Check-out recorded successfully" });
    } catch (err) {
        console.log(err);
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: `Error in check-out: ${err}` });
    }
};

// here we will write the logic to delete the student from the database.
const deleteStudent = async (req,res) => {
    const {email} = req.params;
    const decodedEmail = decodeURIComponent(email);
    console.log(`Deleting the student : ${decodedEmail}`);
    try {
        const student = await Students.find({email: decodedEmail});
        if(!student) {
            return res.status(httpStatus.NOT_FOUND).json({message: "Student not found"});
        }
        await Students.deleteOne({email: decodedEmail});
        return res.status(httpStatus.OK).json({message: "Student deleted successfully"});
    }
    catch(err) {
        console.log(`Error while deleting the student from db : `, err);
    }
}


export { login, register, getStudentDetails, takeAttendance, getStudentData, deleteStudent };