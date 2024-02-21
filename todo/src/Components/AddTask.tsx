
import { useState } from "react"
import "../App.css"
const AddTask = () => {

    const [Task, setTask] = useState(" ");
    // const[addtask, setAddedTask] = useState("")

    const handleonClick = (e: any) => {
        e.preventDefault()

    }

    return (
        <div>
            <div className="Task_input">
                <form onClick={handleonClick}>
                    <input name="Task" placeholder="Add A Task" value={Task} onChange={(e) => setTask(e.target.value)} />
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    )

}


export default AddTask