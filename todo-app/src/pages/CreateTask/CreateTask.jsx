import "./CreateTask.css"

export const CreateTask = () => {
  return (
    <div className="createtask">
        <form action="">
            <input type="text" placeholder="Enter Task Name"/>
            <textarea rows="4" cols="50" />
            <select name="" id="">
                <option value="">Personal</option>
                <option value="">Official</option>
                <option value="">Others</option>
            </select>
        </form>
    </div>
  )
}
