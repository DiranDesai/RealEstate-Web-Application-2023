import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { moneyFormat } from "../context/utils";
import useUser from "../hooks/useUser";
import { formatAgoTime, truncate, titleStrip } from "../utils/main";

import Spinner from "./Spinner";

function SingleProperty({property}) {
  const [user, setUser] = useState(null);

  const {getUser, getCurrentUser, profileData} = useUser();
  const {_id: loggedUserId} = profileData;
  const {_id, price, title, status, address, images, city, userId, createdAt} = property;
 
  useEffect(() => {

    const loadUser = async () => {
      setUser(await getUser(userId));
      getCurrentUser();
    }
    loadUser();
  }, []);

  


  return (
    <div className="col-md-3 property" key={_id}>
      <div className="">
        <div className="top">
          <div className="property-tags d-flex justify-content-between align-items-center">
            <div>
              <span className={`tag ${status === "sell" ? 'tag-1' : 'tag-3'}`}>For <span className="tag-text">{status}</span></span>
            </div>
            <div>
              <span className="tag tag-2">Popular</span>
              <span className="tag tag-4">Top</span>
            </div>
          </div>
          <div className="pricing">
            <h4>{moneyFormat(price)}</h4>
          </div>
          {/* <img src={images[0].imgUrl} className='cover' alt="" /> */}
        </div>
        <div className="middle">
          <Link to={`property/${_id}`}>
            <h4 className="title fw-70">{titleStrip(title)}</h4>
          </Link>
          <p><span className="cap">{address}</span> {/*<span className="time"><i class="bi bi-clock"></i>{formatAgoTime(createdAt)}</span>*/}</p>
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
            <img src={user?.profileUrl || `images/default2.jpg`} />
            <div>
              By <Link to={loggedUserId === userId ? '/profile' : `/profile/${userId}`}><a>{truncate(user?.username) || <Spinner />}</a></Link>
            </div>
          </div>
          <div>
            <Link to={`property/${_id}`}>
              <button className="btn">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProperty;
