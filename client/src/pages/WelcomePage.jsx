import React, { useState } from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Assuming you are using React Router for navigation

const WelcomePage = (props) => {
  const initialState = {
    username: "",
    errorMessage: "",
    isSubmitting: false,
  };

  const [data, setData] = useState(initialState);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSignin = async (e) => {
    // Handle sign in logic here
  };

  return (
    <div style={{ overflow: "auto", height: "100vh" }}>
      <Container fluid className="h-100">
        <Row className="h-100 justify-content-center align-items-center">
          <Col xs={12} md={6} lg={4}>
            <Form
              noValidate
              validated
              onSubmit={handleSignin}
            >
              <h3 className="mb-3" style={{ whiteSpace: "nowrap" }}>
                <b>Welcome To The Virtual Book App</b>
              </h3>
              <h1 className="mb-3" style={{ whiteSpace: "nowrap" }}>
                <b><i>That's Another Story!</i></b>
              </h1>

              <Form.Group controlId="username-login">
                <Form.Label>Username</Form.Label>
                <InputGroup>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                    value={data.username}
                    onChange={handleInputChange}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="password-login">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <InputGroup.Text id="inputGroupPrependPassword">@</InputGroup.Text>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    aria-describedby="inputGroupPrependPassword"
                    required
                    value={data.password}
                    onChange={handleInputChange}
                  />
                </InputGroup>
              </Form.Group>

              <Row className="mr-0">
                <Col>
                  New User?
                  <Button
                    as="a"
                    variant="link"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </Button>
                </Col>
                <Button type="submit" disabled={data.isSubmitting}>
                  {data.isSubmitting ? <LoadingSpinner /> : "Login"}
                </Button>
              </Row>

              {data.errorMessage && (
                <span className="form-error text-warning">
                  {data.errorMessage}
                </span>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WelcomePage;