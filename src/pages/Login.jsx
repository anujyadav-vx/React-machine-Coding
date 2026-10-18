export default function Login() {
  return (
    <div className="login-app">
      <h2>Login Form</h2>
      <form action="">
        <div>
          <label>Email</label>
          <input type="email" id="email" placeholder="Enter your Email" />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter correct Password"
          />
        </div>
      </form>
      <button>Login</button>
    </div>
  );
}
