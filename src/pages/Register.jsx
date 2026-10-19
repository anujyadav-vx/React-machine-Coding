import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("Required fields cannot be empty");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(name)) {
      setError("please enter name");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter valid email");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(password)) {
      setError("please enter correct email");
    }

    setError("");
    alert("registration successful");
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="name"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
