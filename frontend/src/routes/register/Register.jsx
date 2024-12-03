import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="registerPage">
      <div className="formContainer">
        <form action="">
          <h1>Create an account</h1>
          <input name="username" placeholder="Username" type="text" />
          <input name="email" placeholder="Email" type="text" />
          <input name="password" placeholder="Password" type="password" />
          <button>Register</button>
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Register;
