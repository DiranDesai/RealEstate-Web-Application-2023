import React from 'react'

import { Chart } from "react-google-charts";

function EarningStatsChart() {
 
    const data = [
        ["Element", "Earnings", { role: "style" }],
        ["Sales", 400000, "#ff6868"],
        ["Paid", 250000, "#3d6e8c"],
        ["Life Earnings", 620000, "#8285e7"]
      ];


  return (
    <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
  )
}

export default EarningStatsChart