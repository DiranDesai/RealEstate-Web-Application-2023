import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Loader from "../components/Loader";
import MessageComponent2 from "../components/MessageComponent2";
import useAuthState from "../hooks/useAuthState";

import { RESET_LOGIN_ERROR } from "../context/types";

function Login() {
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState(null);

  const { error, dispatch, loading } = useAuthState();


  const { loginUser } = useAuthState();
  const handleFormData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (message) {
      setMessage(null);
    }
    if (error) {
      dispatch({ type: RESET_LOGIN_ERROR });
    }
    setFormData((prevForm) => {
      return { ...prevForm, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(formData);
  };

  return (
    <>
      {loading && <Loader />}
      <div className="form-wrapper mt-5">
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <div className="heading">
              <div className="form-logo">
                <img src="images/logo.png" alt="logo" />
                <h3>pabondi</h3>
              </div>
              <p>Enter your email & password to login</p>
            </div>
            {error && <MessageComponent2 message={error} />}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-group">
                <span className="input-group-text" id="inputGroupPrepend">
                  @
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  onChange={handleFormData}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="name">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleFormData}
              />
            </div>
            <div className="form-group">
              <input type="checkbox" />
              <span> Remember me</span>
            </div>
            <button type="submit" className="btn btn-primary btn-block my-3">
              Login
            </button>
            <p>
              Don't have account? <Link to="/account">Create an account</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
