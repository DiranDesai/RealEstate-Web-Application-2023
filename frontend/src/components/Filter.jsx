import React from "react";
import FilterTabs from "./FilterTabs";

function Filter() {
  return (
    <div className="filter-wrapper">
      <FilterTabs />
      <form>
        <div className="form-group mt-3">
          <label>Looking For</label>
          <select className="form-select">
            <option value="house">
              <span>House</span>
            </option>
            <option value="apartment">Flat</option>
            <option value="condo">Room</option>
            <option value="land">Vacant Land</option>
            <option value="land">Shop</option>
            <option value="land">Office</option>{" "}
            <option value="land">Warehouse</option>{" "}
          </select>
        </div>
        <div className="form-group mt-3">
          <label for="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="City, Neighborhood, or Zip Code"
          />
        </div>
        <div className="form-group mt-3">
          <label>Amenities</label>
          <input type="text" placeholder="Swimming Pool, Garage" />
        </div>
        <div className="form-group">
          <label>Bedrooms</label>
          <select class="form-select">
            <option value="1" selected>
              <span>1</span>
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>{" "}
          </select>
        </div>
        <div className="form-group mt-3">
          <label>Budget</label>
          <div className="range-input-container">
            <div>
              <input type="text" placeholder="R200" />
              <input type="text" placeholder="R50,000" />
            </div>
          </div>
          <input type="range" class="form-range" id="customRange1" />
        </div>
        <div className="form-group mt-3 submit-wrapper">
          <button className="btn submit-btn">Search</button>
          <span class="material-symbols-outlined">search</span>
        </div>
      </form>
    </div>
  );
}

export default Filter;