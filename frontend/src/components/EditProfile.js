import React, { useEffect, useState } from "react";
import useNotify from "../hooks/useNotify";
import useUser from "../hooks/useUser";
import MessageComponent from "./MessageComponent";
import { LOADING, SHOW_NOTIFY } from "../context/types"

function EditProfile() {
  const {updateUserProfile, getCurrentUser, uploadProfilePic, loading, profileData} = useUser();
  const [photoStatus, setPhotoStatus] = useState(false);
  const {profileUrl} = profileData;
  const {dispatch, error, payloadData} = useNotify();
  const [formData, setFormData] = useState(profileData);
  const [file, setFile] = useState(null);

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
  } = formData;


  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({type: LOADING, payload: true});

    const fileData = new FormData();
    fileData.append('file', file);

    if (photoStatus) {
      if (file === null) {
        dispatch({type: SHOW_NOTIFY, payload: {success: false, message: "Please choose a file"}});
        return
      }
      await uploadProfilePic(fileData);
    }

    updateUserProfile(formData);
    dispatch({type: LOADING, payload: false});
    dispatch({type: SHOW_NOTIFY, payload: {success: true, message: "Profile data updated successfully"}});
  }

  const handleOnChange = (e) => {
    setFormData(prevData => {
      return {...prevData, [e.target.name]: e.target.value};
    });
  }

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  }

  const photoClick = (e) => {
    setPhotoStatus(true);
  }


  return (
    <>
      {error && <MessageComponent payloadData={payloadData} />}
      <div className="tab-pane fade edit-profile" id="edit-profile">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-3 col-md-4 label"><label htmlFor="Profile Image">Profile Image</label></div>
          <div className="col-lg-9 col-md-8">
            <div>
            <img src={profileUrl ? profileUrl : 'images/default2.jpg'} className="profile" alt={username} />
            </div>
            {!photoStatus && <button className="btn btn-primary" onClick={photoClick}>Change Photo<i class="bi bi-image"></i></button>}
            {photoStatus && <input type="file" onChange={handleFile}  />}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 label"><label htmlFor="Full Name">Full Name</label></div>
          <div className="col-lg-9 col-md-8">
            <input type="text" value={username} name="username" onChange={handleOnChange} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 label"><label htmlFor="About">About</label></div>
          <div className="col-lg-9 col-md-8">
            <textarea name="about" value={about} onChange={handleOnChange}></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 label"><label htmlFor="Job">Job</label></div>
          <div className="col-lg-9 col-md-8">
            <input type="text" value={job} name="job" onChange={handleOnChange} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 label"><label htmlFor="Country">Country</label></div>
          <div className="col-lg-9 col-md-8">
            <input type="text" value={country} name="country" onChange={handleOnChange} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 label"><label htmlFor="Address">Address</label></div>
          <div className="col-lg-9 col-md-8">
            <input type="text" value={address} name="address" onChange={handleOnChange} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 label"><label htmlFor="Phone">Phone</label></div>
          <div className="col-lg-9 col-md-8">
            <input type="text" value={phone} name="phone" onChange={handleOnChange} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 label"><label htmlFor="Email">Email</label></div>
          <div className="col-lg-9 col-md-8">
            <input type="text" value={email} name="email" disabled={true} onChange={handleOnChange} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 label"><label htmlFor="Twitter">Twitter</label></div>
          <div className="col-lg-9 col-md-8">
            <input type="text" value={twitter} name="twitter" onChange={handleOnChange} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 label"><label htmlFor="Facebook">Facebook</label></div>
          <div className="col-lg-9 col-md-8">
            <input type="text" value={facebook} name="facebook" onChange={handleOnChange} />
          </div>
        </div>
        <div className="mt-4">
          <button className="btn btn-primary" type="submit">Save Changes</button>
        </div>
      </form>
    </div>
    </>
  );
}

export default EditProfile;
