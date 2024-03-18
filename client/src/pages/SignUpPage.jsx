import React, {useState} from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../providers/AuthProvider/useAuth";

const initialState = {
  username: "", 
  password: "", 
  confirmPassword: "", 
};

function SignUpPage() {
  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState(initialState);
  const { handleSignUp } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password, confirmPassword } = formData;

    await handleSignUp(username, password, confirmPassword)
  }

  const handleInputChange = (e) => setFormData({...formData, [e.target.name]: e.target.value})


  return <Container>
    <h1>Create an Account</h1>
    <Form className="auth-form" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
        type="text"
        autoComplete="off"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        required
        />
      <Form.Control.Feedback type="invalid">
        {errors.username}
      </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
        type="password"
        autoComplete="off"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        required
        />
      <Form.Control.Feedback type="invalid">
        {errors.password}
      </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
        type="password"
        autoComplete="off"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        required
        />
      <Form.Control.Feedback type="invalid">
        {errors.confirmPassword}
      </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Button type="submit">Create Account</Button>
      </Form.Group>
      <Form.Text>
        Already Signed Up? <Link to="/login">Login</Link>
      </Form.Text>
    </Form>
  </Container>
}

export default SignUpPage;