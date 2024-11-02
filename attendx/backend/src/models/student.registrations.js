import {Schema, mongoose} from "mongoose";

const registerSchema = new Schema({
    email : {type: String, required: true},
    password : {type: String, required: true},
    attendance: {type: Number, default: 0},
    batch : {type: String, required: true},
    phone : {type: Number, required: true},
    course : {type: String, required: true},
    branch : {type: String, required: true}
});

const Students = mongoose.model("Students", registerSchema);

export {Students};