import React, { useRef, useState } from "react";
import useUser from "../hooks/useUser";

function PropertyMediaCreate() {
  const {dispatch} = useUser();
  const inputFile = useRef();
  const [propertyImages, setPropertyImages] = useState([
  ]);
  const [imagesFormData, setImagesFormData] = new FormData();

  function handleClick() {
    inputFile.current.click();
  }

  function handleOnChange(e) {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const image = {id: Math.random() * 10000, imageUrl}
      setPropertyImages(prev => ([...prev, image]))
      dispatch({type: "uploadPropertyImages", payload: file})
    }
    
  }

  function deletePropertyImage(imageId){
    const newPropertyImages = propertyImages.filter((propertyImage) => propertyImage.id !== imageId);
    setPropertyImages(newPropertyImages);
  }

  return (
    <div className="tab-pane fade property-media" id="media">
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
            <button className="btn btn-style-1" onClick={handleClick}>
              <input type="file" ref={inputFile} accept="image/*" onChange={handleOnChange} />
              Browse Files<i class="bi bi-arrow-up-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="photo-uploads mt-5">
        {propertyImages.length > 0 &&
          propertyImages.map((propertyImage) => {
            console.log(propertyImage)
            return (
              <div className="photo" key={propertyImage.id}>
                <img src={propertyImage.imageUrl} alt="" />
                <button className="btn delete-btn" onClick={() => deletePropertyImage(propertyImage.id)}>
                  <i className="bi bi-trash3"></i>
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default PropertyMediaCreate;
