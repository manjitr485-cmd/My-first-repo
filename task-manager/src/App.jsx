import React, { useState } from "react";
import TaskItem from "./components/TaskItem";
import "./styles.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      {tasks.length === 0 ? (
        <p className="no-task">No tasks available</p>
      ) : (
        tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            toggleTask={() => toggleTask(index)}
            deleteTask={() => deleteTask(index)}
          />
        ))
      )}
    </div>
  );
}

export default App;
