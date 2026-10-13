import { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task.trim(),
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((item) => item.id !== id));
  }

  return (
    <div className="todo-app">
      <h2 className="todo-title">To Do List</h2>

      <div className="todo-form">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask();
          }}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      <ul className="todo-list">
        {tasks.map((item) => (
          <li className="todo-item" key={item.id}>
            <label className="todo-label">
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleTask(item.id)}
              />

              <span className={item.completed ? "completed" : ""}>
                {item.text}
              </span>
            </label>

            <button className="todo-delete" onClick={() => deleteTask(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <p className="todo-empty">No tasks yet. Add your first task!</p>
      )}

      <p className="todo-summary">
        Total: {tasks.length} | Completed:{" "}
        {tasks.filter((item) => item.completed).length}
      </p>
    </div>
  );
}

export default TodoList;
