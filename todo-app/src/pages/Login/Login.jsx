import { useState } from "react"
import "./Login.css"
import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getLogin } from "../../redux/Auth/action"

let initstate = {
    email: "",
    password: "",
}

export const Login = () => {
    const [user, setUser] = useState(initstate);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    // const {token} = useSelector((state)=>state)


    const handleChange = (e) =>{
        let {name, value} = e.target;
        setUser({...user, [name]:value});
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(getLogin(user))
        navigate("/")
    }
    
    return (
        <div className="form">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Enter Your Email" name="email" value={user.email} onChange={handleChange} required/>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Enter Your Password" name="password" value={user.password} onChange={handleChange} required/>
                <button type="submit" className="loginBtn">Login</button>
                <div className="forRegister">
                    <p>Don't have an account ? <NavLink to="/register" className="registerLink" >Register</NavLink></p>
                </div>
            </form>
        </div>
    )
}
