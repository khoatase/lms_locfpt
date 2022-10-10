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
          <p className=" w-32">{item.name}</p>
          <p>({item.percent}%)</p>
        </div>
      );
    });
  };

  checkPercent = (data) => {
    return data.filter((item) => item.percent > 0).length > 0 ? true : false;
  };

  render() {
    const { timeLocation, type } = this.props;

    return (
      <div
        className="timeAllocation"
        style={{
          paddingTop: type === "right" ? 125 : 0,
          display: type === "right" ? "flex" : "initial",
        }}
      >
        <div
          className={
            this.checkPercent(timeLocation) ? "timeHasPercent" : "timeNoPercent"
          }
          style={{
            width: type === "right" ? 230 : "100%",
          }}
        >
          <h3>Time allocation</h3>
          <div
            style={{
              display: "flex",
              flexDirection: type === "right" ? "column" : "row",
              height: type === "right" ? "100%" : 216,
              alignItems: "center",
            }}
          >
            <PieCharts
              timeLocation={timeLocation}
              checkPercent={this.checkPercent(timeLocation)}
            />
            <div className="timeDetails">
              {this.renderDetailTime(timeLocation)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TimeAllocation;
