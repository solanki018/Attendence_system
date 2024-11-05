import { AttendanceSummary } from "../models/attendance.summary.js"

const takeAdminAttendance = async (req, res) => {
    try {
        let request = await AttendanceSummary.findOne();
        console.log(request);
        request.totalAttendance += 1;
        request.save();
        return res.status(200).json({ message: "Attendance Taken Successfully" });
    }
    catch(err) {
        return res.json({ message: `Error in taking attendance: ${err}` });
    }
}

const showAdminAttendance = async (req, res) => {
    try {
        let request = await AttendanceSummary.findOne();
        return res.status(200).json({ totalAttendance: request.totalAttendance });
    }
    catch(err) {
        return res.json({ message: `Error in showing attendance: ${err}` });
    }
}

export { takeAdminAttendance, showAdminAttendance };