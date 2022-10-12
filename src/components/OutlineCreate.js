import React, { Component } from "react";
import { Collapse } from "react-collapse";
export class OutlineCreate extends Component {
  renderDay = (outLineData, callback) => {
    return outLineData.map((item, index) => {
      return (
        <div
          key={item.key}
          style={{
            marginBottom: 2,
          }}
        >
          <div
            style={{
              backgroundColor: "#2D3748",
              padding: "10px 30px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p
              style={{
                color: "white",
                fontWeight: 600,
                marginRight: 10,
              }}
            >
              {item.day}
            </p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                callback(item.day, "day");
              }}
              style={{
                marginRight: 10,
              }}
            >
              <path
                d="M5 9V11H15V9H5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
                fill="#E74A3B"
              />
            </svg>
            {item.unit[0].course.length > 0 && (
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 3.99L18.53 17H3.47L11 3.99ZM11 0L0 19H22L11 0ZM12 14H10V16H12V14ZM12 8H10V12H12V8Z"
                  fill="#E74A3B"
                />
              </svg>
            )}
          </div>
          <Collapse isOpened={item.isOpened}>
            {this.renderUnits(
              item.unit,
              this.countUnit(outLineData, index),
              callback,
              index
            )}
          </Collapse>
        </div>
      );
    });
  };
  renderUnits = (unit, countUnit, callback, indexDay) => {
    //console.log(unit, countUnit);
    return unit.map((item, index) => {
      const { unitName, course } = item;
      return (
        <div className="unitDetails">
          <div className="unitContainer">
            <div className="unitDetailHeader">
              <h3>Unit {countUnit - 1 + index}</h3>
              <div>
                <h3>{unitName}</h3>
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  callback(
                    {
                      indexDay,
                      indexUnit: index,
                    },
                    "unit"
                  );
                }}
              >
                <path
                  d="M10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 13L6 9H14L10 13Z"
                  fill="#EE964B"
                />
              </svg>
            </div>
            <Collapse isOpened={item.isOpened}>
              <h3>Hello may cung {item.unitName}</h3>
            </Collapse>
          </div>
        </div>
      );
    });
  };

  countUnit = (outLineData, index) => {
    if (outLineData[index].unit.length === 1 && index !== 0) {
      return outLineData[index - 1].unit.length;
    }
    return outLineData[index].unit.length;
  };

  render() {
    const { outLineData, changeCollapse } = this.props;
    return (
      <div className="bg-white outline">
        {this.renderDay(outLineData, changeCollapse)}
      </div>
    );
  }
}

export default OutlineCreate;
