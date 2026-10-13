import Counter from "./pages/Counter";
import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2>React Machine Coding</h2>
      </nav>
      <div className="layout">
        <main className="workspace"></main>
        <aside className="sidebar">
          <Counter />
        </aside>
      </div>
    </div>
  );
}

export default App;
