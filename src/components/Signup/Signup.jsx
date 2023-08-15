import React from "react";
import Logo from "../../assets/Logo.svg";
import { Button, Col, Form, Row } from "react-bootstrap";
import loginImage from "../../assets/loginImage.jpg";
import "../Signup/signup.css";
import useInput from "../../hook/useInput";
import { signup } from "../../services/user/signup";

function Signup() {
  const name = useInput();
  const lastname = useInput();
  const password = useInput();
  const validate_password = useInput();
  const email = useInput();
  const phone_number = useInput();
  const address = useInput();
  const city = useInput();
  const state = useInput();
  const zip_code = useInput();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const user = {
        name: name.value,
        lastname: lastname.value,
        password: password.value,
        email: email.value,
        phone_number: phone_number.value,
        address: address.value,
        city: city.value,
        state: state.value,
        zip_code: zip_code.value,
      };
      if (password.value === validate_password.value) {
        await signup(user);
      }
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

      <div className="signup-card ">
        <div className="signup-card-top">
          <img className="signup-logo-style" src={Logo} alt="logo" />
        </div>
        <div className="signup-form-container">
          <Form onSubmit={handleSignup}>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                controlId="formGridName"
                className="signup-fields"
              >
                <Form.Control
                  type="text"
                  placeholder="Name"
                  className="signup-field-style"
                  {...name}
                  onChange={name.onChange}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridLastName"
                className="signup-fields"
              >
                <Form.Control
                  type="text"
                  placeholder="LastName"
                  className="signup-field-style"
                  {...lastname}
                  onChange={lastname.onChange}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group
                as={Col}
                controlId="formGridPassword"
                className="signup-fields"
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="signup-field-style"
                  {...password}
                  onChange={password.onChange}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridValidatePassword"
                className="signup-fields"
              >
                <Form.Control
                  type="password"
                  placeholder="Validate Password"
                  className="signup-field-style"
                  {...validate_password}
                  onChange={validate_password.onChange}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group
                as={Col}
                controlId="formGridEmail"
                className="signup-fields"
              >
                <Form.Control
                  type="email"
                  placeholder="E-mail"
                  className="signup-field-style"
                  {...email}
                  onChange={email.onChange}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridPhoneNumber"
                className="signup-fields"
              >
                <Form.Control
                  type="phone"
                  placeholder="Phone Number"
                  className="signup-field-style"
                  {...phone_number}
                  onChange={phone_number.onChange}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress">
              <Form.Control
                placeholder="Address(Apartment, studio, or floor)"
                className="signup-field-style"
                {...address}
                onChange={address.onChange}
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group
                as={Col}
                controlId="formGridCity"
                className="signup-fields"
              >
                <Form.Control
                  placeholder="City"
                  className="signup-field-style"
                  {...city}
                  onChange={city.onChange}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridState"
                className="signup-fields"
              >
                <Form.Control
                  type="text"
                  placeholder="State"
                  className="signup-field-style"
                  {...state}
                  onChange={state.onChange}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridZip"
                className="signup-fields"
              >
                <Form.Control
                  placeholder="Zip Code"
                  className="signup-field-style"
                  {...zip_code}
                  onChange={zip_code.onChange}
                />
              </Form.Group>
            </Row>
            <div className="signup-button-container">
              <Button variant="primary" type="submit" className="signup-button">
                Sign Up
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
