import React, { useState } from "react";

import useNotify from "../hooks/useNotify";
import useUser from "../hooks/useUser";
import MessageComponent from "./MessageComponent";

function ChangePassword() {
  const [formData, setFormData] = useState({currentPassword: "", newPassword: "", confirmPassword: ""});

  const {dispatch, msg, error}  = useNotify(); 
  const {changePassword} =  useUser();


  const handleSubmit = async (e) => {
    e.preventDefault();

    const passwordLength = 8
    const {currentPassword, newPassword, confirmPassword} = formData;
    
    if (!currentPassword || !newPassword, !confirmPassword) {
      console.log("Fields Empty...");
      dispatch({type: true, payload: {success: false, message: "Fields are Empty"}});
      return
    }

    if (newPassword.length < 8) {
      console.log("Check password length...");
      dispatch({type: true, payload: {success: false, message: "Password length cant be less than 8"}});
      return
    }

    if (newPassword !== confirmPassword) {
      console.log("Two Password do not match");
      dispatch({type: true, payload: {success: false, message: "Two passwords do not match"}});
      return
    }

    const {passwordMatch, message} = await changePassword(formData);

    console.log(passwordMatch, message);

    if (passwordMatch === false) {
      dispatch({type: true, payload: {success: false, message}});
    } else {
      setFormData({currentPassword: "", newPassword: "", confirmPassword: ""});
      dispatch({type: true, payload: {success: true, message}});
    }
  }

  const handleOnChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className="tab-pane fade change-password" id="change-password">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-3 col-md-4">Current Password</div>
          <div className="col-lg-9 col-md-8">
            <input
              type="password"
              className="form-control"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4">New Password</div>
          <div className="col-lg-9 col-md-8">
            <input
              type="password"
              className="form-control"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4">Re-enter New Password</div>
          <div className="col-lg-9 col-md-8">
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="mt-4">
          <button className="btn btn-primary">Change Password</button>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
