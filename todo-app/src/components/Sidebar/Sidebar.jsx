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
        color: "white",
        backgroundColor: "black"
    };

    const links = [
      {
        to:"/profile",
        title: "Profile"
      },
      {
        to:"/",
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
      <div className="sidebarLogo">
        <img src="https://static.c.realme.com/IN/thread/1164218646675849216.png" alt="" />
        <h1>Taskdly</h1>
      </div>
    
      <div className="sidebarList">
        {links.map((link)=>(
          <NavLink key={link.to} to={link.to} style={({isActive})=>(isActive ? active : defaults)} >
            {link.title}  
          </NavLink>
        ))}
        <NavLink style={defaults}>
          Login/Logout 
        </NavLink>
      </div>
    </div>
  )
}
