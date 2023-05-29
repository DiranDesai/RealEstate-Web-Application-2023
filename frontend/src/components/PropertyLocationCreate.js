import React from "react";

import useUser from "../hooks/useUser";
import { handleFormChange } from "../context/utils";

function PropertyLocationCreate() {

  const {propertyFormData, dispatch} = useUser();


  return (
    <div className="tab-pane fade property-location" id="location">
      <h5 className="fw-bold">Listing Location</h5>
      <div className="form mt-3">
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" placeholder="Your address" name="address" value={propertyFormData.address || ""} onChange={e => handleFormChange(e.target, dispatch)} />
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="country/state">Country</label>
              <select className="form-control" name="country" value={propertyFormData.country || ""} onChange={e => handleFormChange(e.target, dispatch)}>
                <option>Select country</option>
                <option value="zambia">Zambia</option>
                <option value="nigeria">Nigeria</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <select className="form-control" name="city" value={propertyFormData.city || ""} onChange={e => handleFormChange(e.target, dispatch)}>
                <option>Select city</option>
                <option value="lusaka">Lusaka</option>
                <option value="lagos">Lagos</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyLocationCreate;
