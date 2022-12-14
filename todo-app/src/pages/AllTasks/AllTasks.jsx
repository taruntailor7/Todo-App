import axios from "axios"
import { useEffect, useState } from "react"
import "./AllTasks.css"

export const AllTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(()=>{
        axios.get(`https://data-xgug.onrender.com/tasks`)
        .then((response)=>setTasks(response.data))
    },[])

    const handleChange = (e) =>{
        let value = e.target.value
        console.log(value)
        axios.get(`https://data-xgug.onrender.com/tasks?category=${value}`)
        .then((response)=>setTasks(response.data))
    }

    const handleClick = async (id,index)=>{
        try {
            let task = await axios.get(`https://data-xgug.onrender.com/tasks/${id}`)
            delete task.data.id;

            axios.post("https://data-xgug.onrender.com/progress", task.data)
            
            axios.delete(`https://data-xgug.onrender.com/tasks/${id}`)

            tasks.splice(index,1)
            setTasks([...tasks])
        } catch (error) {
            console.log(error)
        }   
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
                    {tasks.map((task,index) =>(
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.name}</td>
                            <td>{task.date}</td>
                            <td>{task.category}</td>
                            <td className="inProgress" onClick={()=>handleClick(task.id,index)}>Move</td>
                            <td>Delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
