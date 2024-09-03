import React from "react";

import useUser from "../hooks/useUser";
import { handleFormChange } from "../context/utils";
import { cities } from "../context/constants";

function PropertyLocationCreate() {

  const {propertyFormData, createProperty, dispatch} = useUser();

  async function submitProperty(){
    await createProperty(propertyFormData)
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
              <label htmlFor="city">City</label>
              <select name="city" value={propertyFormData.city || ""} onChange={e => handleFormChange(e.target, dispatch)}>
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
        <button onClick={submitProperty} className="btn btn-primary submit-btn">Create Property</button>
      </div>
    </div>
  );
}

export default PropertyLocationCreate;
