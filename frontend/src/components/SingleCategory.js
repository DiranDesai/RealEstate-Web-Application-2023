import React from "react";

import {Link} from "react-router-dom"

function SingleCategory({ category }) {
  return (
    <div className="col-md-3 col-sm-12">
      <div className="card">
        <div className="inner-content">
          <img src={category.link} alt="" />
          {/* <i className="bi bi-building-fill"></i> */}
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
