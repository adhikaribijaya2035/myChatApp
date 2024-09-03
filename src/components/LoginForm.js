import React from "react";
import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();

    const authObject = {
      "project-ID": "27f43bda-659c-4e1d-855e-833da22181d6",
      "User-Name": username,
      "User-Secret": password
    };
 

  try {
    await axios.get("https://api.chatengine.io/chats", { headers: authObject });

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);


    window.location.reload();
  } catch (error) {
    setError('oops! incorrect username or password')
  }
};
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Login</span>
            </button>
          </div>
          <h1 className="error">{error}</h1>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
