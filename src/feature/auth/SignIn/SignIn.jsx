import React from "react";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div className="body">
      <div className="container">
        <form className="form" id="login">
          <h1 className="form__title">Login</h1>
          <div className="form__input-group">
            <input type="text" className="form__input" placeholder="Email" />
          </div>
          <div className="form__input-group">
            <input
              type="password"
              className="form__input"
              placeholder="Password"
            />
          </div>
          <button
            onClick={() => navigate("/chatroom")}
            className="form__button"
          >
            Continue
          </button>
          <p className="form__text">
            <a onClick={() => navigate("/signup")} className="form__link">
              Don't have an account? Create account.
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
