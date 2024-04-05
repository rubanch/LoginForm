import React, { Component } from "react";
import axios from "axios";
import { useState, useRef } from "react";
import { Message } from "rsuite";
import { Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [FirstName, setFirstName] = useState([""]);
  const [LastName, setLastName] = useState([""]);
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const msgref = useRef();



  const handleSignupForm = async (event) => {
    event.preventDefault();
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    let param = {
      firstname: FirstName,
      lastname: LastName,
      email: Email,
      password: Password,
    };

    let URL = "http://localhost:5173/api/Signup";
    await axios
      .post(URL, param, {
        headers: headers,
      })
      .then((response) => {
        if (response.data == null || response.data == undefined) {
          console.log(response.data);
        } else {
          msgref.current.style.visibility = "visible";
          console.log(response);

          setTimeout(() => {
            msgref.current.style.visibility = "hidden";
            navigate("/sign-in");
          }, 5000);
        }
      });
  };



  

  return (
    <>
      <form onSubmit={handleSignupForm}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
        <div class="alert alert-success msg" ref={msgref} role="alert">
          Registeration Successful!
        </div>
      </form>
    </>
  );
};

export default Register;
