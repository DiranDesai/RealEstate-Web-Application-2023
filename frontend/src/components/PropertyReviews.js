import React from "react";

import Review from "./Review";

function PropertyReviews({ reviews }) {

  return (
    <div className="reviews shadow-1 p-5 mt-4">
      <div className="review-stats">
        <h3 className="heading-1">How user rated this property</h3>
        <div className="row">
          <div className="col-3">
            <div className="stats-num text-center">
              <h2 className="t-3 num">4.5</h2>
              <div className="stars mt-4">
                <span>
                  <i class="bi bi-star-fill"></i>
                </span>
                <span>
                  <i class="bi bi-star-fill"></i>
                </span>
                <span>
                  <i class="bi bi-star-fill"></i>
                </span>
                <span>
                  <i class="bi bi-star-fill"></i>
                </span>
                <span>
                  <i class="bi bi-star-fill"></i>
                </span>
              </div>
              <span>(Based on 25 reviews)</span>
            </div>
          </div>
          <div className="col-9">
            <div className="stats-progress">
              <div className="row">
                <div className="col-8">
                  <div className="progress-container">
                    <div className="row">
                      <div className="col-12">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            style={{ width: `25%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            style={{ width: `70%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            style={{ width: `85%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            style={{ width: `45%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            style={{ width: `75%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="row">
                    <div className="col-12"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews-reply mt-5">
        <div className="header">
          <div className="row">
            <div className="col-7">
              <h3 className="heading-1">Reviews</h3>
            </div>
            <div className="col-5">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Review"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="reviews-reply-container">
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <Review review={review} key={review._id}/>
            ))
          ) : (
            <h3>no reviews</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default PropertyReviews;
