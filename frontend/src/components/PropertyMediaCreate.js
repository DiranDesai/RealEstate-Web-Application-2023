import React from "react";

function PropertyMediaCreate() {
  return (
    <div className="property-media" id="media">
      <div className="property-media-container">
        <div className="property-media-inner">
          <h5 className="fw-bold">Upload photos of your Listing</h5>
          <div className="upload-photo-control">
            <span className="upload-icon">
              <i class="bi bi-file-arrow-up"></i>
            </span>
            <h6>Upload photos of your property</h6>
            <p className="mt-3">
              Photos must be JPEG or PNG format and least 2048x768
            </p>
            <button className="btn btn-style-1">
              Browse Files<i class="bi bi-arrow-up-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="photo-uploads mt-5">
        <div className="photo">
          <img src="images/house1.jpg" alt="" />
          <button className="btn delete-btn">
            <i className="bi bi-trash3"></i>
          </button>
        </div>
        <div className="photo">
          <img src="images/house2.jpg" alt="" />
          <button className="btn delete-btn">
            <i className="bi bi-trash3"></i>
          </button>
        </div>
        <div className="photo">
          <img src="images/house3.jpg" alt="" />
          <button className="btn delete-btn">
            <i className="bi bi-trash3"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyMediaCreate;
