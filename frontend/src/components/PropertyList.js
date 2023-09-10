import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";
import Pagination from "./Pagination";

import SingleProperty from "./SingleProperty";
import Spinner2 from "./Spinner2";

function PropertyList() {
  const { properties, pages, getProperties, propertyListLoading } = useUser();
  let [currentPage, setCurrentPage] = useState(1);

  

  useEffect(() => {
    console.log("GO");
    getProperties(currentPage);
  }, [currentPage]);

  return (
    <div className="row g-5 property-listing-wrapper">
      {propertyListLoading && <Spinner2 />}
      {properties.length > 0 && (
        properties.map((property) => {
          return <SingleProperty key={property._id} property={property}/>
        })
      )}
      <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default PropertyList;
