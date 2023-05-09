import React from "react";

function ProfileOverview() {
  return (
    <div
      className="tab-pane fade profile-overview active show"
      id="profile-overview"
    >
      <h5 className="inner-title">About</h5>
      <p>
        I am a keen and enthusiastic learner. With over 5 (five) years of
        result-oriented experience as a professional Web & software developer. I
        have acquired the practical skills and knowledge necessary to make any
        project a success.
      </p>
      <div className="profile-details mt-4">
        <h5 className="inner-title">Profile Details</h5>
        <div className="row">
          <div className="col-lg-3 col-md-4 label">Full Name</div>
          <div className="col-lg-7 col-md-8">Diran Sai</div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 label">Company</div>
          <div className="col-lg-7 col-md-8">Google</div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 label">Job</div>
          <div className="col-lg-7 col-md-8">Software Engineer</div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 label">Country</div>
          <div className="col-lg-7 col-md-8">Zambia</div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 label">Address</div>
          <div className="col-lg-7 col-md-8">
            A108 Adam Street, New York, NY 535022
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 label">Phone</div>
          <div className="col-lg-7 col-md-8">0763047932</div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 label">Email</div>
          <div className="col-lg-7 col-md-8">Dirantechie@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileOverview;
