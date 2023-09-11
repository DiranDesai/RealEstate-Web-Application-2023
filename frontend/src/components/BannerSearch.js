import React, {useState, useEffect} from "react";
import useUser from "../hooks/useUser";
import LocationSearchInput from "./LocationSearchInput";

function BannerSearch() {
  const [title, setTitle] = useState("");
  const {searchProperties} = useUser();

  const handleSearch = (e) => {
    setTitle(e.target.value);
  }

  const handleSubmit = async () => {
    if (!title) {
      alert("Please enter the title");
      return
    }

    await searchProperties({title});

  }


  return (
    <div className="banner-search shadow-1">
      <div className="row">
        <div className="col-md-3">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter keyword..."
              onChange={handleSearch}
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
          <button className="btn search" onClick={handleSubmit}>
            Search<i className="bi bi-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BannerSearch;
