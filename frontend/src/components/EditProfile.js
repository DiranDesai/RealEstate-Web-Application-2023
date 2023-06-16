import React, { useEffect, useState } from "react";
import useNotify from "../hooks/useNotify";
import useUser from "../hooks/useUser";
import MessageComponent from "./MessageComponent";
import { LOADING } from "../context/types"

function EditProfile() {
  const {updateUserProfile, getCurrentUser, uploadProfilePic, loading, profileData} = useUser();
  const [photoStatus, setPhotoStatus] = useState(false);
  const {profileUrl} = profileData;
  const {dispatch, error} = useNotify();
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
        dispatch({type: true, payload: {success: false, message: "Please choose a file"}});
        return
      }
      await uploadProfilePic(fileData);
    }

    updateUserProfile(formData);
    dispatch({type: LOADING, payload: false});
    dispatch({type: true, payload: {success: true, message: "Profile data updated successfully"}});
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
      {error && <MessageComponent />}
      <div className="tab-pane fade edit-profile" id="edit-profile">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-3 col-md-4 label">Profile Image</div>
          <div className="col-lg-9 col-md-8">
            <div>
            <img src={profileUrl ? profileUrl : 'images/default2.jpg'} className="profile" alt={username} />
            </div>
            {!photoStatus && <button className="btn btn-primary" onClick={photoClick}>Change Photo<i class="bi bi-image"></i></button>}
            {photoStatus && <input type="file" className="form-control" onChange={handleFile}  />}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 label">Full Name</div>
          <div className="col-lg-9 col-md-8">
            <input type="text" className="form-control" value={username} name="username" onChange={handleOnChange} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 label">About</div>
          <div className="col-lg-9 col-md-8">
            <textarea className="form-control" name="about" value={about} onChange={handleOnChange}></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 label">Job</div>
          <div className="col-lg-9 col-md-8">
            <input type="text" className="form-control" value={job} name="job" onChange={handleOnChange} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 label">Country</div>
          <div className="col-lg-9 col-md-8">
            <input type="text" className="form-control" value={country} name="country" onChange={handleOnChange} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 label">Address</div>
          <div className="col-lg-9 col-md-8">
            <input type="text" className="form-control" value={address} name="address" onChange={handleOnChange} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 label">Phone</div>
          <div className="col-lg-9 col-md-8">
            <input type="text" className="form-control" value={phone} name="phone" onChange={handleOnChange} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 label">Email</div>
          <div className="col-lg-9 col-md-8">
            <input type="text" className="form-control" value={email} name="email" disabled={true} onChange={handleOnChange} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 label">Twitter</div>
          <div className="col-lg-9 col-md-8">
            <input type="text" className="form-control" value={twitter} name="twitter" onChange={handleOnChange} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 label">Facebook</div>
          <div className="col-lg-9 col-md-8">
            <input type="text" className="form-control" value={facebook} name="facebook" onChange={handleOnChange} />
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
