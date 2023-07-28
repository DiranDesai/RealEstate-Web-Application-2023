import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useUser from "../hooks/useUser";

function OtherProfile() {
  const [profileData, setProfileData] = useState(null);
  const [followStatus, setFollowStatus] = useState(null);
  const { userId } = useParams();

  //   const profileData = {
  //     __v: 0,
  //     _id: "645cbf24a9f676ae2bf3f845",
  //     about: "Coding and Learning programming dairy and anywhere",
  //     address: "matero",
  //     createdAt: "2023-05-11T10:10:44.496Z",
  //     email: "dirantechie@gmail.com",
  //     facebook: "https://facebook.com/#",
  //     isAdmin: false,
  //     job: "Web Designer",
  //     phone: 763050976,
  //     profileUrl: "/uploads/64870120_895303124142685_2950916083114049536_n.jpg",
  //     twitter: "https://twitter.com/#",
  //     updatedAt: "2023-06-20T09:11:39.430Z",
  //     username: "Diran Sai",
  //   };

  const { getUser, followUser, unFollowUser, checkUserFollowing } = useUser();

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await getUser(userId);
      console.log(userData);
      setProfileData(userData);
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    checkFollow();
  }, []);


  const followUserBtnClick = async () => {
    console.log("Follow user");
    const data = await followUser(userId);
    console.log(data);
  }

  const unFollowUserBtnClick = async () => {
    await unFollowUser(userId);
  }

  const checkFollow = async () => {
    const {follow} = await checkUserFollowing(userId);
    console.log(follow);
    setFollowStatus(follow);
  }

  return (
    <>
      {profileData && (
        <div className="profile-page-container other-profile">
          <div className="container">
            <div className="heading d-flex align-items-center justify-content-between"></div>
            <div className="row">
              <div className="col-sm-12 col-md-6 left-profile-page">
                <div className="row">
                  <div className="col-md-12">
                    <div className="profile-container">
                      <div className="profile-header d-flex">
                        <div className="user-profile-wrapper">
                          <img
                            src={
                              profileData.profileUrl
                                ? profileData.profileUrl
                                : "images/default2.jpg"
                            }
                            alt={profileData.username}
                          />
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
                                    <span>Software Engineer</span>
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
                              <button className="btn ml-3" onClick={followStatus ? unFollowUserBtnClick : followUserBtnClick}>
                               {followStatus ? 'Unfollow' : 'Follow'} <i className="bi bi-person-plus"></i>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default OtherProfile;
