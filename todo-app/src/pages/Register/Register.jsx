import { useState } from "react";
import "./Register.css";
import { NavLink, useNavigate } from "react-router-dom";
// import axios from "axios";
import { useDispatch } from 'react-redux'
import { getRegister } from "../../redux/Auth/action.js";


let initstate = {
    name:"",
    email: "",
    password: "",
}

export const Register = () => {
    const [user, setUser] = useState(initstate);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleChange = (e) =>{
        let {name, value} = e.target;
        setUser({...user, [name]:value});
    }
    
    const handleSubmit = async (e)=>{
        e.preventDefault();
        dispatch(getRegister(user));
        navigate("/login")
    }
    
    return (
        <div className="form">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Enter Your Name" name="name" value={user.name} onChange={handleChange} required/>
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Enter Your Email" name="email" value={user.email} onChange={handleChange} required/>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Enter Your Password" name="password" value={user.password} onChange={handleChange} required/>
                <button type="submit" className="registerBtn">Register</button>
                <div className="forLogin">
                    <p>Already have an account ? <NavLink to="/login" className="loginLink" >Login</NavLink></p>
                </div>
            </form>
        </div>
    )
}
