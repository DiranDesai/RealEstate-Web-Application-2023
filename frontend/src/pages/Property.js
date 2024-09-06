import React, { useEffect, useState } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";

import PropertyViews from "../components/PropertyViews";
import useUser from "../hooks/useUser";

import { moneyFormat } from "../context/utils";
import PropertyReviews from "../components/PropertyReviews";

import {
  ADD_FAVOURITES,
  PAGE_LOADING_REQUEST,
  PAGE_LOADING_SUCCESS,
  SHOW_NOTIFY,
} from "../context/types";
import MessageComponent from "../components/MessageComponent";
import Loader from "../components/Loader";
import useAuthState from "../hooks/useAuthState";
import useLogout from "../hooks/useLogout";
import useNotify from "../hooks/useNotify";
import { formatAgoTime } from "../utils/main";
import PropertyMap from "../components/PropertyMap";

function Property() {
  const [userDetails, setUserDetails] = useState(null);
  const [propertyDetails, setPropertyDetails] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewForm, setReviewForm] = useState({});

  const { id } = useParams();
  const {
    getUser,
    getProperty,
    createPropertyReview,
    getPropertyReviews,
    favourites,
    dispatch,
    pageLoading,
  } = useUser();

  const { error, dispatch: notifyDispatch } = useNotify();

  const token = useLogout();

  useEffect(() => {
    const getUserInfo = async () => {
      dispatch({ type: PAGE_LOADING_REQUEST });
      const propertyDb = await getProperty(id);
      const userDb = await getUser(propertyDb.userId);
      const propertyReviewsDb = await getPropertyReviews(id);
      setPropertyDetails(propertyDb);
      setUserDetails(userDb);
      setReviews(propertyReviewsDb);
      dispatch({ type: PAGE_LOADING_SUCCESS });
    };

    getUserInfo();
  }, []);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    if (!reviewForm.rating || !reviewForm.message) {
      notifyDispatch({
        type: SHOW_NOTIFY,
        payload: { success: false, message: "Review field is empty" },
      });
      return;
    }

    try {
      const createdReview = await createPropertyReview(reviewForm, id);
      setReviews((prev) => {
        return [...prev, createdReview];
      });
      notifyDispatch({
        type: SHOW_NOTIFY,
        payload: { success: true, message: "Review created successfully..." },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnchange = (e) => {
    setReviewForm((prev) => {
      return { ...prev, rating: 3, [e.target.name]: e.target.value };
    });
  };

  const addFavourite = () => {
    const checkFavourite = favourites.find(
      (favourite) => favourite._id === propertyDetails._id
    );
    if (checkFavourite) {
      notifyDispatch({
        type: SHOW_NOTIFY,
        payload: { success: false, message: "Already added to favourites" },
      });
    } else {
      dispatch({ type: ADD_FAVOURITES, payload: propertyDetails });
      notifyDispatch({
        type: SHOW_NOTIFY,
        payload: {
          success: false,
          message: "Added to favourites successfully",
        },
      });
    }
  };
  console.log(propertyDetails);

  if (pageLoading) return <Loader />;

  return (
    <>
      {error && <MessageComponent />}
      <div className="property-page container">
        <div className="row">
          <div className="col-md-9 property-left">
            <div className="property-container">
              <div className="property-showcase">
                <div className="property-showcase-1 shadow-1 p-5">
                  <div className="row">
                    <div className="col-md-8 property-showcase-1-left">
                      <div>
                        <h2 className="t-4">{propertyDetails?.title}</h2>
                        <div className="d-flex meta">
                          <span className="location">
                            <i className="bi bi-geo-alt"></i>
                            <span className="cap">
                              {propertyDetails?.address}
                            </span>
                            <span className="cap">
                              {propertyDetails?.country}
                            </span>
                          </span>
                          <span className="time">
                            <i className="bi bi-calendar"></i>
                            {formatAgoTime(propertyDetails?.createdAt)}
                          </span>
                          <span className="likes">
                            <i className="bi bi-hand-thumbs-up"></i>400
                          </span>
                        </div>
                        <span
                          className={`tag ${
                            propertyDetails?.status === "sell"
                              ? "tag-1"
                              : "tag-3"
                          }`}
                        >
                          For {propertyDetails?.status}
                          <i className="bi bi-bag"></i>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 property-showcase-1-right">
                      <div>
                        <div>
                          <button className="btn" onClick={addFavourite}>
                            <i className="bi bi-heart"></i>
                          </button>
                          <button className="btn">
                            <i className="bi bi-cart"></i>
                          </button>
                          <button className="btn">
                            <i className="bi bi-share"></i>
                          </button>
                          <button className="btn">
                            <i className="bi bi-printer"></i>
                          </button>
                        </div>
                        <h2 className="mt-3 price">
                          {moneyFormat(propertyDetails?.price)}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="property-showcase-2 shadow-1 p-5 mt-4">
                  <h3 className="heading-1">Property description</h3>
                  <div className="row property-images-list">
                    {propertyDetails?.images.map((image) => {
                      return (
                        <div className="col-md-3">
                          
                            <img src={`${image.imgUrl}`} alt="" />
                          
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <PropertyReviews reviews={reviews} />
              <div className="create-review shadow-1 p-5 mt-4">
                <div className="row">
                  <div className="col-md-6">
                    <div>
                      <h3 className="heading-1">Write a Review</h3>
                      <form onSubmit={handleReviewSubmit}>
                        <div className="rate d-flex align-items-center">
                          <div className="stars">
                            <span>
                              <i class="bi bi-star-fill"></i>
                            </span>
                            <span>
                              <i class="bi bi-star"></i>
                            </span>
                            <span>
                              <i class="bi bi-star"></i>
                            </span>
                            <span>
                              <i class="bi bi-star"></i>
                            </span>
                            <span>
                              <i class="bi bi-star"></i>
                            </span>
                          </div>
                          <button className="btn terrible">Terrible</button>
                        </div>
                        <div className="form-group my-4">
                          <label htmlFor="message mb-3">
                            Message <span>13 from 999 symbol</span>
                          </label>
                          <textarea
                            className="form-control"
                            placeholder="Write your review"
                            name="message"
                            onChange={handleOnchange}
                          ></textarea>
                        </div>
                        <button className="btn create">Submit Review</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <PropertyMap position={propertyDetails.position}/>
              <PropertyViews />
            </div>
          </div>
          <div className="col-md-3 property-right">
            <div className="property-container">
              <div className="property-card agent shadow-1">
                <div className="property-top"></div>
                <div className="property-middle text-center">
                  <div>
                    <img
                      src={`../${
                        userDetails?.profileUrl || `images/default2.jpg`
                      }`}
                      alt=""
                    />
                    <h4 className="mt-3 t-1">{userDetails?.username}</h4>
                    <p>Real Estate Agent</p>
                    <p>Member since november 2008</p>
                    <button className="btn">
                      View all states <i class="bi bi-houses"></i>
                    </button>
                  </div>
                </div>
                <div className="property-bottom mt-4">
                  <div>
                    <h4 className="t-2">Contact Info</h4>
                    <ul className="list-group">
                      <li>
                        <span>
                          <i class="bi bi-geo-alt"></i>
                        </span>
                        <span>
                          {propertyDetails?.city} {propertyDetails?.country}
                        </span>
                      </li>
                      <li>
                        <span>
                          <i class="bi bi-envelope-at"></i>
                        </span>
                        <span>{userDetails?.email}</span>
                      </li>
                      <li>
                        <span>
                          <i class="bi bi-telephone"></i>
                        </span>
                        <span>{userDetails?.phone || +260776047932}</span>
                      </li>
                      <li>
                        <span>
                          <i class="bi bi-link-45deg"></i>
                        </span>
                        <span>http://spruko.com/</span>
                      </li>
                    </ul>
                    <div className="social-links mt-3">
                      <span className="facebook">
                        <i class="bi bi-facebook"></i>
                      </span>
                      <span className="twitter">
                        <i class="bi bi-twitter"></i>
                      </span>
                      <span className="google">
                        <i class="bi bi-google"></i>
                      </span>
                      <span className="dribbble">
                        <i class="bi bi-dribbble"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="agents p-2 mt-4">
          <h3 className="heading-1">Related agents</h3>
          <div className="row">
            <div className="col-md-3">
              <div className="agent-content">
                <img src="../images/04.jpg" alt="" />
                <div className="agent-details text-center mt-3">
                  <h3 className="heading-1">Dennis Barret</h3>
                  <p className="location">Nampundwe</p>
                  <div className="d-flex justify-content-center meta mt-2">
                    <p>4.5/5.0</p>
                    <div className="stars">
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
                        <i class="bi bi-star"></i>
                      </span>
                      <span>
                        <i class="bi bi-star"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="agent-content">
                <img src="../images/08.jpg" alt="" />
                <div className="agent-details text-center mt-3">
                  <h3 className="heading-1">Diran Sai</h3>
                  <p className="location">Lusaka</p>
                  <div className="d-flex justify-content-center meta mt-2">
                    <p>4.5/5.0</p>
                    <div className="stars">
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
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="agent-content">
                <img src="../images/06.jpg" alt="" />
                <div className="agent-details text-center mt-3">
                  <h3 className="heading-1">Paul Smith</h3>
                  <p className="location">Copperbelt</p>
                  <div className="d-flex justify-content-center meta mt-2">
                    <p>4.5/5.0</p>
                    <div className="stars">
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
                        <i class="bi bi-star"></i>
                      </span>
                      <span>
                        <i class="bi bi-star"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="agent-content">
                <img src="../images/review1.jpg" alt="" />
                <div className="agent-details text-center mt-3">
                  <h3 className="heading-1">Kunje Sai</h3>
                  <p className="location">Livingstone</p>
                  <div className="d-flex justify-content-center meta mt-2">
                    <p>4.5/5.0</p>
                    <div className="stars">
                      <span>
                        <i class="bi bi-star-fill"></i>
                      </span>
                      <span>
                        <i class="bi bi-star-fill"></i>
                      </span>
                      <span>
                        <i class="bi bi-star"></i>
                      </span>
                      <span>
                        <i class="bi bi-star"></i>
                      </span>
                      <span>
                        <i class="bi bi-star"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Property;
