import React, { Component } from "react";

export class DeliveryType extends Component {
  render() {
    const { data, name, onChangeValueContent, value, indexDay, indexUnit } =
      this.props;
    return (
      <select
        style={{
          width: 130,
          height: 30,
          borderRadius: 10,
          margin: "0px 10px",
          border: "1px solid black",
        }}
        name={name}
        value={value}
        onChange={(e) => {
          onChangeValueContent(e, { indexDay, indexUnit });
        }}
      >
        <option>Delivery type</option>
        {data.map((item, index) => {
          return (
            <option value={item.id}>
              {" "}
              {item.icon} {item.name}
            </option>
          );
        })}
      </select>
    );
  }
}

export default DeliveryType;
