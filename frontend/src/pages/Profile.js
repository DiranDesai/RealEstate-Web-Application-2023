import React, { useEffect, useState } from "react";
import Estates from "../components/Estates";
import EarningStatsChart from "../components/EarningStatsChart";

import { Link, Navigate } from "react-router-dom";

import useUser from "../hooks/useUser";
import Payouts from "../components/Payouts";
import ProfileOverview from "../components/ProfileOverview";
import EditProfile from "../components/EditProfile";
import ProfileSettings from "../components/ProfileSettings";
import ChangePassword from "../components/ChangePassword";
import Loader from "../components/Loader";
import useAuthState from "../hooks/useAuthState";



function Profile() {
  const { profileData, getCurrentUser } = useUser();
  const {token} = useAuthState();


  useEffect(() => {
    if (token == null && profileData) { 
      window.location = "/login";
    } 
    getCurrentUser();
  }, []);

  if (!profileData) {
    return <Loader />
  }

  return (
    <>
      {profileData && (
        <div className="profile-page-container">
          <div className="container">
            <div className="heading d-flex align-items-center justify-content-between">
              <div>
                <p>Account Overview</p>
                <p>Home/Account/Overview</p>
              </div>
              <div>
                <button className="btn ml-3">
                  Invite Buyers <i className="bi bi-people-fill"></i>
                </button>
                <Link to="/create">
                  <button className="btn create-estate-btn">
                    Create Estate <i className="bi bi-plus-lg"></i>
                  </button>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6 left-profile-page">
                <div className="col-md-12">
                  <div className="profile-container">
                    <div className="profile-header d-flex">
                      <div className="user-profile-wrapper">
                        <img src={profileData.profileUrl ? profileData.profileUrl : 'images/default2.jpg'} alt={profileData.username} />
                        <span className="active-state"></span>
                      </div>
                      <div>
                        <div className="top-profile-header d-flex justify-content-between flex-column">
                          <div className="left">
                            <p className="username">
                              <span className="user-name">
                                {profileData.username}
                              </span>{" "}
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
                                  <span>{profileData.email}</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="right mt-3">
                            <button className="btn ml-3">
                              Follow <i className="bi bi-person-plus"></i>
                            </button>
                            <button className="btn">
                              Current Sales <i className="bi bi-cart3"></i>
                            </button>
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
                          <ProfileOverview />
                          <EditProfile />
                          <ProfileSettings />
                          <ChangePassword />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 right-profile-page">
                <div className="profile-link-container mt-4">
                  <div>
                    <ul className="profile-links-row nav nav-tabs nav-tabs-bordered">
                      <li className="nav-item">
                        <a href="#">
                          My Listing{" "}
                          <i className="badge badge-primary bg-primary">23</i>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#">Payouts</a>
                      </li>
                      <li className="nav-item">
                        <a href="#">
                          Reviews{" "}
                          <i className="badge badge-warning bg-warning">23</i>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#">
                          Orders{" "}
                          <i className="badge badge-danger bg-danger">23</i>
                        </a>
                      </li>
                    </ul>
                    <Payouts />
                  </div>
                </div>
                <div className="chart">
                  <EarningStatsChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
