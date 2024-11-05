// here we will write the logic of login / register and we will call these functions in the frontEnd.
import React, { useState } from 'react'
import { createContext } from "react";
import axios from "axios";
import HttpStatus from "http-status";


export const AuthContext = createContext({});

const client = axios.create({
    baseURL: "http://localhost:8080",
});

export const AuthProvider = ({ children }) => {

    const handleRegister = async ({formData} ) => {
        try {
            const {email, password, department, course, phone, batch } = formData;
            let request = await client.post("/register", { email, password, branch: department, course, phone, batch });
            // console.log(request);
            if (request.status === HttpStatus.CREATED) {
                return request.data.message;  // returned success message !!
            }
        } catch (e) {
            throw new Error(e || "Registration failed. Please try again !!");
        }
    };

    const handleLogin = async ({firstName, lastName, email, password}) => {
        try {
            let request = await client.post("/login", { firstName, lastName, email, password });
            if (request.status === HttpStatus.OK) {
                return request;  // returned request body !!
            }
        }
        catch (err) {
            throw new Error("Error logging in the Student : " , err);
        }
    }



    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const data = { handleLogin, handleRegister, isAuthenticated, setIsAuthenticated };

    return (
        < AuthContext.Provider value={data} >
            {children}
        </AuthContext.Provider >
    )
}