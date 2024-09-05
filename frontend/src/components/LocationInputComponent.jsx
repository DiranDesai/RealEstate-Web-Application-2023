import React, { useEffect, useRef, useState } from "react";
import { cities } from "../context/constants";

function LocationInputComponent({locationQuery, setLocationQuery, handleFormChange}) {
  const [locationCities, seLocationCities] = useState(cities);
  let inputLocation = useRef();

  console.log(inputLocation.current)

  useEffect(() => {
    handleFormChange(inputLocation.current, true)
  }, [locationQuery])


  function handleFilter(e){
    const inputVal = e.target.value.toLowerCase();
    setLocationQuery(inputVal)
    if (inputVal) {
        const filteredCities = cities.filter(city => city.toLowerCase().includes(locationQuery))
        seLocationCities(filteredCities);
    } else{
        seLocationCities(cities)
    }
  }

  return (
    <div className="form-group mt-3 location dropdown">
      <label htmlFor="Location">Location</label>
      <input
        type="text"
        className="dropdown-toggle"
        data-bs-toggle="dropdown"
        placeholder="Location..."
        onChange={handleFilter}
        name="location"
        value={locationQuery}
        ref={inputLocation}
      />
      <i className="bi bi-geo-alt loc"></i>
      <div className="dropdown-menu">
        <ul>
          {locationCities.map((city) => {
            return (
              <li>
                <span className="dropdown-item" onClick={() => setLocationQuery(city)}>
                  {city}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default LocationInputComponent;
