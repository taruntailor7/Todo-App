import { useState } from "react"
import "./Login.css"
import { NavLink } from "react-router-dom"

let initstate = {
    email: "",
    password: "",
}

export const Login = () => {
    const [user, setUser] = useState(initstate)

    const handleChange = () =>{

    }
    const handleSubmit = ()=>{
        
    }
    return (
        <div className="form">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter Your Email" name="email" value="" onchange={handleChange} required/>
                <label htmlFor="">Password</label>
                <input type="text" placeholder="Enter Your Password" name="password" value="" onchange={handleChange} required/>
                <button type="submit" className="loginBtn">Login</button>
                <div className="forRegister">
                    <p>Don't have an account ? <NavLink to="/register" className="registerLink" >Register</NavLink></p>
                </div>
            </form>
        </div>
    )
}
