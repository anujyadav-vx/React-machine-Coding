import { useState } from "react";

import Counter from "./pages/Counter";
import ToDo from "./pages/ToDo";
import Register from "./pages/Register";
import Login from "./pages/Login";

import "./App.css";

function App() {
  const [activeApp, setActiveApp] = useState("counter");

  return (
    <div className="app">
      <header className="navbar">
        <h2 className="nav-title">REACT.JS MACHINE CODING</h2>
      </header>
      <div className="layout">
        <main className="workspace">
          {activeApp === "counter" && <Counter />}
          {activeApp === "todo" && <ToDo />}
          {activeApp === "register" && <Register />}
          {activeApp === "login" && <Login />}
        </main>

        <aside className="sidebar">
          <button
            className={activeApp === "counter" ? "active" : ""}
            onClick={() => setActiveApp("counter")}
          >
            Count App
          </button>

          <button
            className={activeApp === "tod0" ? "active" : ""}
            onClick={() => setActiveApp("todo")}
          >
            ToDo List
          </button>

          <button
            className={activeApp === "register" ? "active" : ""}
            onClick={() => setActiveApp("register")}
          >
            Register
          </button>

          <button
            className={activeApp === "login" ? "active" : ""}
            onClick={() => setActiveApp("login")}
          >
            Login
          </button>
        </aside>
      </div>
    </div>
  );
}

export default App;
