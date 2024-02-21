import React, { useState } from "react";
import "../App.css";

const AddTask = () => {
    const [task, setTask] = useState("");
    const [addedTask, setAddedTask] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editIndex !== null) {
            const updatedTasks = addedTask.map((t, index) => (index === editIndex ? task : t));
            setAddedTask(updatedTasks);
            setEditIndex(null);
            setTask(" ")

        } else {
            setAddedTask([...addedTask, task]);
            setTask(""); // Clearing the input after adding task
        }
    };

    const handleDelete = (index) => {
        const newTasks = addedTask.filter((_, i) => i !== index);
        setAddedTask(newTasks);

    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setTask(addedTask[index]);

    };

    return (
        <div>
            <div className="Task_input">
                <form onSubmit={handleSubmit}>
                    <input
                        name="task"
                        placeholder="Add A Task"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>
                </form>
            </div>
            <ul>
                {addedTask.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AddTask;
