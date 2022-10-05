import React from "react";

class ProcessCreate extends React.Component {
  constructor() {
    super();
  }

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
      <div className="process">
        <div className="processCreate"></div>
        <div className="titleProcess">{this.renderDataProcess(data)}</div>
        <div
          className="processCurrent"
          style={{
            width: `${this.calcWidthProcess(indexProcess)}px`,
          }}
        >
          <div className="circlePoint"></div>
        </div>
      </div>
    );
  }
}

export default ProcessCreate;
