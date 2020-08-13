import React from "react";
import "chart.js";
import { HorizontalBar } from "react-chartjs-2";

function Charts(props) {
  const data = {
    labels: ["Philippines", "UK", "USA", "Australia"],
    datasets: [
      {
        label: "Wages",
        data: ["2000", "1500", "3000", "2500"],
        borderColor: ["#339900"],
        backgroundColor: ["#fb8c00"],
        pointBorderColor: ["#fb8c00"],
        pointBackgroundColor: ["#339900"],
      },
    ],
  };

  return (
    <section className="charts-section sect">
      <div className="chart-details">
        <h3>
          Businesses that outsource to the Philippines save an average of 70% on
          labor costs.
        </h3>
        <p>The talent pool is huge, but the cost of living is very low.</p>
        <button className="chart-cta">Call to action button</button>
      </div>
      <div className="chart">
        <HorizontalBar data={data} />
      </div>
    </section>
  );
}

export default Charts;
