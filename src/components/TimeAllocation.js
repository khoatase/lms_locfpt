import React, { Component } from "react";
import { PieCharts } from "./PieChart";

export class TimeAllocation extends Component {
  renderDetailTime = (data) => {
    return data.map((item) => {
      return (
        <div className="flex pb-1  items-center" key={item.name}>
          <div
            className="w-2 h-2"
            style={{
              backgroundColor: item.color,
              borderRadius: "50%",
              marginRight: 8,
            }}
          ></div>
          <p className="mr-4 w-32">{item.name}</p>
          <p>({item.percent})</p>
        </div>
      );
    });
  };

  render() {
    const { timeLocation } = this.props;

    return (
      <div className="timeAllocation">
        <div className="time">
          <h3>Time allocation</h3>
          <PieCharts timeLocation={timeLocation} />
          <div className="timeDetails">
            {this.renderDetailTime(timeLocation)}
          </div>
        </div>
      </div>
    );
  }
}

export default TimeAllocation;
