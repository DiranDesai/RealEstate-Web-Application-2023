import React from "react";
import LocationSearchInput from "./LocationSearchInput";

function BannerSearch() {
  return (
    <div className="banner-search shadow-1">
      <div className="row">
        <div className="col-md-3">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter keyword..."
            />
              {/* <LocationSearchInput /> */}
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <select className="form-control">
              <option value="property type">Property Type</option>
            </select>
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group location">
            <input
              type="text"
              className="form-control"
              placeholder="Location"
            />
            <i className="bi bi-geo-alt loc"></i>
          </div>
        </div>
        <div className="col-md-3 search-col">
          <button className="btn search">
            Search<i className="bi bi-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BannerSearch;
