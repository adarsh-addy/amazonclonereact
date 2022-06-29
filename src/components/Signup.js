import React from "react";
import "../style/signup.css";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <div className="sign-up">
        <Link to="/">
          <img src="./images/logo.jpg" alt="" className="signup-img" />
        </Link>
        <form className="signup-form">
          <p className="signup-head">Create account</p>
          <br />
          <label>Your name</label>
          <br />
          <input type="text" className="signup-input" />
          <br />
          <br />
          <label>Email(phone for mobile accounts)</label>
          <br />
          <input type="text" className="signup-input" />
          <br />
          <br />
          <label>
            Password<span className="password-para">Forgot your password?</span>
          </label>
          <br />
          <input type="password" className="signup-input" />
          <br />
          <br />
          <label>
            Re-password<span className="password-para">Forgot your password?</span>
          </label>
          <br />
          <input type="password" className="signup-input" />
          <br />
          <br />
          <button className="signup-btn1">Sign in</button>
          <br />
          <br />
          <input type="checkbox" />
          <label>Keep me signed in.Details</label>
          <br />
          <br />
          <br />
          <button className="signup-btn2">Create Your Amazon account</button>
        </form>
      </div>
    </>
  );
}
