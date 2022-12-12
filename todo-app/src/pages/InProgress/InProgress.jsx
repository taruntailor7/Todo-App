import axios from "axios"
import { useEffect, useState } from "react"
import "./InProgress.css"

export const InProgress = () => {
    const [tasks, setTasks] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3001/progress")
        .then((response)=>setTasks(response.data))
    },[])

    const handleClick = async (id,index)=>{
        try {
            let task = await axios.get(`http://localhost:3001/progress/${id}`)
            delete task.data.id;

            axios.post("http://localhost:3001/done", task.data)

            axios.delete(`http://localhost:3001/progress/${id}`)

            tasks.splice(index,1)
            setTasks([...tasks])
        } catch (error) {
            console.log(error)
        }   
    }
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
                        <th>Done</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task,index)=>(
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.name}</td>
                            <td>{task.date}</td>
                            <td>{task.category}</td>
                            <td className="inProgress" onClick={()=>handleClick(task.id,index)}>Move</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
