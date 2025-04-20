import React, { useState } from "react";
import "./style.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  function addTask() {
    if (text.trim() !== "") {
      setTasks([...tasks, text]);
      setText("");
    }
  }

  function deleteTask(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <div className="container">
      <h2>To-Do List</h2>
      <div className="input">
        <input
          type="text"
          placeholder="Enter a task..."
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button className="delete" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
