import React from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";

import SingleProperty from "./SingleProperty";

function PropertyList() {
  const { properties } = useUser();

  return (
    <div className="row g-5 property-listing-wrapper">
      {properties.map((property, index) => (
        <SingleProperty key={index} property={property} index={index}/>
      ))}
    </div>
  );
}

export default PropertyList;
