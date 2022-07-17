import React, { useRef, useState } from "react";
import "./register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { signupuser } from "../../actions/authactions";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = useSelector((state) => {
    return state.auth;
  });

  const handleform = (e) => {
    e.preventDefault();
    const userobject = { email, username, password, confirmpassword };
    dispatch(signupuser(userobject));
  };

  if (auth.authenticated) {
    return <Navigate to="/" />;
  }
  const handlesignuplogin = () => {
    return navigate("/login");
  };

  return (
    <div className="register">
      <div className="registerwrapper">
        <div className="title">Create a new Account</div>
        <Form onSubmit={handleform}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              required
              value={username}
              onChange={(e) => setusername(e.target.value)}
              min={3}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              min={6}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm your password"
              onChange={(e) => setconfirmpassword(e.target.value)}
              value={confirmpassword}
              min={6}
              required
            />
          </Form.Group>
          <div className="bottom">
            <Button variant="primary" type="submit">
              SUBMIT
            </Button>
            <div className="logintext">
              Already have an account?{" "}
              <span onClick={handlesignuplogin}>Login</span>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
