import { useState } from "react"
import "./CreateTask.css"
import axios from "axios"
import { useNavigate } from "react-router"

let initState = {
    name:"",
    date:"",
    desc:"",
    category:""
}

export const CreateTask = () => {
    const [task, setTask] = useState(initState)
    const navigate = useNavigate();

    const handleChange = (e)=>{
        const {name, value} = e.target
        setTask({...task, [name]:value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("https://data-xgug.onrender.com/tasks",task)
        setTask(initState)
        alert("task added");
        navigate("/alltasks")
    }

    return (
        <div className="createtask">
            <h1 className="createTaskHeading">Create New Task</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Task Name" name="name" value={task.name} onChange={handleChange} required/>
                <input type="date" name="date" onChange={handleChange}required value={task.date}/><br />
                <textarea rows="8" cols="50" placeholder="Enter Task Description..." value={task.desc} name="desc" onChange={handleChange} required/><br />
                <select  id="" name="category" placeholder="Select" onChange={handleChange} value={task.category} required>
                    <option value="">Select Task Category</option>
                    <option value="personal">Personal</option>
                    <option value="official">Official</option>
                    <option value="others">Others</option>
                </select>
                <button type="submit" className="createTaskBtn">Create Task</button>
            </form>
        </div>
    )
}
