import { Schema, mongoose } from "mongoose";

const attendanceLogSchema = new Schema({
    date: { type: String, required: true },
    checkInTime: { type: String },  // Store time as Date for easier time manipulation
    checkOutTime: { type: String }
});

const registerSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    attendance: { type: Number, default: 0 },
    batch: { type: String, required: true },
    phone: { type: Number, required: true },
    course: { type: String, required: true },
    branch: { type: String, required: true },
    attendanceLog: [attendanceLogSchema]
});

const Students = mongoose.model("Students", registerSchema);

export { Students };
