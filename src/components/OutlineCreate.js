import React, { Component } from "react";
import { Collapse } from "react-collapse";
export class OutlineCreate extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          day: "Day 1",
          isOpened: false,
          unit: [
            {
              unitName: null,
              course: [],
            },
          ],
        },
        {
          day: "Day 2",
          isOpened: false,
          unit: [
            {
              unitName: null,
              course: [],
            },
          ],
        },
        {
          day: "Day 3",
          isOpened: false,
          unit: [
            {
              unitName: null,
              course: [],
            },
          ],
        },
      ],
    };
  }
  changeCollapse = (data) => {
    const newData = [...this.state.data];
    const findIndex = newData.findIndex((item) => item.day === data);
    newData[findIndex].isOpened = !newData[findIndex].isOpened;
    this.setState({
      data: [...newData],
    });
  };
  renderDay = () => {
    const data = this.state.data;
    return data.map((item) => {
      return (
        <div key={item.key} style={{
          marginBottom:2
        }}>
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
                this.changeCollapse(item.day);
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
            <div>Random content {item.day}</div>
          </Collapse>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="bg-white outline">
        {this.renderDay()}
        {/* <button
          style={{
            backgroundColor: "wheat",
          }}
          onClick={this.testCollase}
        >
          Check
        </button>
        <Collapse isOpened={this.state.isOpened}>
          <div>Random content</div>
        </Collapse> */}
      </div>
    );
  }
}

export default OutlineCreate;
