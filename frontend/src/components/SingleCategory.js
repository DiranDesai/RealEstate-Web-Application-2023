import React from "react";

import {Link} from "react-router-dom"

function SingleCategory({ category }) {
  return (
    <div className="col-md-3 col-sm-12">
      <div className="card">
        <div className="inner-content">
          <div className="icon">
          <span class="material-symbols-outlined">
{category.icon}
</span>
          </div>
          <h5 className="mt-2">{category.name}</h5>
          {/* <p>{category.listings} Listings</p> */}
        </div>
      </div>
    </div>
  );
}

export default SingleCategory;
