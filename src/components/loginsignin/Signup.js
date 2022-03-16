import React from "react";

const Signup = () => {
  return (
    <div className="signup_pagae">
      <div className="sign_container">
        <div className="signup_title">
          <h1>Sign in</h1>
        </div>
        <div className="forms">
          <form className="fName">
            <span>First Name</span>
            <input type="text" placeholder="Enter your first name" />
          </form>
          <form className="lName">
            <span>Last Name</span>
            <input type="text" placeholder="Enter your last name" />
          </form>
          <form className="email_form">
            <span>Email Address</span>
            <input type="email" placeholder="Enter your email" />
          </form>
          <form className="password_form">
            <div className="password_text">
              <span>Password</span>
              <span className="random">Get random password?</span>
            </div>
            <div>
              <input
                id="signup_password"
                type="password"
                placeholder="Enter your password"
              />
              <i className="far fa-eye" id="togglePassword"></i>
            </div>
          </form>
        </div>
        <button type="submit" className="sign_in">
          <span>Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default Signup;
