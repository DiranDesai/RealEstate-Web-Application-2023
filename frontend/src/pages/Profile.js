import React, { useEffect } from "react";
import Estates from "../components/Estates";

import useUser from "../hooks/useUser";

function Profile() {
  const { profileData, getCurrentUser } = useUser();

  console.log(profileData);

  useEffect(() => {
    getCurrentUser();
  }, []);


  return (
    <div className="profile-page-container">
      <div className="container">
        <div className="heading d-flex align-items-center justify-content-between">
          <div>
            <p>Account Overview</p>
            <p>Home/Account/Overview</p>
          </div>
          <div>
            <button className="btn ml-3">Invite Buyers <i className="bi bi-people-fill"></i></button>
            <button className="btn">Create Estate <i className="bi bi-plus-lg"></i></button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 left-profile-page">
            <div className="col-md-12">
              <div className="profile-container">
                <div className="profile-header d-flex">
                  <div className="user-profile-wrapper">
                    <img src="images/user1.jpg" alt="" />
                    <span className="active-state"></span>
                  </div>
                  <div>
                    <div className="top-profile-header d-flex justify-content-between flex-column">
                      <div className="left">
                        <p>
                          <span className="user-name">{profileData?.username}</span>{" "}
                          <i className="bi bi-boxes user-icon"></i>
                        </p>
                        <div className="user-info">
                          <ul>
                            <li>
                              <i className="bi bi-code-square"></i>
                              <span>Developer</span>
                            </li>
                            <li>
                              <i className="bi bi-geo-alt-fill"></i>
                              <span>Lusaka</span>
                            </li>
                            <li>
                              <i className="bi bi-envelope"></i>
                              <span>{profileData?.email}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="right mt-3">
                        <button className="btn ml-3">Follow <i className="bi bi-person-plus"></i></button>
                        <button className="btn">Current Sales <i className="bi bi-cart3"></i></button>
                      </div>
                    </div>
                    <div className="bottom-profile-header d-flex align-items-center justify-content-between">
                      <div className="left">
                        <div>
                          <h5>$45,0000</h5>
                          <p>Earnings</p>
                        </div>
                        <div>
                          <h5>76</h5>
                          <p>Estates</p>
                        </div>
                        <div>
                          <h5>60%</h5>
                          <p>Success</p>
                        </div>
                      </div>
                      <div className="right"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-4">
              <div className="profile-wrapper-right">
                <div>
                  <div className="card-body p-3">
                    <ul
                      className="nav nav-tabs nav-tabs-bordered"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <button
                          className="nav-link active"
                          data-bs-toggle="tab"
                          data-bs-target="#profile-overview"
                        >
                          Profile Overview
                          <i class="bi bi-person-circle"></i>
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          className="nav-link"
                          data-bs-toggle="tab"
                          data-bs-target="#edit-profile"
                        >
                          Edit Profile
                          <i className="bi bi-pencil-square"></i>
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          className="nav-link"
                          data-bs-toggle="tab"
                          data-bs-target="#settings"
                        >
                          Settings
                          <i className="bi bi-gear"></i>
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          className="nav-link"
                          data-bs-toggle="tab"
                          data-bs-target="#change-password"
                        >
                          Change Password
                          <i className="bi bi-key"></i>
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content pt-2">
                      <div
                        className="tab-pane fade profile-overview active show"
                        id="profile-overview"
                      >
                        <h5 className="inner-title">About</h5>
                        <p>
                          I am a keen and enthusiastic learner. With over 5
                          (five) years of result-oriented experience as a
                          professional Web & software developer. I have acquired
                          the practical skills and knowledge necessary to make
                          any project a success.
                        </p>
                        <div className="profile-details mt-4">
                          <h5 className="inner-title">Profile Details</h5>
                          <div className="row">
                            <div className="col-lg-3 col-md-4 label">
                              Full Name
                            </div>
                            <div className="col-lg-7 col-md-8">Diran Sai</div>
                          </div>
                          <div className="row">
                            <div className="col-lg-3 col-md-4 label">
                              Company
                            </div>
                            <div className="col-lg-7 col-md-8">Google</div>
                          </div>
                          <div className="row">
                            <div className="col-lg-3 col-md-4 label">Job</div>
                            <div className="col-lg-7 col-md-8">
                              Software Engineer
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-3 col-md-4 label">
                              Country
                            </div>
                            <div className="col-lg-7 col-md-8">Zambia</div>
                          </div>
                          <div className="row">
                            <div className="col-lg-3 col-md-4 label">
                              Address
                            </div>
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
                            <div className="col-lg-7 col-md-8">
                              Dirantechie@gmail.com
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade edit-profile"
                        id="edit-profile"
                      >
                        <div className="row">
                          <div className="col-lg-3 col-md-4 label">
                            Profile Image
                          </div>
                          <div className="col-lg-9 col-md-8">
                            <div>
                              <img
                                src="images/user1.jpg"
                                className="profile"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3 col-md-4 label">
                            Full Name
                          </div>
                          <div className="col-lg-9 col-md-8">
                            <input
                              type="text"
                              className="form-control"
                              value="Diran Sai"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3 col-md-4 label">About</div>
                          <div className="col-lg-9 col-md-8">
                            <textarea className="form-control">
                              I am a keen and enthusiastic learner. With over 5
                              (five) years of result-oriented experience as a
                              professional Web & software developer. I have
                              acquired the practical skills and knowledge
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
                            <input
                              type="text"
                              className="form-control"
                              value="Zambia"
                            />
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
                            <input
                              type="text"
                              className="form-control"
                              value="0776047932"
                            />
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
                          <div className="col-lg-3 col-md-4 label">
                            Facebook
                          </div>
                          <div className="col-lg-9 col-md-8">
                            <input
                              type="text"
                              className="form-control"
                              value="Dirantechie@facebook.com"
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <button className="btn btn-primary">
                            Save Changes
                          </button>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade settings"
                        id="settings"
                      ></div>
                      <div
                        className="tab-pane fade change-password"
                        id="change-password"
                      >
                        <div className="row">
                          <div className="col-lg-3 col-md-4">
                            Current Password
                          </div>
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
                          <div className="col-lg-3 col-md-4">
                            Re-enter New Password
                          </div>
                          <div className="col-lg-9 col-md-8">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="mt-4">
                          <button className="btn btn-primary">
                            Change Password
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 right-profile-page">
             
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
