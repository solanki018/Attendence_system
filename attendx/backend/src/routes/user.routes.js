import { Router } from "express";
import {register, login, getStudentDetails, takeAttendance, getStudentData, deleteStudent} from "../controllers/student.controller.js";
import {takeAdminAttendance, showAdminAttendance} from "../controllers/admin.controller.js";

const router = Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/").get((req,res) => {res.send("hello world")});
router.route("/profile-student/:email").get(getStudentDetails);
router.route("/get-student-details").post(getStudentData); // will retrieve all the students data to the admin
router.route("/take-attendance").post(takeAttendance);
router.route("/take-attendance/admin").post(takeAdminAttendance);
router.route("/show-admin-attendance").post(showAdminAttendance);
router.route("/delete-student/:email").delete(deleteStudent);

export {router};