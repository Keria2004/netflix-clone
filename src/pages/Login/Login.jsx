import React from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { useState } from "react";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  const YOUR_API_KEY = "57e917719b244e7eb626e329220d528b";

  const handleSignStateChange = () => {
    setSignState((prevState) =>
      prevState === "Sign In" ? "Sign Up" : "Sign In"
    );
  };

  return (
    <div className="login">
      <img src={logo} alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form action="">
          {signState === "Sign Up" ? (
            <input type="text" placeholder="Your name" />
          ) : (
            <></>
          )}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <babel htmlFor="">Remember me</babel>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <div>
              <p>New to Netflix?</p>
              <span onClick={handleSignStateChange}>Sign Up now</span>
            </div>
          ) : (
            <div>
              <p>Already have account?</p>
              <span onClick={handleSignStateChange}>Sign In now</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
