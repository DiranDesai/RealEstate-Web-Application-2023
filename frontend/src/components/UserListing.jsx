import React from "react";

import { dateFormat } from "../utils/main";

function UserListing({ properties }) {
  return (
    <div class="projects mt-5">
      <div class="card">
        <div class="card-header">
          <h5>Your Listings</h5>
        </div>
        <div class="card-body table-responsive">
          <table class="table table-hover table-light">
            <thead>
              <tr>
                <th scope="col">
                  <span>NAME</span>
                </th>
                <th scope="col">
                  <span>DUE DATE</span>
                </th>
                <th scope="col">
                  <span>STATUS</span>
                </th>
                <th scope="col">
                  <span>TEAM</span>
                </th>
                <th scope="col">
                  <span>COMPLETION</span>
                </th>
                <th scope="col">
                  <span></span>
                </th>
              </tr>
            </thead>
            <tbody>
              {properties.map((property) => {
                const {_id, title, price, images, createdAt} = property;
                const completion = { percent: 67, class: "bg-primary", status: "Pending" }
 
                return (
                  <tr key={_id}>
                    <td className="property-img-container">
                      <img src={images[0].imgUrl} alt="" />
                      <span>{title}</span>
                    </td>
                    <td>
                      <span>{dateFormat(createdAt)}</span>
                    </td>
                    <td>
                      <span class={`dot ${completion.status.class}`}></span>
                      <span>{completion.status}</span>
                    </td>
                    <td>
                      <div>
                        {images.map((img, idx) => (
                          <img key={idx} src={img.imgUrl} alt="" />
                        ))}
                      </div>
                    </td>
                    <td>
                      <span>{completion.percent}%</span>
                      <div class="progress">
                        <div
                          class={`progress-bar ${completion.class}`}
                          style={{ width: `${completion.percent}%` }}
                        ></div>
                      </div>
                    </td>
                    <td>
                      <button class="btn">View</button>
                      <button class="btn">
                        <i class="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserListing;
