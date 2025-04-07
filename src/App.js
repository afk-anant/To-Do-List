import React, { useState } from "react";
import './style.css';

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const addTask = () => {
    if (!newTask.trim()) return;

    if (editingIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = newTask;
      setTasks(updatedTasks);
      setEditingIndex(null);
    } else {
      setTasks([...tasks, newTask]);
    }

    setNewTask("");
  };

  const editTask = (index) => {
    setNewTask(tasks[index]);
    setEditingIndex(index);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    if (editingIndex === index) {
      setNewTask("");
      setEditingIndex(null);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">To-Do List</h1>
      <div className="input-section">
        <input
          type="text"
          className="task-input"
          placeholder="Enter a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="add-button" onClick={addTask}>
          {editingIndex !== null ? "Update" : "Add"}
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span className="task-text">{task}</span>
            <div className="task-actions">
              <button className="edit-button" onClick={() => editTask(index)}>
                Edit
              </button>
              <button className="delete-button" onClick={() => deleteTask(index)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
