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
import useWindow from "../hooks/useWindow";
import usePropertiesUser from "../hooks/usePropertiesUser";



function Profile() {
  const { profileData, getCurrentUser } = useUser();
  const {token} = useAuthState();
  const currentUserId = usePropertiesUser(profileData?._id);
  const windowStatus = useWindow();
  
  console.log(currentUserId);

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
              <div className="btn-container-1">
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
                          <div className="right btn-container-2 mt-3">
                            <button className="btn ml-3">
                              Follow <i className="bi bi-person-plus"></i>
                            </button>
                            <button className="btn">
                              Sales <i className="bi bi-cart3"></i>
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
                      <div className="card-body">
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
                              {windowStatus ? (
                                <i class="bi bi-person-circle"></i>
                              ) : (
                                <span>
                                  Profile Overview
                                  <i class="bi bi-person-circle"></i>
                                </span>
                              )}
                            </button>
                          </li>
                          <li className="nav-item">
                            <button
                              className="nav-link"
                              data-bs-toggle="tab"
                              data-bs-target="#edit-profile"
                            >
                              {windowStatus ? (
                                <i className="bi bi-pencil-square"></i>
                              ) : (
                                <span>
                                  Edit Profile
                                  <i className="bi bi-pencil-square"></i>
                                </span>
                              )}
                            </button>
                          </li>
                          <li className="nav-item">
                            <button
                              className="nav-link"
                              data-bs-toggle="tab"
                              data-bs-target="#settings"
                            >
                              {windowStatus ? (
                                <i className="bi bi-gear"></i>
                              ) : (
                                <span>
                                  Settings
                                  <i className="bi bi-gear"></i>
                                </span>
                              )}
                            </button>
                          </li>
                          <li className="nav-item">
                            <button
                              className="nav-link"
                              data-bs-toggle="tab"
                              data-bs-target="#change-password"
                            >
                              {windowStatus ? (
                                <i className="bi bi-key"></i>
                              ) : (
                                <span>
                                  Change Password
                                  <i className="bi bi-key"></i>
                                </span>
                              )}
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
                          My Listings
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#">Payouts</a>
                      </li>
                      <li className="nav-item">
                        <a href="#">
                          Reviews
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#">
                          Orders
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
              <div className="col-sm-12 bottom-profile-page mt-5">
                <div>
                  <h5>Your properties</h5>
                </div>
                <div className="user-properties-container mt-4">
                  <div className="properties-search-container">
                    <form>
                      <div className="form-group">
                        <input type="text" className="form-control search" placeholder="Search your properties..." />
                      </div>
                    </form>
                    <table className="table mt-4">
                      <thead>
                        <tr>
                          <th><span>name</span></th>
                          <th><span>price</span></th>
                          <th><span>type</span></th>
                          <th><span>status</span></th>
                          <th><span>location</span></th>
                          <th><span>last updated</span></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className="name">Real Estate Backend</span>
                          </td>
                          <td>
                            <span>$45, 600</span>
                          </td>
                          <td>
                            <span>Hotel</span>
                          </td>
                          <td>
                            <div className="property-status"><span className="dot succeeded"></span> Succeeded</div>
                          </td>
                          <td>
                            <span>Livingstone</span>
                          </td>
                          <td>
                            <span>3 Hours Ago</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="name">Real Estate Frontend</span>
                          </td>
                          <td>
                            <span>$12, 600</span>
                          </td>
                          <td>
                            <span>Lodge</span>
                          </td>
                          <td>
                            <div className="property-status"><span className="dot pending"></span> Pending</div>
                          </td>
                          <td>
                            <span>Lusaka</span>
                          </td>
                          <td>
                            <span>12 Hours Ago</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
