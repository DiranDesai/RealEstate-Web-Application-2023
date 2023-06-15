import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";

import SingleProperty from "./SingleProperty";
import Spinner2 from "./Spinner2";

function PropertyList() {
  const { properties, getProperties, propertyListLoading } = useUser();

  console.log(properties);

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <div className="row g-5 property-listing-wrapper">
      {propertyListLoading && <Spinner2 />}
      {properties.length > 0 && (
        properties.map((property) => {
          return <SingleProperty key={property._id} property={property}/>
        })
      )}
    </div>
  );
}

export default PropertyList;
