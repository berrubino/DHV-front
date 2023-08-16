import React, { useState } from "react";
import "../Login/login.css";
import fullLogo from "../../assets/fullLogo.svg";
import vector from "../../assets/Vector.svg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import loginImage from "../../assets/loginImage.jpg";
import { login } from "../../services/user/login";
import useInput from "../../hook/useInput";

function Login() {
  const email = useInput();
  const password = useInput();

  const handleLogin = async (e) => {
    e.preventDefault();
    const loguedUser = {
      email: email.value,
      password: password.value,
    };
    try {
      console.log("login", loguedUser);
      await login(loguedUser);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="loginSignup-left-styles">
      <img
        className="loginSignup-image-style"
        src={loginImage}
        alt="house image"
      />
      <div className="login-card">
        <div className="login-card-top">
          <img className="fullLogo-style" src={fullLogo} alt="full logo" />
          <div className="vector-container">
            <img className="vector-style" src={vector} alt="vector" />
            <div className="vector-text">Tu nueva vivienda esta aquí</div>
          </div>
        </div>
        <div>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3 email-field" controlId="formBasicEmail">
              <Form.Control
                className="field-style"
                type="email"
                placeholder="EMAIL"
                {...email}
                onChange={email.onChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 password-field"
              controlId="formBasicPassword"
            >
              <Form.Control
                className="field-style"
                type="password"
                placeholder="PASSWORD"
                {...password}
                onChange={password.onChange}
              />
            </Form.Group>

            <div className="change-password">
              <Link>
                <p>Forgot your password?</p>
              </Link>
            </div>

            <div className="signup-link">
              <Link to="/signup">
                <p>I don`t have an account</p>
              </Link>
            </div>

            <Button className="login-button" variant="primary" type="submit">
              Log In
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
