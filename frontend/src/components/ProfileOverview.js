import React from "react";
import useUser from "../hooks/useUser";

function ProfileOverview() {
  const {profileData} = useUser();
  const {
    username,
    email,
    country,
    job,
    address,
    phone,
    facebook,
    twitter,
    about
  } = profileData;
  return (
    <div
      className="tab-pane fade profile-overview active show"
      id="profile-overview"
    >
      {about && (
        <>
          <h5 className="inner-title">About</h5>
          <p>
            {about}
          </p>
        </>
      )}
      <div className="profile-details mt-4">
        <h5 className="inner-title">Profile Details</h5>
        {username && (
          <>
            <div className="row">
              <div className="col-lg-3 col-md-4 label">Full Name</div>
              <div className="col-lg-7 col-md-8">{username}</div>
            </div>
          </>
        )}
        {job && (
          <>
            <div className="row">
              <div className="col-lg-3 col-md-4 label">Job</div>
              <div className="col-lg-7 col-md-8">{job}</div>
            </div>
          </>
        )}
        {country && (
          <>
            <div className="row">
              <div className="col-lg-3 col-md-4 label">Country</div>
              <div className="col-lg-7 col-md-8">{country}</div>
            </div>
          </>
        )}
        {address && (
          <>
            <div className="row">
              <div className="col-lg-3 col-md-4 label">Address</div>
              <div className="col-lg-7 col-md-8">
               {address}
              </div>
            </div>
          </>
        )}
        {phone && (
          <>
            <div className="row">
              <div className="col-lg-3 col-md-4 label">Phone</div>
              <div className="col-lg-7 col-md-8">{phone}</div>
            </div>
          </>
        )}
        {email && (
          <>
            <div className="row">
              <div className="col-lg-3 col-md-4 label">Email</div>
              <div className="col-lg-7 col-md-8">{email}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProfileOverview;
