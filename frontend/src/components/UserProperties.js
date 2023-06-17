import React from "react";
import { moneyFormat } from "../context/utils";
import { formatAgoTime } from "../utils/main";

function UserProperties({properties}) {
    console.log(properties);
  return (
    <div className="col-sm-12 bottom-profile-page shadow-1 mt-5 py-5">
      <div>
        <h5 className="heading mb-5">Your properties</h5>
      </div>
      <div className="user-properties-container mt-4">
        <div className="properties-search-container">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control search"
                placeholder="Search your properties..."
              />
            </div>
          </form>
          <div className="table-responsive">
            <table className="table mt-4">
              <thead>
                <tr>
                  <th>
                    <span>Image</span>
                  </th>
                  <th>
                    <span>name</span>
                  </th>
                  <th>
                    <span>price</span>
                  </th>
                  <th>
                    <span>type</span>
                  </th>
                  <th>
                    <span>status</span>
                  </th>
                  <th>
                    <span>location</span>
                  </th>
                  <th>
                    <span>last updated</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {properties.map((property) => (
                    <tr key={property._id}>
                    <td>
                      <img src="images/house2.jpg" alt={property.title} />
                    </td>
                    <td>
                      <span className="name">{property.title}</span>
                    </td>
                    <td>
                      <span>{moneyFormat(property.price)}</span>
                    </td>
                    <td>
                      <span>{property.category}</span>
                    </td>
                    <td>
                      <div className="property-status">
                        <span className="dot succeeded"></span> Succeeded
                      </div>
                    </td>
                    <td>
                      <span>{property.address}</span>
                    </td>
                    <td>
                      <span>{formatAgoTime(property.createdAt)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProperties;
