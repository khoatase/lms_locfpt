import React from "react";

class ProcessCreate extends React.Component {
  // constructor() {
  //   super();
  // }

  renderDataProcess = (data) => {
    return data.map((item) => {
      return <p>{item}</p>;
    });
  };
  calcWidthProcess = (indexProcess) => {
    return indexProcess * 100 - 40;
  };

  render() {
    const { data, indexProcess } = this.props;
    return (
      <div className="relative">
        <div className="processCreate"></div>
        <div className="titleProcess">{this.renderDataProcess(data)}</div>
        <div
          className="h-3 absolute top-0 left-0 flex items-center justify-end processCurrent"
          style={{
            width: `${this.calcWidthProcess(indexProcess)}px`,
          }}
        >
          <div className="w-3 h-3 float-right bg-white mr-0 circlePoint"></div>
        </div>
      </div>
    );
  }
}

export default ProcessCreate;
