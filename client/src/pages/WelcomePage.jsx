import React, {useState} from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const initialState = {
  username: "", 
  password: "",  
};

function WelcomePage() {
  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState(initialState);

  const handleInputChange = (e) => setFormData({...formData, [e.target.name]: e.target.value})


  return <Container>
    <h1>Log In</h1>
    <Form className="auth-form" onSubmit={() => {} }>
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
        <Button type="submit">Log In</Button>
      </Form.Group>
      <Form.Text>
        New User? <Link to="/signup">Sign Up</Link>
      </Form.Text>
    </Form>
  </Container>
}

export default WelcomePage;