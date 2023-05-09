import React from "react";

import {Link} from "react-router-dom"

function SingleCategory({ category }) {
  return (
    <div className="col-3">
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
  );
}

export default SingleCategory;
