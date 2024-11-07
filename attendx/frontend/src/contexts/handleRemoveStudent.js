import axios from 'axios';

const client = axios.create({
    baseURL: 'http://localhost:8080'
});


const handleRemoveStudent = async (email) => {
    let confirmRemoval = window.confirm(`Are you sure you want to remove student ${email}?`);
    if(!confirmRemoval) {
        return;
    }
    try {
        let request = await client.delete(`/delete-student/${email}`);
        console.log(request);
        console.log("Student removed successfully");
    }
    catch(err) {
        console.log(`Error while deleting the student ${email}`, err);
    }
}

export {handleRemoveStudent};