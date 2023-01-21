import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import authContext from "../context/authContext/authContext";

import { getUrlPathname } from "../utils/main"

function Navbar() {
  const { user } = useContext(authContext);

  return (
    <div className="navbar">
      <div className="container">
        <div
          className={`inner-bar d-flex align-items-center w-100 ${
            !user && "justify-content-between"
          }`}
        >
          <div className="logo">
            <Link to="/">
              <img src="images/logo3.svg" alt="logo" />
            </Link>
          </div>
          {user ? (
            <>
              <div className="menu-1">
                <input
                  type="search"
                  className="form-control"
                  placeholder="search"
                />
                <span className="search-icon">
                  <i className="bi bi-search"></i>
                </span>
              </div>
              <div className="menu-2 d-flex align-items-center">
                <ul className="d-flex align-items-center navbar-icon-links">
                  <li>
                    <a href="#">
                      <i className="bi bi-arrow-left-right"></i>
                      <span className="count">2</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-heart"></i>
                      <span className="count">1</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-cart3"></i>
                      <span className="count">5</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" data-bs-toggle="dropdown">
                      <i className="bi bi-person"></i>
                    </a>
                    <div className="dropdown">
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link to="login" className="dropdown-item">
                          Login
                        </Link>
                        <Link to="account" className="dropdown-item">
                          Register
                        </Link>
                        <a href="#" className="dropdown-item">
                          Feedback
                        </a>
                        <h6 className="dropdown-divider"></h6>
                        <a href="#" className="dropdown-item">
                          Settings
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="d-flex align-items-center navbar-profile">
                  <li>
                    <a href="#" data-bs-toggle="dropdown">
                      <img src="images/user1.jpg" />
                    </a>
                    <div className="dropdown">
                      <div className="dropdown-menu dropdown-menu-end">
                        <div className="navbar-top-profile">
                          <img src="images/user1.jpg" alt="" />
                          <div className="profile-left">
                            <h5>Diran Sai</h5>
                            <h6>Dirantechie@gmail.com</h6>
                          </div>
                        </div>
                        <div className="navbar-bottom-profile">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="bi bi-app"></i>
                                <span>Status</span>
                              </a>
                            </li>
                            <li>
                              <Link to="profile">
                                <i className="bi bi-person-circle"></i>
                                <span>Profile</span>
                              </Link>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-star"></i>
                                <span>Subscription</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="bi bi-gear"></i>
                                <span>Settings</span>
                              </a>
                            </li>
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
