import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Fill the required field");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    alert("Form validation successful");
  }
  return (
    <div className="login-app">
      <h2 className="login-title">Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="login-email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login-password">
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter correct Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login-showPassword"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "hide" : "show"}
          </button>
        </div>
        {error && <p>{error}</p>}
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
