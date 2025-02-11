import React, { useState } from "react";
import { Container, Form, Input, Button, Message } from "./Register.styled";

const Register = () => {
  const [username, setUsername] = useState("");
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
        setResponseMessage(`Ваш токен: ${data.token}`);
      } else {
        setResponseMessage(`Помилка: ${data.message}`);
      }
    } catch (error) {
      setResponseMessage("Error, we hack you :)");
    }
  };

  return (
    <Container>
      <h2>Anonym Data</h2>
      <Form onSubmit={handleRegister}>
        <Input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Button type="submit">Registre</Button>
      </Form>
      {responseMessage && <Message>{responseMessage}</Message>}
    </Container>
  );
};

export default Register;
