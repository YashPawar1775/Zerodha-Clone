import React, { useState } from "react";
import axios from "axios";

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]: e.target.value,});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://zerodha-clone-backend-tawny.vercel.app/login",formData,{
                    withCredentials: true
                }
            );
            window.location.href="https://zerodha-clone-dashboard-gray.vercel.app/";
        } catch (err) {
            alert(err.response?.data?.message ||"Login Failed");
        }
    };

    return (
        <form className="container mt-5 offset-3" onSubmit={handleSubmit}>
            <div className="mb-3 col-7">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input type="email" name="email" className="form-control" placeholder="Enter Email" onChange={handleChange} required/>
            </div>
            <div className="mb-3 col-7">
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <input type="password" name="password" className="form-control" placeholder="Enter Password" onChange={handleChange} required/>
            </div>
            <button type="submit" className="btn btn-primary">
                Login
            </button>
        </form>
    );
}

export default Login;