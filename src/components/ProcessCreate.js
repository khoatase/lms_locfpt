import React, { useEffect } from "react";

const ProcessCreate = (props) => {
  const { data, indexProcess } = props;

  const renderDataProcess = () => {
    return data.map((item) => {
      return <p>{item}</p>;
    });
  };
  const calcWidthProcess = () => {
    return indexProcess * 100 - 40;
  };
  return (
    <div className="process">
      <div className="processCreate"></div>
      <div className="titleProcess">{renderDataProcess()}</div>
      <div
        className="processCurrent"
        style={{
          width: `${calcWidthProcess()}px`,
        }}
      >
        <div className="circlePoint"></div>
      </div>
    </div>
  );
};

export default ProcessCreate;
