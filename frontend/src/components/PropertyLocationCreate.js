import React, {useRef} from "react";

import useUser from "../hooks/useUser";
import { handleFormChange } from "../context/utils";
import { cities } from "../context/constants";

function PropertyLocationCreate({setSubmitClicked}) {

  const {propertyFormData, createProperty, dispatch} = useUser();

  function submitProperty(e){
    e.preventDefault()
    console.log(123)
    createProperty(propertyFormData)
  }


  return (
    <div className="tab-pane fade property-location" id="location">
      <h5 className="fw-bold">Listing Location</h5>
      <div className="form mt-3">
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" placeholder="Your address" name="address" value={propertyFormData.address || ""} onChange={e => handleFormChange(e.target, dispatch)} />
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="country/state">Country</label>
              <select name="country" value={propertyFormData.country || ""} onChange={e => handleFormChange(e.target, dispatch)}>
                <option>Select country</option>
                <option value="zambia">Zambia</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="Location">Location</label>
              <select name="location" value={propertyFormData.location || ""} onChange={e => handleFormChange(e.target, dispatch)}>
                <option>Select city</option>
                {cities.map(city => {
                  return <option value={city}>{city}</option>
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button type="submit" onClick={() => setSubmitClicked(true)
        } className="btn btn-primary submit-btn">Create Property</button>
      </div>
    </div>
  );
}

export default PropertyLocationCreate;
