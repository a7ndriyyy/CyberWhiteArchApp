import React, { useState } from "react";
import { Container, Form, Input, Button, Message } from "./Register.styled";

const Register = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
      });
      const data = await res.json();
      if (res.ok) {
        setToken(data.token);
        setResponseMessage(`Your token: ${data.token}`);
      } else {
        setResponseMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      setResponseMessage("Server connection error.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const data = await res.json();
      if (res.ok) {
        setResponseMessage("Login successful!");
        onLoginSuccess(token);
      } else {
        setResponseMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      setResponseMessage("Server connection error.");
    }
  };

  return (
    <Container>
      <h2>Anonymous Registration</h2>
      <Form onSubmit={handleRegister}>
        <Input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Button type="submit">Register</Button>
      </Form>
      {responseMessage && <Message>{responseMessage}</Message>}

      {token && (
        <Form onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="Enter your token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
          />
          <Button type="submit">Login</Button>
        </Form>
      )}
    </Container>
  );
};

export default Register;
