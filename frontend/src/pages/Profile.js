import React, { useEffect, useState } from "react";
import Estates from "../components/Estates";

import { Link } from "react-router-dom" 

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
//import faker from 'faker';

import useUser from "../hooks/useUser";
import Payouts from "../components/Payouts";
import ProfileOverview from "../components/ProfileOverview";
import EditProfile from "../components/EditProfile";
import ProfileSettings from "../components/ProfileSettings";
import ChangePassword from "../components/ChangePassword";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      //position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};




function Profile() {
  const { profileData, getCurrentUser } = useUser();

  const [labels, setLabels] = useState(['January', 'February', 'March', 'April', 'May', 'June', 'July']);

  const [chartData, setChartData] = useState({
    labels,
    datasets: [
      {
        label: "Payouts Monthly",
        //data: labels.map(() => faker.datatype.number({ min: -100, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]
  });

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
            <Link to="/create"><button className="btn create-estate-btn">Create Estate <i className="bi bi-plus-lg"></i></button></Link>
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
          <div className="col-md-6 right-profile-page">
             <div className="profile-link-container mt-4">
                <div>
                  <ul className="profile-links-row nav nav-tabs nav-tabs-bordered">
                    <li className="nav-item"><a href="#">My Listing <i className="badge badge-primary bg-primary">23</i></a></li>
                    <li className="nav-item"><a href="#">Payouts</a></li>
                    <li className="nav-item"><a href="#">Reviews <i className="badge badge-warning bg-warning">23</i></a></li>
                    <li className="nav-item"><a href="#">Orders <i className="badge badge-danger bg-danger">23</i></a></li>
                  </ul>
                  <Payouts />
                </div>
             </div>
             <div className="chart">
              <Line options={options} data={chartData} />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
