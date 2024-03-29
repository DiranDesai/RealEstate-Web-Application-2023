import React, {useState} from "react";
import Pagination from "../components/Pagination";

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
        <div className="agents-container">
          <div className="row g-5">
            <div className="col-md-3">
              <div className="agents-inner-container">
                <img src="images/user1.jpg" alt="" />
                <div className="agents-content">
                  <h4 className="agent-name">Jane Smith</h4>
                  <p>Livingstone</p>
                  <div className="agent-stars">
                    <div className="stars">
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
                      <span>
                        <i class="bi bi-star"></i>
                      </span>
                    </div>
                  </div>
                  <p className="agent-connect mt-2">200 Followers</p>
                  <button className="btn">Follow<i class="bi bi-person-plus"></i></button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="agents-inner-container">
                <img src="images/default2.jpg" alt="" />
                <div className="agents-content">
                  <h4 className="agent-name">Diran Techie</h4>
                  <p>Chingola</p>
                  <div className="agent-stars">
                    <div className="stars">
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
                      <span>
                        <i class="bi bi-star"></i>
                      </span>
                    </div>
                  </div>
                  <p className="agent-connect mt-2">70 Followers</p>
                  <button className="btn">Follow<i class="bi bi-person-plus"></i></button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="agents-inner-container">
                <img src="images/default2.jpg" alt="" />
                <div className="agents-content">
                  <h4 className="agent-name">Choolwe Sosala</h4>
                  <p>Chililabombwe</p>
                  <div className="agent-stars">
                    <div className="stars">
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
                      <span>
                        <i class="bi bi-star"></i>
                      </span>
                    </div>
                  </div>
                  <p className="agent-connect mt-2">120 Followers</p>
                  <button className="btn">Follow<i class="bi bi-person-plus"></i></button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="agents-inner-container">
                <img src="images/default2.jpg" alt="" />
                <div className="agents-content">
                  <h4 className="agent-name">Robby Smith</h4>
                  <p>Lusaka</p>
                  <div className="agent-stars">
                    <div className="stars">
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
                      <span>
                        <i class="bi bi-star"></i>
                      </span>
                    </div>
                  </div>
                  <p className="agent-connect mt-2">150 Followers</p>
                  <button className="btn">Follow<i class="bi bi-person-plus"></i></button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="agents-inner-container">
                <img src="images/user1.jpg" alt="" />
                <div className="agents-content">
                  <h4 className="agent-name">Jane Smith</h4>
                  <p>Nampundwe</p>
                  <div className="agent-stars">
                    <div className="stars">
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
                      <span>
                        <i class="bi bi-star"></i>
                      </span>
                    </div>
                  </div>
                  <p className="agent-connect mt-2">200 Followers</p>
                  <button className="btn">Follow<i class="bi bi-person-plus"></i></button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="agents-inner-container">
                <img src="images/default2.jpg" alt="" />
                <div className="agents-content">
                  <h4 className="agent-name">Diran Techie</h4>
                  <p>Chirundu</p>
                  <div className="agent-stars">
                    <div className="stars">
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
                      <span>
                        <i class="bi bi-star"></i>
                      </span>
                    </div>
                  </div>
                  <p className="agent-connect mt-2">70 Followers</p>
                  <button className="btn">Follow<i class="bi bi-person-plus"></i></button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="agents-inner-container">
                <img src="images/default2.jpg" alt="" />
                <div className="agents-content">
                  <h4 className="agent-name">Choolwe Sosala</h4>
                  <p>Siavongo</p>
                  <div className="agent-stars">
                    <div className="stars">
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
                      <span>
                        <i class="bi bi-star"></i>
                      </span>
                    </div>
                  </div>
                  <p className="agent-connect mt-2">120 Followers</p>
                  <button className="btn">Follow<i class="bi bi-person-plus"></i></button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="agents-inner-container">
                <img src="images/default2.jpg" alt="" />
                <div className="agents-content">
                  <h4 className="agent-name">Robby Smith</h4>
                  <p>Mumbwa</p>
                  <div className="agent-stars">
                    <div className="stars">
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
                      <span>
                        <i class="bi bi-star"></i>
                      </span>
                    </div>
                  </div>
                  <p className="agent-connect mt-2">150 Followers</p>
                  <button className="btn">Follow<i class="bi bi-person-plus"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div className="agents-pagination">
            {/* <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-end">
                <li class="page-item disabled">
                  <a class="page-link">Previous</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav> */}
            <Pagination pages={3} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agents;
