import React from "react";

function LocationComponent() {
  return (
    <div className="form-group location dropdown">
      <input type="text" className="form-control" placeholder="Location" />
      <i className="bi bi-geo-alt loc"></i>
      <div className="dropdown-menu">
        <ul>
            <li><a href="#">Chansa</a></li>
        </ul>
      </div>
    </div>
  );
}

export default LocationComponent;
