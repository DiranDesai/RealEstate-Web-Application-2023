import React from "react";

function Property() {
  return (
    <div className="container property-listing-wrapper">
      <div className="row">
        <div className="col-md-6">
          <div className="property">
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
                  <h4>$50,000</h4>
                </div>
                {/* <img src="images/house1.jpg" className='cover' alt="" /> */}
              </div>
              <div className="middle">
                <h4 className="title">Countryside Modern Lake View</h4>
                <p> New London</p>
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
                  <img src="images/user1.jpg" />
                  <p>
                    By <a href="#">Tom Steven</a>
                  </p>
                </div>
                <div>
                  <button className="btn">Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  );
}

export default Property;
