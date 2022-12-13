import axios from "axios"
import { useEffect, useState } from "react"
import "./Done.css"

export const Done = () => {
    const [tasks, setTasks] = useState([])

    useEffect(()=>{
        axios.get("https://data-xgug.onrender.com/done")
        .then((response)=>setTasks(response.data))
    },[])
    
    return (
        <div className="allTasks">
            <h1 className="yourTask">Your Tasks</h1>
            <table>
                <thead border="1" cellSpacing="">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task)=>(
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.name}</td>
                            <td>{task.date}</td>
                            <td>{task.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
