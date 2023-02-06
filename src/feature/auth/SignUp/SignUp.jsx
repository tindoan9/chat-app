import React from "react";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="body">
      <div className="container">
        <form className="form">
          <h1 className="form__title">Create Account</h1>
          <div className="form__input-group">
            <input
              type="text"
              id="signupUsername"
              className="form__input"
              placeholder="Nick Name"
            />
          </div>
          <div className="form__input-group">
            <input
              type="text"
              className="form__input"
              placeholder="Email Address"
            />
          </div>
          <div className="form__input-group">
            <input
              type="password"
              className="form__input"
              placeholder="Password"
            />
          </div>
          <div className="form__input-group">
            <input
              type="password"
              className="form__input"
              placeholder="Confirm password"
            />
          </div>
          <div className="field__avatar">
            <input required style={{ display: "none" }} type="file" id="file" />
            <label htmlFor="file">
              <img
                src={
                  "https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/addAvatar.png"
                }
                alt=""
              />
              <span>Add an avatar</span>
            </label>
          </div>
          <button className="form__button">Continue</button>
          <p className="form__text">
            <a onClick={() => navigate("/signin")} className="form__link">
              Already have an account? Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
