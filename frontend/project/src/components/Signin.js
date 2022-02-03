import axios from "axios";
import { useState } from "react";
import { Link, Redirect, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Card, Container, Form, Input, Label } from "reactstrap";
import base_url from "../api/bootapi";

export default function Signin() {
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState();

  //--------------------------------------

  const addUser = (email) => {
    axios.post(`${base_url}/users`, email).then(
      (response) => {
        console.log(response);
        toast.success(`${email} LogIn Successful.`);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    var email = e.target.elements.email.value;
    var pass = e.target.elements.pass.value;
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(email) &&
      /^[a-zA-Z0-9!@#$%^&*]{8,30}$/.test(pass)
    ) {
      //addUser(email);
      sessionStorage.setItem("email", email);

      toast.success(`Successfully LogIn To ` + sessionStorage.getItem("email"));
      e.target.elements.email.value = "";
      e.target.elements.pass.value = "";
    } else {
      toast.warning("Fill all fields");
    }
  };

  //--------------------------------------

  const emailChangeHandler = (e) => {
    let text = e.target.value;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(text)) {
      setEmailError("Invalid Email ID");
      return false;
    }
    setEmailError("");
    return true;
  };

  const passChangeHandler = (e) => {
    let text = e.target.value;
    if (!/^[a-zA-Z0-9!@#$%^&*]{8,30}$/.test(text)) {
      setPassError("Invalid Password");
      return false;
    }
    setPassError("");
    return true;
  };

  return (
    <Container className="text-center w-50">
      <Form
        className="col-md-12 bg-secondary bg-opacity-50 p-3 rounded"
        autoComplete="off"
        onSubmit={submitHandler}
      >
        <h1>Sign In</h1>
        <div className="my-3">
          <label size="lg" htmlFor="email">
            <h4>Email Address</h4>
          </label>

          <Input
            size="lg"
            id="email"
            name="email"
            placeholder="Enter your email here..."
            onChange={emailChangeHandler}
          />
          <span style={{ color: "red", fontWeight: "bolder" }}>
            &nbsp;{emailError}
          </span>
        </div>

        <div className="my-3">
          <label htmlFor="pass">
            <h4>Password </h4>
          </label>
          <Input
            type="password"
            size="lg"
            id="pass"
            name="pass"
            placeholder="Enter your pass here..."
            onChange={passChangeHandler}
          />
          <span style={{ color: "red", fontWeight: "bolder" }}>
            &nbsp;{passError}
          </span>
        </div>
        <Button className="my-3 bg-primary" type="submit">
          Submit
        </Button>
      </Form>
      <p className="text-center mt-3 text-dark">
        If you don't have account, Please <Link to="/signup">Sign Up Here</Link>
      </p>
    </Container>
  );
}
