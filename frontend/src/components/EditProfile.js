import React from "react";

function EditProfile() {
  return (
    <div className="tab-pane fade edit-profile" id="edit-profile">
      <div className="row">
        <div className="col-lg-3 col-md-4 label">Profile Image</div>
        <div className="col-lg-9 col-md-8">
          <div>
            <img src="images/user1.jpg" className="profile" alt="" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4 label">Full Name</div>
        <div className="col-lg-9 col-md-8">
          <input type="text" className="form-control" value="Diran Sai" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4 label">About</div>
        <div className="col-lg-9 col-md-8">
          <textarea className="form-control">
            I am a keen and enthusiastic learner. With over 5 (five) years of
            result-oriented experience as a professional Web & software
            developer. I have acquired the practical skills and knowledge
            necessary to make any project a success.
          </textarea>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4 label">Job</div>
        <div className="col-lg-9 col-md-8">
          <input
            type="text"
            className="form-control"
            value="Software Engineer"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4 label">Country</div>
        <div className="col-lg-9 col-md-8">
          <input type="text" className="form-control" value="Zambia" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4 label">Address</div>
        <div className="col-lg-9 col-md-8">
          <input
            type="text"
            className="form-control"
            value="A108 Adam Street, New York, NY 535022"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4 label">Phone</div>
        <div className="col-lg-9 col-md-8">
          <input type="text" className="form-control" value="0776047932" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4 label">Email</div>
        <div className="col-lg-9 col-md-8">
          <input
            type="text"
            className="form-control"
            value="Dirantechie@gmail.com"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4 label">Twitter</div>
        <div className="col-lg-9 col-md-8">
          <input
            type="text"
            className="form-control"
            value="Dirantechie@twitter.com"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4 label">Facebook</div>
        <div className="col-lg-9 col-md-8">
          <input
            type="text"
            className="form-control"
            value="Dirantechie@facebook.com"
          />
        </div>
      </div>
      <div className="mt-4">
        <button className="btn btn-primary">Save Changes</button>
      </div>
    </div>
  );
}

export default EditProfile;
