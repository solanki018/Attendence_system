import {Schema, mongoose} from "mongoose";

const attendanceSchema = new Schema({
    totalAttendance: {type: Number, default: 0},
});

const AttendanceSummary = mongoose.model("AttendaceSummary", attendanceSchema);

export {AttendanceSummary};