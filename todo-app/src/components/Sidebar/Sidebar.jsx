import "./Sidebar.css"
import { NavLink } from "react-router-dom"

    const defaults = {
      padding:"20px",
      textDecoration: "none",
      color:"gray",
    };
    const active = {
        padding:"20px",
        borderRadius: "10px",
        textDecoration: "none",
        color: "#ffb000",
        backgroundColor: "black"
    };

    const logout = {
      padding:"20px",
      textDecoration: "none",
      color:"white",
      borderRadius: "10px",
      backgroundColor: "#5876d8"
    };

    const links = [
      {
        to:"/profile",
        title: "Profile"
      },
      {
        to:"/createtask",
        title: "Create Task"
      },
      {
        to:"/alltasks",
        title: "All Tasks"
      },
      {
        to:"/personal",
        title: "Personal"
      },
      {
        to:"/official",
        title: "Official"
      },
      {
        to:"/others",
        title: "Others"
      }
    ] 

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/" className="sidebarLogo">
        {/* <div > */}
          <img src="https://static.c.realme.com/IN/thread/1164218646675849216.png" alt="" />
          <h1>Taskdly</h1>
        {/* </div> */}
      </NavLink>
    
      <div className="sidebarList">
        {links.map((link)=>(
          <NavLink key={link.to} to={link.to} style={({isActive})=>(isActive ? active : defaults)} >
            {link.title}  
          </NavLink>
        ))}
        <NavLink style={logout}>
          Login/Logout 
        </NavLink>
      </div>
    </div>
  )
}
