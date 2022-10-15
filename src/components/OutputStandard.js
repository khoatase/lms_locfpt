import React, { Component } from "react";

export class OutputStandard extends Component {
  render() {
    const { name, value, onChangeValueContent, indexDay, indexUnit, data } =
      this.props;

    return (
      <select
        style={{
          width: 140,
          height: 30,
          borderRadius: 10,
          margin: "0px 15px",
          border: "1px solid black",
        }}
        name={name}
        value={value}
        onChange={(e) => {
          onChangeValueContent(e, { indexDay, indexUnit });
        }}
      >
        <option>Output standard</option>
        {data.map((item, index) => {
          const {
            OutputStandardId,
            OutputStandardCode,
            OutputStandardDescription,
            OutputStandardName,
          } = item;
          return <option value={OutputStandardId}>{OutputStandardName}</option>;
        })}
      </select>
    );
  }
}

export default OutputStandard;
