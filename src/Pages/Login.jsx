import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-header">
          <div className="movie-icon">
            <i className="fas fa-film"></i>
          </div>
          <h2>Welcome Back</h2>
          <p>Sign in to continue your movie journey</p>
        </div>

        <form id="form1" className="login-form">
          <div className="form-group">
            <div className="input-group">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                className="bar"
                id="email"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-group">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                className="bar"
                id="password"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" id="loginsubmit" className="login-button">
            <span className="button-content">
              <i className="fas fa-sign-in-alt"></i>
              Sign In
            </span>
            <span className="button-effect"></span>
          </button>

          <div className="social-login">
            <div className="divider">
              <span>Or continue with</span>
            </div>
            <div className="social-buttons">
              <button type="button" className="social-btn google">
                <i className="fab fa-google"></i>
                <span>Google</span>
              </button>
              <button type="button" className="social-btn facebook">
                <i className="fab fa-facebook-f"></i>
                <span>Facebook</span>
              </button>
              <button type="button" className="social-btn twitter">
                <i className="fab fa-twitter"></i>
                <span>Twitter</span>
              </button>
            </div>
          </div>

          <div className="form-footer">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="signup-link">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
