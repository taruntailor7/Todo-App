import axios from "axios"
import { useEffect, useState } from "react"
import "./AllTasks.css"

export const AllTasks = () => {
    const [tasks, setTasks] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3001/tasks")
        .then((response)=>setTasks(response.data))
    },[])

    const handleChange = (e) =>{

    }
    
    return (
        <div className="allTasks">
            <h1 className="yourTask">Your Tasks</h1>
            <select  id="" name="category" placeholder="Select" onChange={handleChange} value="" required>
                <option value="">Filter task by category</option>
                <option value="personal">Personal</option>
                <option value="official">Official</option>
                <option value="others">Others</option>
            </select>
            <table>
                <thead border="1" cellSpacing="">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Category</th>
                        <th>In-Progress</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task)=>(
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.name}</td>
                            <td>{task.date}</td>
                            <td>{task.category}</td>
                            <td>Move</td>
                            <td>Delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}