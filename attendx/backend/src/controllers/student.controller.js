import httpStatus from "http-status";
import { Students } from "../models/student.registrations.js";
import bcrypt from "bcrypt";

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

// Here we are exporting student details to be shown in the profile section of the student panel
const getStudentDetails = async (req, res) => {
    const {email} = req.params;
    const decodedEmail = decodeURIComponent(email);
    console.log(decodedEmail);
    try {
        const studentData = await Students.findOne({ email: decodedEmail });
        return res.status(httpStatus.OK).json(studentData);
    }
    catch(err) {
        return res.json({ message: `Error in fetching student details: ${err}` });
    }
}

const takeAttendance = async (req, res) => {
    const {email} = req.body;
    const decodedEmail = decodeURIComponent(email);
    console.log(`Searching for the studennt : "${email}"`);
    try {
        const student = await Students.findOne({ email: decodedEmail });
        if (!student) {
            return res.status(httpStatus.NOT_FOUND).json({ message: "Student not found" });
        }
        student.attendance = student.attendance + 1;
        await student.save();
        return res.status(httpStatus.OK).json({ message: "Attendance taken successfully" });
    }
    catch(err) {
        return res.json({ message: `Error in taking attendance: ${err}` });
    }
}

export { login, register, getStudentDetails, takeAttendance };