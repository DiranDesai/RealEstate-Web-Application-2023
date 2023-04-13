import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";

function CategoryList() {
  const {categories} = useUser();

  return (
    <div className="row g-5 category-listing-wrapper">
      {categories.map((category) => (
        <div className="col-3" key={category.name}>
          <div className="card">
            <div className="inner-content">
              <i className="bi bi-building-fill"></i>
              <h5>{category.name}</h5>
              <p>{category.listings} Listings</p>
              <Link to={`category/${category.name}`}>
                <button className="btn">View Category</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
