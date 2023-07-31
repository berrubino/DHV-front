import React from "react";
import "../Login/login.css";
import loginImage from "../../assets/loginImage.jpg";
import fullLogo from "../../assets/fullLogo.svg";
import vector from "../../assets/Vector.svg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-left-styles">
      <img className="login-image-style" src={loginImage} alt="house image" />

      <div className="login-card">
        <div className="login-card-top">
          <img className="fulllogo-style" src={fullLogo} alt="full logo" />
          <div className="vector-container">
            <img className="vector-style" src={vector} alt="vector" />
            <div className="vector-text">Tu nueva vivienda esta aquí</div>
          </div>
        </div>
        <div>
          <Form>
            <Form.Group className="mb-3 email-field" controlId="formBasicEmail">
              <Form.Control
                className="field-style"
                type="email"
                placeholder="EMAIL"
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
              />
            </Form.Group>

            <div className="change-password">
              <Link>
                <p>¿Olvidaste tu contraseña?</p>
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
