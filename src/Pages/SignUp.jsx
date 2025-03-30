import React from "react";
import { Link } from "react-router-dom";
import "../styles/signup.css";

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="signup-header">
          <div className="movie-icon">
            <i className="fas fa-film"></i>
          </div>
          <h2>Create Your Movie Account</h2>
          <p>Join our cinematic community and start your movie journey</p>
        </div>

        <form id="form2" className="signup-form">
          <div className="form-group">
            <div className="input-group">
              <i className="fas fa-user"></i>
              <input
                type="text"
                className="bar1"
                id="name"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-group">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                className="bar1"
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
                className="bar1"
                id="password"
                placeholder="Create a password"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-group">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                className="bar1"
                id="confirm-password"
                placeholder="Confirm your password"
              />
            </div>
          </div>

          <button type="submit" id="signupsubmit" className="signup-button">
            <span className="button-content">
              <i className="fas fa-user-plus"></i>
              Create Account
            </span>
            <span className="button-effect"></span>
          </button>

          <div className="social-login">
            <div className="divider">
              <span>Or sign up with</span>
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
              Already have an account?{" "}
              <Link to="/login" className="login-link">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
