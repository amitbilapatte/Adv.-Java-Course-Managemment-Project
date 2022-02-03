import { useState } from "react";
import { Button, Container, Form, Input } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import base_url from "../api/bootapi";

export default function Registration() {
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState();
  const [mobileError, setMobileError] = useState("");

  const addUser = (user) => {
    axios.post(`${base_url}/users`, user).then(
      (response) => {
        console.log(response.data);
        toast.success("Account Successfully Created");
        sessionStorage.setItem("username", user.name);
        sessionStorage.setItem("email", user.email);
        sessionStorage.setItem("mobileNo", user.mobileNo);
      },
      (error) => {
        console.log(error.data);
        toast.error("Account Creation Failed");
      }
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    var uname = e.target.elements.username.value;
    var email = e.target.elements.email.value;
    var pass = e.target.elements.pass.value;
    var mobile = e.target.elements.mobile.value;
    if (
      /^[a-zA-Z0-9_-]{3,20}$/.test(uname) &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(email) &&
      /^[a-zA-Z0-9!@#$%^&*]{8,30}$/.test(pass) &&
      /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/.test(mobile)
    ) {
      var user = {
        name: uname,
        email: email,
        password: pass,
        mobileNo: mobile,
      };
      addUser(user);
      e.target.elements.username.value = "";
      e.target.elements.email.value = "";
      e.target.elements.pass.value = "";
      e.target.elements.mobile.value = "";
    } else {
      toast.warning("Fill all fields");
    }
  };

  const usernameChangeHandler = (e) => {
    let text = e.target.value;
    if (!/^[a-zA-Z0-9_-]{3,20}$/.test(text)) {
      setUsernameError("Invalid Username");
      return false;
    }
    setUsernameError("");
    return true;
  };

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

  const mobileChangeHandler = (e) => {
    let text = e.target.value; //      /^[a-zA-Z0-9]+$/
    if (!/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/.test(text)) {
      setMobileError("Invalid Mobile Number");
      return false;
    }
    setMobileError("");
    return true;
  };

  return (
    <Container className="text-center w-50">
      <Form
        className="col-md-12 bg-secondary bg-opacity-50 p-3 rounded"
        onSubmit={submitHandler}
        autoComplete="off"
      >
        <h1>Register</h1>
        <div>
          <label htmlFor="username" className="mt-3">
            <h5>User Name</h5>
          </label>
          <Input
            type="text"
            placeholder="Enter your username"
            id="username"
            name="username"
            onChange={usernameChangeHandler}
          />
          <span style={{ color: "red", fontWeight: "bolder" }}>
            &nbsp;{usernameError}
          </span>
        </div>
        <div>
          <label htmlFor="email" className="mt-3">
            <h5>Email</h5>
          </label>
          <Input
            type="text"
            id="email"
            name="email"
            class="form-control"
            placeholder="Enter Email"
            onChange={emailChangeHandler}
          />
          <span style={{ color: "red", fontWeight: "bolder" }}>
            &nbsp;{emailError}
          </span>
        </div>

        <div>
          <label htmlFor="pass" className="mt-3">
            <h5>Password</h5>
          </label>
          <Input
            type="password"
            id="pass"
            name="pass"
            class="form-control"
            placeholder="Enter Password"
            onChange={passChangeHandler}
          />
          <span style={{ color: "red", fontWeight: "bolder" }}>
            &nbsp;{passError}
          </span>
        </div>
        <div>
          <label htmlFor="mobile" className="mt-3">
            <h5>Mobile Number</h5>
          </label>
          <Input
            type="tel"
            id="mobile"
            name="mobile"
            class="form-control"
            placeholder="Enter Mobile Number"
            onChange={mobileChangeHandler}
          />
          <span style={{ color: "red", fontWeight: "bolder" }}>
            &nbsp;{mobileError}
          </span>
        </div>
        <Button type="reset" className="bg-warning mt-4 mx-3">
          Clear All
        </Button>
        <Button type="submit" className="bg-primary mt-4">
          Sign Up Now
        </Button>
      </Form>

      <p className="text-center mt-3 text-dark">
        Already have account? Log In <Link to="/signin">Sign In Here</Link>
      </p>
    </Container>
  );
}
