import React, { useState } from "react";
import { cities } from "../context/constants";

function LocationInputComponent() {
  const [locationCities, seLocationCities] = useState(cities);
  const [selectedCity, setSelectedCity] = useState(null);
  const [query, setQuery] = useState("");

  function handleFilter(e){
    const inputVal = e.target.value.toLowerCase();
    setQuery(inputVal)
    if (inputVal) {
        const filteredCities = cities.filter(city => city.toLowerCase().includes(query))
        seLocationCities(filteredCities);
    } else{
        seLocationCities(cities)
    }
  }

  return (
    <div className="form-group mt-3 location dropdown">
      <label htmlFor="City">City</label>
      <input
        type="text"
        className="dropdown-toggle"
        data-bs-toggle="dropdown"
        placeholder="City..."
        onChange={handleFilter}
        value={query}
      />
      <i className="bi bi-geo-alt loc"></i>
      <div className="dropdown-menu">
        <ul>
          {locationCities.map((city) => {
            return (
              <li>
                <span className="dropdown-item" onClick={() => setQuery(city)}>
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
