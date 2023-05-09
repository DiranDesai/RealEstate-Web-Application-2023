import React from "react";

function ChangePassword() {
  return (
    <div className="tab-pane fade change-password" id="change-password">
      <div className="row">
        <div className="col-lg-3 col-md-4">Current Password</div>
        <div className="col-lg-9 col-md-8">
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4">New Password</div>
        <div className="col-lg-9 col-md-8">
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4">Re-enter New Password</div>
        <div className="col-lg-9 col-md-8">
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="mt-4">
        <button className="btn btn-primary">Change Password</button>
      </div>
    </div>
  );
}

export default ChangePassword;
