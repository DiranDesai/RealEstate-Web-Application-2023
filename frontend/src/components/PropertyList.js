import React from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";

import { moneyFormat } from "../context/utils";

function PropertyList() {
  const { properties } = useUser();

  console.log(properties);

  return (
    <div className="row g-5 property-listing-wrapper">
      {properties.map((property, index) => (
        <div className="col-md-3 property" key={index}>
          <div className="card">
            <div className="top">
              <div className="property-tags d-flex justify-content-between align-items-center">
                <div>
                  <span className="tag tag-1">For Sale</span>
                </div>
                <div>
                  <span className="tag tag-2">Popular</span>
                  <span className="tag tag-3">Top</span>
                </div>
              </div>
              <div className="pricing">
                <h4>{moneyFormat(property.price)}</h4>
              </div>
              {/* <img src="images/house1.jpg" className='cover' alt="" /> */}
            </div>
            <div className="middle">
              <Link to={`property/${index}`}><h4 className="title">{property.title}</h4></Link>
              <p>{property.location}</p>
              <div className="property-options d-flex justify-content-between align-items-center">
                <div>
                  <span>
                    <i className="fas fa-regular fa-bed"></i> Beds 4
                  </span>
                </div>
                <div>
                  <span>
                    <i className="fas fa-light fa-shower"></i> Baths 2
                  </span>
                </div>
                <div>
                  <span>
                    <i className="fas fa-solid fa-bell"></i>Garage
                  </span>
                </div>
              </div>
            </div>
            <div className="bottom d-flex justify-content-between align-items-center">
              <div className="owner d-flex align-items-center">
                <img src={`images/${property.pic}`} />
                <p>
                  By <a href="#">{property.author}</a>
                </p>
              </div>
              <div>
                <Link to={`property/${index}`}><button className="btn">Details</button></Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PropertyList;
