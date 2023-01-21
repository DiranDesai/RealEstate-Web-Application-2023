import React from "react";

function Profile() {
  return (
    <div className="profile-page-container">
      <div className="container mt-5">
        <div className="heading d-flex align-items-center justify-content-between">
          <div>
            <p>Account Overview</p>
            <p>Home/Account/Overview</p>
          </div>
          <div>
            <button className="btn ml-3">Invite Buyers</button>
            <button className="btn">Create Estate</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="profile-container card">
            <div className="profile-header d-flex">
              <div className="user-profile-wrapper">
                <img src="images/user1.jpg" alt="" />
                <span className="active-state"></span>
              </div>
              <div>
                <div className="top-profile-header d-flex align-items-center justify-content-between">
                  <div className="left">
                    <p>
                      <span className="user-name">Max Smith</span>{" "}
                      <i class="bi bi-boxes user-icon"></i>
                    </p>
                    <div className="user-info">
                      <ul>
                        <li>
                          <i class="bi bi-code-square"></i>
                          <span>Developer</span>
                        </li>
                        <li>
                          <i class="bi bi-geo-alt-fill"></i>
                          <span>Lusaka</span>
                        </li>
                        <li>
                          <i class="bi bi-envelope-at"></i>
                          <span>Dirantechie@gmail.com</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="right">
                    <button className="btn ml-3">Follow</button>
                    <button className="btn">Current Sales</button>
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
                      <p>Success Rate</p>
                    </div>
                  </div>
                  <div className="right"></div>
                </div>
              </div>
            </div>
            <div className="profile-tabs-container">
                <ul>
                    <li><a href="#">Edit Controls</a></li>
                    <li><a href="#">Estates</a></li>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Edit Profile</a></li>
                </ul>
            </div>
            </div>
          </div>
          <div className="col-md-4">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
