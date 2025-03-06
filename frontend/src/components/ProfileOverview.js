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
    about, 
    isAdmin
  } = profileData;
  return (
    <div
      className="tab-pane fade profile-overview active show"
      id="profile-overview"
    >
      {about && (
        <>
          <h5 className="inner-title"><label htmlFor="About">About</label></h5>
          <p>
            {about}
          </p>
        </>
      )}
      <div className="profile-details mt-4">
        <h5 className="inner-title"><label htmlFor="Profile Details">Profile Details</label></h5>
        {username && (
          <>
            <div className="row">
              <div className="col-lg-3 col-md-4 label"><label htmlFor="Full Name">Full Name</label></div>
              <div className="col-lg-7 col-md-8">{username}</div>
            </div>
          </>
        )}
        {job && (
          <>
            <div className="row">
              <div className="col-lg-3 col-md-4 label"><label htmlFor="Job">Job</label></div>
              <div className="col-lg-7 col-md-8">{job}</div>
            </div>
          </>
        )}
        {country && (
          <>
            <div className="row">
              <div className="col-lg-3 col-md-4 label"><label htmlFor="Country">Country</label></div>
              <div className="col-lg-7 col-md-8">{country}</div>
            </div>
          </>
        )}
        {address && (
          <>
            <div className="row">
              <div className="col-lg-3 col-md-4 label"><label htmlFor="Address">Address</label></div>
              <div className="col-lg-7 col-md-8">
               {address}
              </div>
            </div>
          </>
        )}
        {phone && (
          <>
            <div className="row">
              <div className="col-lg-3 col-md-4 label"><label htmlFor="Phone">Phone</label></div>
              <div className="col-lg-7 col-md-8">{phone}</div>
            </div>
          </>
        )}
        {email && (
          <>
            <div className="row">
              <div className="col-lg-3 col-md-4 label"><label htmlFor="Email">Email</label></div>
              <div className="col-lg-7 col-md-8">{email}</div>
            </div>
          </>
        )}
        {isAdmin && (
          <>
          <div className="row">
            <div className="col-lg-3 col-md-4 label"><label htmlFor="Permission">Permission</label></div>
            <div className="col-lg-7 col-md-8">Admin</div>
          </div>
        </>
        )}
      </div>
    </div>
  );
}

export default ProfileOverview;
