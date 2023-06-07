import React from "react";

import { Chart } from "react-google-charts";

function PropertyViews() {
  const data = [
    ["Months", "Views"],
    ["Jan", 1000],
    ["Feb", 1170],
    ["Mar", 660],
    ["Apr", 1030],
    ["May", 400],
    ["Jun", 880],
    ["July", 140],
    ["Aug", 2330],
  ];

  const options = {
    curveType: "function",
    legend: { position: "bottom" },
  };

  return (
    <div className="views shadow-1 p-5 mt-4">
      <div className="header">
        <div className="align-items-center justify-content-between">
          <div className="view-left">
            <h3 className="heading-1 m-0">Property Views</h3>
          </div>
          <div className="view-right">
            <div className="d-flex">
                <button className="btn">Houly</button>
                <button className="btn">Weakly</button>
                <button className="btn">Monthly</button>
            </div>
          </div>
        </div>
      </div>
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default PropertyViews;
