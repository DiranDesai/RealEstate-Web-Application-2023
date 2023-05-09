import React from "react";

function EstateCreateTabs() {
  return (
    <div className="estates-create-tabs mb-5">
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <button
            className="nav-link active"
            data-bs-toggle="tab"
            data-bs-target="#description"
          >
            Description<i class="bi bi-info-square"></i>
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#media"
          >
            Media<i class="bi bi-collection"></i>
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#location"
          >
            Location<i class="bi bi-geo-alt"></i>
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#details"
          >
            Details<i class="bi bi-database"></i>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default EstateCreateTabs;
