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
      setResponseMessage("Помилка з'єднання з сервером.");
    }
  };

  return (
    <Container>
      <h2>Anonym Registration</h2>
      <Form onSubmit={handleRegister}>
        <Input
          type="text"
          placeholder="Введіть ім'я користувача"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Button type="submit">Зареєструватися</Button>
      </Form>
      {responseMessage && <Message>{responseMessage}</Message>}
    </Container>
  );
};

export default Register;
