import React, { useRef } from "react";
import { v4 as uuidV4 } from "uuid";
import { Container, Form, Button } from "react-bootstrap";

const Login = ({ onUserIdSubmit }) => {
  const idRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onUserIdSubmit(idRef.current.value);
  };

  const createNeUserId = () => {
    const newUserId = uuidV4();
    onUserIdSubmit(newUserId);
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh", width: "100%" }}
    >
      <Form className="w-100" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Enter Username</Form.Label>
          <Form.Control type="text" ref={idRef} required></Form.Control>
        </Form.Group>
        <Button type="submit" className="mr-2">
          Login
        </Button>
        <Button variant="secondary" onClick={createNeUserId}>
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
