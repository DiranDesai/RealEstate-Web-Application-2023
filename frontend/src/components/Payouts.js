import React from "react";

function Payouts() {
  return (
    <div className="payouts tab-content pt-2">
      <div className="tab-pane fade active show" id="earnings">
        <div className="row mt-4 text-center inner-earnings text-white">
          <div className="col-sm-12 col-lg-4">
            <div className="earning-card">
              <h6>Sales this Month</h6>
              <h4>K20, 000</h4>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className="earning-card">
              <h6>To be paid</h6>
              <h4>K3, 500</h4>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className="earning-card">
              <h6>Lifetime earnings</h6>
              <h4>K90, 000</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payouts;
