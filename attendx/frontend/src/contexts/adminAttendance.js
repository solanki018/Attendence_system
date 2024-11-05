import axios from "axios";


const client = axios.create({
    baseURL: "http://localhost:8080",
});

const takeAdminAttendance = async () => {
    try {
        let request = await client.post("/take-attendance/admin");
        console.log(request);
        return request.data.message;
    }
    catch(err) {
        throw new Error(err || "Error in taking attendance");
    }
}

const handleManualAttendance = async (entry) => {
    try {
        entry = entry + "@iitrpr.ac.in";
        console.log(entry, " is the email id of student");
        let request = await client.post("/take-attendance", {email: entry});
        console.log(request);
        return request.data.message;
    }
    catch(err) {
        window.alert("Student has already check-out today !!");
        throw new Error(err || "Error in taking attendance");
    }
}

export {takeAdminAttendance, handleManualAttendance};