import React, { useState } from "react";
import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import apiRequests from "../../lib/apiRequests";
const Register = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    // API call to register user with username, email, and password
    try {
      const response = await apiRequests.post("/auth/register", {
        username,
        email,
        password,
      });
      
      navigate("/login");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="registerPage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an account</h1>
          <input name="username" placeholder="Username" type="text" />
          <input name="email" placeholder="Email" type="text" />
          <input name="password" placeholder="Password" type="password" />
          <button disabled={isLoading}>Register</button>
          {error && <span>{error}</span>}
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
