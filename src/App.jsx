import { useState } from "react";

import Counter from "./pages/Counter";
import "./App.css";

function App() {
  const [activeApp, setActiveApp] = useState("counter");

  return (
    <div className="app">
      <header className="navbar">
        <h2>React Machine Coding</h2>
      </header>
      <div className="layout">
        <main className="workspace">
          {activeApp === "counter" && <Counter />}
        </main>

        <aside className="sidebar">
          <button
            className={activeApp === "counter" ? "active" : ""}
            onClick={() => setActiveApp("counter")}
          >
            Count App
          </button>
        </aside>
      </div>
    </div>
  );
}

export default App;
