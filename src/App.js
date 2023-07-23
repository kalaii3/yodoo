import React, { useState } from "react";
import { GiNotebook } from "react-icons/gi";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // add tasks
  const handleSubmit = (e) => {
    e.preventDefault();

    const addTask = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      completed: false,
    };

    setTasks([...tasks, addTask]);
    setInput("");
  };

  // delete tasks
  const deleteTask = (id) => {
    let filteredTask = [...tasks].filter((task) => task.id !== id);
    setTasks(filteredTask);
  };

  //toggle completed tasks
  const toggleComplete = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const date = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <div className="app">
      <div className="container">
        <h1>
          <GiNotebook /> YoDoo
        </h1>
        <p style={{ marginTop: "1rem", fontWeight: 600 }}>Your To-Do List Application</p>

        <div className="date">
          <p>{days[date.getDay()]}</p>
          <p>{date.getDate()},</p>
          <p>{months[date.getMonth()]}</p>
          <p>{date.getFullYear()}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <AiOutlinePlus className="icon" />
            <input
              type="text"
              placeholder="Enter a task"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </form>

        <div>
          {tasks.map((task) => (
            <div
              className={`task-row ${task.completed ? "completed" : ""}`}
              key={task.id}
              onDoubleClick={() => toggleComplete(task.id)}
            >
              <p>{task.text}</p>
              <AiOutlineClose
                className="icon"
                onClick={() => deleteTask(task.id)}
              />
            </div>
          ))}
        </div>

        <p className="length">{tasks < 1 ? "You have no tasks" : `Tasks: ${tasks.length}`}</p>
      </div>
    </div>
  );
}

export default App;
