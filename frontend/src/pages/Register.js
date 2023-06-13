import React, { useState } from "react";

import { Link } from "react-router-dom";

import MessageComponent from "../components/MessageComponent";
import useAuthState from "../hooks/useAuthState";

function Register() {
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState(null);

  const { registerUser } = useAuthState();

  const handleFormData = (e) => {
    const name = e.target.name;
    const value = name == "agreeStatus" ? e.target.checked : e.target.value;

    if (message) {
      setMessage(null);
    }

    setFormData((prevForm) => {
      return { ...prevForm, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {password1, password2} = formData;

    if (password1 !== password2) {
      setMessage("Two password do not match");
      return
    }

    registerUser(formData);


  };

  return (
    <div className="form-wrapper mt-5">
     <form onSubmit={handleSubmit}>
     <div className="form-container">
        <div className="heading">
          <div className="form-logo">
            <img src="images/logo3.svg" alt="logo" />
          </div>
          <p>Enter your personal details to create account</p>
        </div>
        {message && <MessageComponent message={message} />}
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" className="form-control" name="username" onChange={handleFormData} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="text" className="form-control" name="email" onChange={handleFormData} />
        </div>

        <div className="form-group">
          <label htmlFor="name">Password</label>
          <input type="password" className="form-control" name="password1" onChange={handleFormData} />
        </div>
        <div className="form-group">
          <label htmlFor="name">Confirm Password</label>
          <input type="password" className="form-control" name="password2" onChange={handleFormData} />
        </div>
        <div className="form-group">
          <input type="checkbox" onChange={handleFormData} name="agreeStatus" />
          <span>
            {" "}
            I agree and accept the <a href="#">terms and condition</a>
          </span>
        </div>
        <button className="btn btn-primary btn-block my-3">
          Create Account
        </button>
        <p>
          Already have an account?<Link to="/login">Log in</Link>
        </p>
      </div>
     </form>
    </div>
  );
}

export default Register;
