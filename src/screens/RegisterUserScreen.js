import { useState, useContext, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Col, Form, Button, Row } from "react-bootstrap";
import { UsersContext } from "../contexts/UsersContext";

const RegisterUserScreen = () => {
  const history = useHistory();
  const location = useLocation();

  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { registerUser, userInfo } = useContext(UsersContext);

  const redirect = location.search ? location.search.split("=")[1] : "/login";

  useEffect(() => {
    if (userInfo.name) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  function handlesubmit(e) {
    e.preventDefault();
    const newuser = {
      name,
      email,
      password,
    };
    registerUser(newuser);
  }

  return (
    <div>
      <Row className="justify-content-md-center">
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className="border border-white mt-5 p-3"
        >
          <Form onSubmit={handlesubmit}>
            <Form.Group>
              <Form.Label>name</Form.Label>
              <Form.Control
                placeholder="enter name"
                value={name}
                onChange={(text) => setname(text.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                placeholder="enter email"
                value={email}
                onChange={(text) => setEmail(text.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                placeholder="enter password"
                value={password}
                onChange={(text) => setPassword(text.target.value)}
              />
            </Form.Group>
            <Button type="submit">SIGN UP</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default RegisterUserScreen;
