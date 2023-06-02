import React, { useState, useEffect } from "react";
import useUser from "../hooks/useUser";

function Review({review}) {
    const [userDetails, setUserDetails] = useState(null);
    const {userId, message, rating} = review;

    const {getUser} = useUser();

    useEffect(() => {
        const loadUserInfo = async () => {
            const userDb = await getUser(userId);
            setUserDetails(userDb);
        }


        loadUserInfo();
    }, []);

  return (
    <div className="review">
      <div className="d-flex">
        <div className="review-left">
          <div className="profile">
            <img src={userDetails?.profileUrl || `../images/default2.jpg`} alt="" />
          </div>
        </div>
        <div className="review-right ml-5">
          <div className="content">
            <h4>
              {userDetails?.username} <span>2 days ago</span>
            </h4>
            <div className="stars my-2">
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
            <p>
              {message}
            </p>
            <div className="review-helpfull d-flex align-items-center">
              <p>Was this review helpful?</p>
              <div className="button align-items-center">
                <button className="btn btn-sm">Yes</button>
                <button className="btn btn-sm">No</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
