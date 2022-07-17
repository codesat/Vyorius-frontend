import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginuser } from "../../actions/authactions";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => {
    return state.auth;
  });

  const handleloginform = (e) => {
    e.preventDefault();
    const userobject = { email, password, confirmpassword };
    dispatch(loginuser(userobject));
  };

  if (auth.authenticated) {
    return <Navigate to="/" />;
  }
  const handleloginsignup = () => {
    navigate("/signup");
  };

  return (
    <div className="login">
      <div className="loginwrapper">
        <div className="title">Login to your Account</div>
        <Form onSubmit={handleloginform}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setemail(e.target.value)}
              value={email}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setpassword(e.target.value)}
              value={password}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm your password"
              onChange={(e) => setconfirmpassword(e.target.value)}
              value={confirmpassword}
            />
          </Form.Group>
          <div className="bottom">
            <Button variant="primary" type="submit">
              SUBMIT
            </Button>
            <div className="signuptext">
              New User? <span onClick={handleloginsignup}>Signup</span>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
