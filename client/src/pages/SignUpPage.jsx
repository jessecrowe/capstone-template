import React, {useState} from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../providers/AuthProvider/useAuth";

const initialState = {
  userName: "", 
  password: "", 
  confirmPassword: "",
  firstName: "", 
  lastName: "", 
  email: "", 
  streetName: "", 
  streetNum: "", 
  city: "", 
  state: "", 
  zipCode: "", 
  favGenres: "",
};

function SignUpPage() {
  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState(initialState);
  const { handleSignUp } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { userName, password, confirmPassword, firstName, lastName, email,
    streetName, streetNum, city, state, zipCode, favGenres } = formData;

    await handleSignUp(userName, password, confirmPassword, firstName, lastName, email,
      streetName, streetNum, city, state, zipCode, favGenres)
  }

  const handleInputChange = (e) => setFormData({...formData, [e.target.name]: e.target.value})


  return <Container>
    <h1>Create an Account</h1>
    <Form className="auth-form" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
        type="text"
        // autoComplete="off"
        name="userName"
        value={formData.userName}
        onChange={handleInputChange}
        required
        />
      <Form.Control.Feedback type="invalid">
        {errors.userName}
      </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
        type="password"
        // autoComplete="off"
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
        // autoComplete="off"
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
        <Form.Label>First Name</Form.Label>
        <Form.Control
        type="text"
        // autoComplete="off"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        required
        />
      <Form.Control.Feedback type="invalid">
        {errors.firstName}
      </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
        type="text"
        // autoComplete="off"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
        required
        />
      <Form.Control.Feedback type="invalid">
        {errors.lastName}
      </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
        type="email"
        // autoComplete="off"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
        />
      <Form.Control.Feedback type="invalid">
        {errors.email}
      </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Street Number</Form.Label>
        <Form.Control
        type="text"
        // autoComplete="off"
        name="streetNum"
        value={formData.streetNum}
        onChange={handleInputChange}
        required
        />
      <Form.Control.Feedback type="invalid">
        {errors.streetNum}
      </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Street Name</Form.Label>
        <Form.Control
        type="text"
        // autoComplete="off"
        name="streetName"
        value={formData.streetName}
        onChange={handleInputChange}
        required
        />
      <Form.Control.Feedback type="invalid">
        {errors.streetName}
      </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>City</Form.Label>
        <Form.Control
        type="text"
        // autoComplete="off"
        name="city"
        value={formData.city}
        onChange={handleInputChange}
        required
        />
      <Form.Control.Feedback type="invalid">
        {errors.city}
      </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>State</Form.Label>
        <Form.Control
        type="text"
        // autoComplete="off"
        name="state"
        value={formData.state}
        onChange={handleInputChange}
        required
        />
      <Form.Control.Feedback type="invalid">
        {errors.state}
      </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Zip</Form.Label>
        <Form.Control
        type="text"
        // autoComplete="off"
        name="zipCode"
        value={formData.zipCode}
        onChange={handleInputChange}
        required
        />
      <Form.Control.Feedback type="invalid">
        {errors.zipCode}
      </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Favorite Genre</Form.Label>
        <Form.Control
        type="text"
        // autoComplete="off"
        name="favGenres"
        value={formData.favGenres}
        onChange={handleInputChange}
        />
      <Form.Control.Feedback type="invalid">
        {errors.favGenres}
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