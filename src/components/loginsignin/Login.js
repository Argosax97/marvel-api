import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <>
      <section className="sign-in-page">
        <div className="sign-in-title">
          <h1>Sign In Page</h1>
        </div>

        <div className="forms">
          <form>
            <div className="email-form">
              <span>Email Address</span>
              <input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="password_text">
              <span>Password</span>
              <a href="#" id="forgot">
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </form>
        </div>
        <div>
          <button type="submit" className="sign-in-btn">
            <span>Sign In</span>
          </button>
        </div>

        <div className="footer">
          <span> Don't have account yet?</span>
          <button className="sign_up"> Sign Up</button>
        </div>
      </section>
    </>
  );
};

export default Login;
