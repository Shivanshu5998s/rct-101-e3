import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [enter, setenter] = useState({
    email: "shi@123gmail.com",
    password: "123456",
  });
  const { login } = useContext(AuthContext);

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setenter({
      ...enter,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enter.email && enter.password) {
      login(enter.email, enter.password);
    }
  };
  return (
    <div>
      Login
      <form
        onSubmit={handleSubmit}
      >
        <input
          data-cy="login-email"
          name="email"
          type="email"
          placeholder="Enter Email"
          value={enter.email}
          onChange={hanldeChange}
        />
        <input
          data-cy="login-password"
          name="password"
          type="password"
          placeholder="Enter Password..."
          value={enter.password}
          onChange={hanldeChange}
        />
        <button data-cy="login-submit" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
