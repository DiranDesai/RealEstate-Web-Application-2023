import React from "react";

function PropertyLocationCreate() {
  return (
    <div className="tab-pane fade property-location" id="location">
      <h5 className="fw-bold">Listing Location</h5>
      <div className="form mt-3">
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" placeholder="Your name" />
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="country/state">Country/State</label>
              <select className="form-control">
                <option>Nothing selected</option>
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <select className="form-control">
                <option>Nothing selected</option>
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="neighborhood">Neighborhood</label>
              <select className="form-control">
                <option>Nothing selected</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="zip">Zip</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <select className="form-control">
                <option>Nothing selected</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyLocationCreate;
