import React, { Component } from "react";

const initialData = [
  {
    name: "inClass",
    value: [
      {
        name: "Quiz",
        percent: 15,
      },
      {
        name: "Assisgnment",
        percent: 15,
      },
      {
        name: "Final",
        percent: 70,
      },
    ],
  },
  {
    name: "inExam",
    value: [
      {
        name: "Final Theory",
        percent: 40,
      },
      {
        name: "Final Practice",
        percent: 15,
      },
    ],
  },
  {
    name: "rulePass",
    value: [
      {
        name: "GPA",
        percent: 70,
      },
    ],
  },
];

export class AssessmentScheme extends Component {
  renderRule = (type) => {
    const findDataByName = initialData.find((item) => item.name === type);

    return findDataByName.value.map((item, index) => {
      return (
        <div
          className={item.name}
          style={{
            display: "flex",
          }}
        >
          <p
            style={{
              width: 105,
              marginRight: 10,
              
            }}
          >
            {item.name} *
          </p>
          <p
            style={{
              border: "1px solid black",
              padding: "0px 6px",
              borderRadius: 10,
              marginBottom: 5
            }}
          >
            {item.percent}%
          </p>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="assessment">
        <h3 className="assessmentTitle">Assessment Scheme</h3>
        <div className="calcPoint">
          <div className="pointInClass">{this.renderRule("inClass")}</div>
          <div
            className="pointExam"
            style={{
              borderTop: "1px solid black",
              borderBottom: "1px solid black",
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 0px"
            }}
          >
            {this.renderRule("inExam")}
          </div>
          <div className="rulePass">
            <p>Passing criteria</p>
            {this.renderRule("rulePass")}
          </div>
        </div>
      </div>
    );
  }
}

export default AssessmentScheme;
