import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Counter App</h2>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(Math.max(0, count - 1))}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
