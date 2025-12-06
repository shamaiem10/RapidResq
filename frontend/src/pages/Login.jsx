import React, { useState } from "react";
import { Link } from "react-router-dom"; // if using react-router
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
    // Add backend API request here
  };

  return (
    <div className="login-page">
      
      {/* BACK ARROW FIXED ON PAGE */}
      <div className="page-back-arrow">
        <Link to="/">
          <i className="bi bi-arrow-left"></i> Back to home
        </Link>
      </div>

      <div className="login-container">
        <div className="login-card">

          <h2 className="login-title">Login</h2>

          <form className="login-form" onSubmit={handleSubmit}>

            <div className="input-group">
              <i className="bi bi-person icon"></i>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <i className="bi bi-lock icon"></i>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button className="login-btn" type="submit">
              Login
            </button>

            <p className="signup-text">
              Don’t have an account? <a href="/signup">Sign up</a>
            </p>

          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;
