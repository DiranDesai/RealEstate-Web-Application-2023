import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RESET } from "../context/types";
import useAuthState from "../hooks/useAuthState";
import useUser from "../hooks/useUser";

import { getUrlPathname } from "../utils/main";

function Navbar() {
  const [search, setSearch] = useState("");

  const { token, logout } = useAuthState();
  const { profileData, favourites, notifications, getUser, dispatch } =
    useUser();

  const navigate = useNavigate();

  const handleSearch = (e) => {
    navigate(`/search`);
    setSearch((prev) => {
      return e.target.value;
    });
  };

  const handleLogout = () => {
    dispatch({ type: RESET });
    logout();
  };

  return (
    <div className="navbar">
      <div className="container">
        <div
          className={`inner-bar d-flex align-items-center w-100 ${
            !token && "justify-content-between"
          }`}
        >
          <div className="logo">
            <Link to="/">
              <img src="images/logo.png" alt="" />
              <h3>pabondi</h3>
            </Link>
          </div>
          {token ? (
            <>
              <div className="menu-1">
                <input
                  type="search"
                  className="form-control"
                  placeholder="search"
                  onChange={handleSearch}
                />
                <span className="search-icon">
                  <i className="bi bi-search"></i>
                </span>
              </div>
              <div className="menu-2 d-flex align-items-center">
                <ul className="d-flex align-items-center navbar-icon-links">
                  <li>
                    <Link to={`/favourites`}>
                      <span className="material-symbols-outlined icon">
                        favorite
                      </span>
                      <span className="count">{favourites.length}</span>
                    </Link>
                  </li>
                  <li className="dropdown notification-container">
                    <a href="#" data-bs-toggle="dropdown" class="notication">
                      <span className="material-symbols-outlined icon">
                        notifications
                      </span>
                      <span className="count">{notifications.length}</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end shadow-2">
                      <div className="dropdown-top d-flex align-items-center justify-content-between p-2 mb-3">
                        <p className="m-0 fw-50">Nofications</p>
                        <a href="#" className="text-primary">
                          Mark all as read
                        </a>
                      </div>
                      <h5 className="dropdown-header">NEW</h5>
                      <div className="users">
                        {notifications.length > 0 &&
                          notifications.map((notification) => {
                            const { username, profileUrl } =
                              notification.userId;
                            return (
                              <div className="user bg-light">
                                <img
                                  src={
                                    !profileUrl
                                      ? "images/user3.png"
                                      : profileUrl
                                  }
                                  alt=""
                                />
                                <div className="user-info">
                                  <p>
                                    <span className="name">{username}</span>
                                    {notification.message}
                                  </p>
                                  <p className="comment">
                                    <span>
                                      <i className="material-icons">
                                        chat_bubble_outline
                                      </i>
                                    </span>{" "}
                                    Just Now
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        {/* <h5 className="dropdown-header">EARLIER</h5>
                                    <div className="user">
                                        <img src="images/user2.jpg" alt="" />
                                        <div className="user-info">
                                            <p><span className="name">Linda Nchaba</span> commented on your post :"Happy Birthday"</p>
                                            <p className="comment"><span><i className="material-icons">chat_bubble_outline</i></span> Just Now</p>
                                        </div>
                                    </div> */}
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="d-flex align-items-center navbar-profile">
                  <li>
                    <a href="#" data-bs-toggle="dropdown">
                      <img
                        src={
                          profileData?.profileUrl
                            ? profileData?.profileUrl
                            : "images/user3.png"
                        }
                        alt={profileData?.username}
                      />
                    </a>
                    <div className="dropdown">
                      <div className="dropdown-menu dropdown-menu-end shadow-2">
                        <div className="navbar-top-profile">
                          <img
                            src={
                              profileData?.profileUrl
                                ? profileData?.profileUrl
                                : "images/user3.png"
                            }
                            alt={profileData?.username}
                          />
                          <div className="profile-left">
                            <h5>{profileData?.username}</h5>
                            <h6>{profileData?.email}</h6>
                          </div>
                        </div>
                        <div className="navbar-bottom-profile">
                          <ul>
                            <li>
                              <Link to="profile">
                                <span class="material-symbols-outlined">
                                  account_circle
                                </span>
                                <span>Profile</span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                onClick={handleLogout}
                              >
                                <span class="material-symbols-outlined">
                                  logout
                                </span>
                                <span>Logout</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="agents" className="dropdown-item">
                                <span class="material-symbols-outlined">
                                  group
                                </span>
                                <span>Agents</span>
                              </Link>
                            </li>
                            <li>
                              <a href="#">
                                <span class="material-symbols-outlined">
                                  settings
                                </span>
                                <span>Settings</span>
                              </a>
                            </li>
                            {profileData.isAdmin && (
                              <li>
                                <a href="#">
                                  <span class="material-symbols-outlined">
                                    dashboard
                                  </span>
                                  <span>Dashboard</span>
                                </a>
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <span className="active-state"></span>
                </ul>
              </div>
            </>
          ) : (
            <div className="menu-3 d-flex align-items-center">
              <ul className="d-flex align-items-center navbar-icon-links">
                <li>
                  <Link to="/login">
                    <button className="btn btn-login">
                      Login<i className="bi bi-box-arrow-in-right"></i>
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/account">
                    <button className="btn btn-sign">
                      Sign Up<i className="bi bi-person"></i>
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
