import React, { Component } from "react";
import { PieChart } from "react-minimal-pie-chart";

export class PieCharts extends Component {
  render() {
    const { timeLocation, checkPercent } = this.props;
    const data = timeLocation.map((item) => {
      return {
        title: item.name,
        value: item.percent,
        color: item.color,
      };
    });

    return (
      <div className={checkPercent ? "pieChart" : "pie"}>
        {checkPercent && <PieChart data={[...data]} />}
      </div>
    );
  }
}

export default PieCharts;
