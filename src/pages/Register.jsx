export default function Register() {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="name" placeholder="Enter your full name" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <button>Register</button>
      </form>
    </div>
  );
}
