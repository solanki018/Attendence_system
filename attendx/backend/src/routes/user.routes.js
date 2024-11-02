import { Router } from "express";
import {register, login, getStudentDetails} from "../controllers/student.controller.js";

const router = Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/").get((req,res) => {res.send("hello world")});
router.route("/profile-student/:email").get(getStudentDetails);

export {router};