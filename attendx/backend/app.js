import express from "express";
import mongoose from "mongoose";
const app = express();
import cors from "cors"; // It is required as we're sending request from different port.
const port = 8080;



import bodyParser from "body-parser";
import { router } from "./src/routes/user.routes.js";

app.use(express.json({ limit: "40kb" }));
app.use(cors());
// app.use(function async (req,res) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//         "Access-Control-Allow-Methods",
//         "GET, POST, OPTIONS, PUT, PATCH, DELETE",
//     )
// })

app.use(bodyParser.json()); // Make sure this is present
app.use(express.urlencoded({ limit: "40kb", extended: true }));
app.use(router);


const start = async () => {
    const connectionDb = await mongoose.connect("mongodb+srv://keshav11y:1LNYQIQDhDzRWjqx@cluster0.hnylq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("connected to db");
    app.listen(port, () => {
        console.log(`app is listening to the port ${port}`);
    })
}

start();