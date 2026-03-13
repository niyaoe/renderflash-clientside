import React from "react";
import "../LoginPage/RenderFlashLogin.css";
import { Link } from "react-router-dom";
import TargetCursor from "../../Blits/TargetCursor";

const SignUpPage = () => {
  return (
    <div className="rf-login-wrapper">
      {/* BLITS */}
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />

      {/* LOGIN CARD */}
      <div className="rf-login-container">
        <div className="rf-login-card">
          <Link className="loginPage-title" to="/">
            <h2 className="rf-login-logo cursor-target">renderFlash</h2>
          </Link>

          <h2 className="rf-login-title">Sign Up</h2>

          <form className="rf-login-form">
            <div className="rf-login-field">
              <input
                type="text"
                placeholder="username"
                className="rf-login-input cursor-target"
              />
            </div>

            <div className="rf-login-field">
              <input
                type="email"
                placeholder="Email Address"
                className="rf-login-input cursor-target"
              />
            </div>

            <div className="rf-login-field">
              <input
                type="password"
                placeholder="Password"
                className="rf-login-input cursor-target"
              />
            </div>

            <div className="rf-login-field">
              <input
                type="password"
                placeholder="Confirm Password"
                className="rf-login-input cursor-target"
              />
            </div>

            <button type="submit" className="rf-login-btn cursor-target">
              Sign Up
            </button>
          </form>

          <div className="rf-login-footer">
            <p>
              Already in renderFlash?{" "}
              <span className="rf-login-signup cursor-target">
                <Link className="sign-switch" to="/login">
                  Sign in now
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
