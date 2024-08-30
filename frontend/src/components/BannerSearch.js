import React, {useState, useEffect} from "react";
import useUser from "../hooks/useUser";
import LocationSearchInput from "./LocationSearchInput";
import LocationInputComponent from "./LocationInputComponent";
import PropertyInputComponent from "./PropertyInputComponent";

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
              placeholder="Enter keyword..."
              onChange={handleSearch}
            />
          </div>
        </div>
        <div className="col-md-3">
          <PropertyInputComponent />
        </div>
        <div className="col-md-3">
          <LocationInputComponent />
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
