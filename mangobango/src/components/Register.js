import React, { useState } from "react";

function Register() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>React SignUp Component</h3>
      <p>You clicked {count} time</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Register;
