import React, {useState} from "react";
import Pagination from "../components/Pagination";
import RelatedAgents from "../components/RelatedAgents";

function Agents() {
  let [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="agents-page">
      <div className="container">
        <div className="agents-header mt-5">
          <h3 className="heading">Agents Listings</h3>
          <div className="d-flex">
            <button className="btn">
              <i class="bi bi-filter"></i> Filters
            </button>
          </div>
        </div>
        <RelatedAgents />
      </div>
    </div>
  );
}

export default Agents;
