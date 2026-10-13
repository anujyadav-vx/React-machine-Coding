import { useState } from "react";

export default function ToDo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim === "") return;

    const newTask = {
      id: Date.now(),
      text: task.trim(),
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTask("");
  }
  return (
    <div className="todo-app">
      <h2>ToDo List</h2>
      <div>
        <input
          type="text"
          placeholder="Enter your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask();
          }}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
}
