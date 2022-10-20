import React, { Component } from "react";
import { Collapse } from "react-collapse";
import DeliveryType from "./DeliveryType";
import OutputStandard from "./OutputStandard";
import PopupAlert from "./PopupAlert";
import PopupTrainingMaterial from "./PopupTrainingMaterial";

const intitialDataDeliveryType = [
  {
    id: 1,
    name: "Assignment/Lab",
    icon: (
      <svg
        width="16"
        height="20"
        viewBox="0 0 16 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V2C16 0.9 15.1 0 14 0ZM5 2H7V7L6 6.25L5 7V2ZM14 18H2V2H3V11L6 8.75L9 11V2H14V18Z"
          fill="#EE964B"
        />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Concept/Lecture",
    icon: (
      <svg
        width="22"
        height="19"
        viewBox="0 0 22 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 11C10.21 11 12 9.21 12 7C12 4.79 10.21 3 8 3C5.79 3 4 4.79 4 7C4 9.21 5.79 11 8 11ZM8 5C9.1 5 10 5.9 10 7C10 8.1 9.1 9 8 9C6.9 9 6 8.1 6 7C6 5.9 6.9 5 8 5ZM8 13C5.33 13 0 14.34 0 17V19H16V17C16 14.34 10.67 13 8 13ZM2 17C2.22 16.28 5.31 15 8 15C10.7 15 13.8 16.29 14 17H2ZM14.08 5.05C14.92 6.23 14.92 7.76 14.08 8.94L15.76 10.63C17.78 8.61 17.78 5.56 15.76 3.36L14.08 5.05ZM19.07 0L17.44 1.63C20.21 4.65 20.21 9.19 17.44 12.37L19.07 14C22.97 10.11 22.98 4.05 19.07 0Z"
          fill="#EE964B"
        />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Guide/Review",
    icon: (
      <svg
        width="21"
        height="23"
        viewBox="0 0 21 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.25 23H9.97294C8.93794 23 7.9221 22.5687 7.20335 21.8212L0.20752 14.5283L2.19127 12.7746C2.78544 12.2475 3.65752 12.1421 4.3571 12.5158L6.66669 13.7425V4.59042C6.66669 3.26792 7.74002 2.19458 9.06252 2.19458C9.22544 2.19458 9.38835 2.21375 9.55127 2.2425C9.63752 0.996666 10.6725 0.00958252 11.9375 0.00958252C12.7617 0.00958252 13.4804 0.421666 13.9117 1.05417C14.1896 0.939166 14.4963 0.881666 14.8125 0.881666C16.135 0.881666 17.2084 1.955 17.2084 3.2775V3.54583C17.3617 3.51708 17.5246 3.49792 17.6875 3.49792C19.01 3.49792 20.0834 4.57125 20.0834 5.89375V19.1667C20.0834 21.2846 18.3679 23 16.25 23ZM2.96752 14.6433L8.58335 20.4892C8.94752 20.8629 9.44585 21.0833 9.96335 21.0833H16.25C17.3042 21.0833 18.1667 20.2208 18.1667 19.1667V5.89375C18.1667 5.62542 17.9559 5.41458 17.6875 5.41458C17.4192 5.41458 17.2084 5.62542 17.2084 5.89375V11.5H15.2917V3.2775C15.2917 3.00917 15.0809 2.79833 14.8125 2.79833C14.5442 2.79833 14.3334 3.00917 14.3334 3.2775V11.5H12.4167V2.40542C12.4167 2.13708 12.2059 1.92625 11.9375 1.92625C11.6692 1.92625 11.4584 2.13708 11.4584 2.40542V11.5H9.54169V4.59042C9.54169 4.32208 9.33085 4.11125 9.06252 4.11125C8.79419 4.11125 8.58335 4.33167 8.58335 4.59042V16.9242L3.45627 14.2121L2.96752 14.6433Z"
          fill="#EE964B"
        />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Test/Quiz",
    icon: (
      <svg
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H18C19.1 18 20 17.1 20 16V2C20 0.9 19.1 0 18 0ZM18 16H2V2H18V16Z"
          fill="#EE964B"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.41 7.42L15.99 6L12.82 9.17L11.41 7.75L10 9.16L12.82 12L17.41 7.42Z"
          fill="#EE964B"
        />
        <path d="M8 4H3V6H8V4Z" fill="#EE964B" />
        <path d="M8 8H3V10H8V8Z" fill="#EE964B" />
        <path d="M8 12H3V14H8V12Z" fill="#EE964B" />
      </svg>
    ),
  },
  {
    id: 5,
    name: "Exam",
    icon: (
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.45 13H12.54L7.42996 0H5.56996L0.459961 13H2.54996L3.66996 10H9.30996L10.45 13ZM4.42996 8L6.49996 2.48L8.56996 8H4.42996ZM19.59 8.59L11.5 16.68L7.82996 13L6.41996 14.41L11.51 19.5L21 10L19.59 8.59Z"
          fill="#EE964B"
        />
      </svg>
    ),
  },
  {
    id: 6,
    name: "Seminar/Workshop",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 4C7.13 4 4 7.13 4 11H6C6 8.24 8.24 6 11 6C13.76 6 16 8.24 16 11H18C18 7.13 14.87 4 11 4ZM12 13.29C12.88 12.9 13.5 12.03 13.5 11C13.5 9.62 12.38 8.5 11 8.5C9.62 8.5 8.5 9.62 8.5 11C8.5 12.02 9.12 12.9 10 13.29V16.59L6.59 20L8 21.41L11 18.41L14 21.41L15.41 20L12 16.59V13.29ZM11 0C4.93 0 0 4.93 0 11H2C2 6.03 6.03 2 11 2C15.97 2 20 6.03 20 11H22C22 4.93 17.07 0 11 0Z"
          fill="#EE964B"
        />
      </svg>
    ),
  },
];

const initialDataOutputStandard = [
  {
    OutputStandardId: 1,
    OutputStandardCode: "H2S04",
    OutputStandardDescription: "a",
    OutputStandardName: "H2S04",
  },
  {
    OutputStandardId: 2,
    OutputStandardCode: "HS01",
    OutputStandardDescription: "a",
    OutputStandardName: "HS01",
  },
  {
    OutputStandardId: 3,
    OutputStandardCode: "H3P04",
    OutputStandardDescription: "a",
    OutputStandardName: "H3P04",
  },
  {
    OutputStandardId: 4,
    OutputStandardCode: "H1NI1",
    OutputStandardDescription: "a",
    OutputStandardName: "H1NI1",
  },
  {
    OutputStandardId: 5,
    OutputStandardCode: "KS903",
    OutputStandardDescription: "a",
    OutputStandardName: "KS903",
  },
  {
    OutputStandardId: 6,
    OutputStandardCode: "LM01",
    OutputStandardDescription: "a",
    OutputStandardName: "LM01",
  },
  {
    OutputStandardId: 7,
    OutputStandardCode: "NANI90",
    OutputStandardDescription: "a",
    OutputStandardName: "NANI90",
  },
];

export class OutlineCreate extends Component {
  constructor() {
    super();
    this.state = {
      unitName: null,
      showPopup: false,
      deliveryType: intitialDataDeliveryType,
      outputStandard: initialDataOutputStandard,
      showPopupTraining: false,
      indexShowPopup: null,
      indexDelete: null,
    };
  }

  togglePopup = () => {
    this.setState({
      ...this.state,
      showPopup: !this.state.showPopup,
    });
  };

  onChangeHandler = (e) => {
    const { name, value } = e.target;
    const unitName = name.split("_")[0];
    this.setState({
      [unitName]: value,
    });
  };

  renderDay = (
    outLineData,
    callback,
    handleAdd,
    onChangeUnitNameHandler,
    onChangeValueContent,
    handleDeleteContentOfDay
  ) => {
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
            {item.unit[0].contents.length > 0 && (
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  this.togglePopup();
                  this.setState({
                    indexDelete: index,
                  });
                }}
              >
                <path
                  d="M11 3.99L18.53 17H3.47L11 3.99ZM11 0L0 19H22L11 0ZM12 14H10V16H12V14ZM12 8H10V12H12V8Z"
                  fill="#E74A3B"
                />
              </svg>
            )}

            {this.state.showPopup && (
              <PopupAlert
                title="Delete Day"
                content="Delete all content of the Day?"
                closePopup={this.togglePopup}
                cancelBtn={{
                  color: "#0D3B66",
                }}
                doActionBtn={{
                  value: "Delete",
                  color: "#E74A3B",
                  func: handleDeleteContentOfDay,
                  indexDay: this.state.indexDelete,
                }}
              />
            )}
          </div>
          <Collapse isOpened={item.isOpened}>
            {this.renderUnits(
              item.unit,
              this.countUnit(outLineData, index),
              callback,
              index,
              onChangeUnitNameHandler,
              handleAdd,
              onChangeValueContent
            )}
            <div className="unitContainer">
              <button
                style={{
                  backgroundColor: "#474747",
                  display: "flex",
                  padding: 10,
                  borderRadius: 10,
                  color: "white",
                  alignItems: "center",
                }}
                onClick={() => {
                  handleAdd("unit", index);
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    marginRight: 10,
                  }}
                >
                  <path
                    d="M11 5H9V9H5V11H9V15H11V11H15V9H11V5ZM10 0C4.49 0 0 4.49 0 10C0 15.51 4.49 20 10 20C15.51 20 20 15.51 20 10C20 4.49 15.51 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
                    fill="#F1F1F1"
                  />
                </svg>{" "}
                Add unit
              </button>
            </div>
          </Collapse>
        </div>
      );
    });
  };

  renderUnits = (
    unit,
    countUnit,
    callback,
    indexDay,
    onChangeUnitNameHandler,
    handleAdd,
    onChangeValueContent
  ) => {
    return unit.map((item, index) => {
      const { unitName, contents } = item;
      return (
        <div
          className="unitDetails"
          style={{
            backgroundColor: index % 2 === 0 ? "white" : "#f1f1f1",
          }}
        >
          <div className="unitContainer">
            <div className="unitDetailHeader">
              <h3>Unit {countUnit - 1 + index}</h3>

              {unitName !== null ? (
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        width: "90%",
                        fontWeight: 700,
                      }}
                    >
                      {unitName}
                    </h3>
                    <p>7Hrs</p>
                  </div>
                  <svg
                    width="44"
                    height="30"
                    viewBox="0 0 44 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="44" height="30" rx="10" fill="#0D3B66" />
                    <g clip-path="url(#clip0_1173_19229)">
                      <path
                        d="M13 20.25V24H16.75L27.81 12.94L24.06 9.19L13 20.25ZM15.92 22H15V21.08L24.06 12.02L24.98 12.94L15.92 22ZM30.71 8.63L28.37 6.29C28.17 6.09 27.92 6 27.66 6C27.4 6 27.15 6.1 26.96 6.29L25.13 8.12L28.88 11.87L30.71 10.04C31.1 9.65 31.1 9.02 30.71 8.63Z"
                        fill="#F1F1F1"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1173_19229">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(10 3)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              ) : (
                <div>
                  <label
                    style={{
                      fontWeight: 700,
                    }}
                    htmlFor={"unitName_" + index}
                  >
                    Unit name
                  </label>
                  <div>
                    <input
                      style={{
                        width: 300,
                        padding: "5px 10px",
                        border: "1px solid black",
                        borderRadius: 10,
                        marginRight: 10,
                      }}
                      placeholder="Type unit name"
                      name={"unitName_" + index}
                      id={"unitName_" + index}
                      onChange={(e) => {
                        this.onChangeHandler(e);
                      }}
                    />
                    <button
                      style={{
                        backgroundColor: "#0D3B66",
                        fontWeight: 700,
                        color: "white",
                        padding: "5px 10px",
                        borderRadius: 10,
                      }}
                      onClick={() => {
                        onChangeUnitNameHandler(
                          index,
                          this.state.unitName,
                          indexDay
                        );
                        this.setState({
                          unitName: null,
                        });
                      }}
                    >
                      Create
                    </button>
                  </div>
                </div>
              )}

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
              <div
                style={{
                  paddingLeft: 55,
                }}
              >
                {this.renderContents(
                  item.contents,
                  index % 2 === 0 ? "#f1f1f1" : "white",
                  onChangeValueContent,
                  {
                    indexDay,
                    indexUnit: index,
                  }
                )}
                <button
                  onClick={() => {
                    handleAdd("content", {
                      indexDay,
                      indexUnit: index,
                    });
                  }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="28" height="28" rx="14" fill="#0D3B66" />
                    <g clip-path="url(#clip0_1173_20124)">
                      <path
                        d="M15 9H13V13H9V15H13V19H15V15H19V13H15V9ZM14 4C8.49 4 4 8.49 4 14C4 19.51 8.49 24 14 24C19.51 24 24 19.51 24 14C24 8.49 19.51 4 14 4ZM14 22C9.59 22 6 18.41 6 14C6 9.59 9.59 6 14 6C18.41 6 22 9.59 22 14C22 18.41 18.41 22 14 22Z"
                        fill="#F1F1F1"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1173_20124">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(2 2)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </Collapse>
          </div>
        </div>
      );
    });
  };

  renderContents = (contents, bgColor, onChangeValueContent, indexDayUnit) => {
    const { indexDay, indexUnit } = indexDayUnit;
    return contents.map((item, index) => {
      return !item.isEdit ? (
        <div
          style={{
            padding: "10px",
            backgroundColor: bgColor,
            borderRadius: 10,
            margin: "10px 0",
            display: "flex",
            alignItems: "center",
          }}
        >
          <input
            style={{
              width: 300,
              height: 30,
              borderRadius: 10,
              padding: "0px 10px",
              border: "1px solid black",
            }}
            name={"ContentName_" + index}
            value={item.ContentName}
            onChange={(e) => {
              onChangeValueContent(e, { indexDay, indexUnit });
            }}
          />
          <OutputStandard
            name={"OutputStandardId_" + index}
            value={item.OutputStandardId}
            onChangeValueContent={onChangeValueContent}
            indexDay={indexDay}
            indexUnit={indexUnit}
            data={this.state.outputStandard}
          />
          <input
            style={{
              width: 50,
              height: 30,
              borderRadius: 10,
              margin: "0px 10px",
              padding: "0px 5px",
              border: "1px solid black",
            }}
            name={"Duration_" + index}
            value={item.Duration}
            onChange={(e) => {
              onChangeValueContent(e, { indexDay, indexUnit });
            }}
          />

          <button
            style={{
              border: item.isOnline ? "1px solid #4EA7EB" : "1px solid #990000",
              color: item.isOnline ? "#4EA7EB" : "#990000",
              height: 30,
              borderRadius: 10,
              padding: "0px 10px",
            }}
            onClick={() => {
              onChangeValueContent(
                {
                  target: {
                    name: "isOnline_" + index,
                    value: !item.isOnline,
                  },
                },
                { indexDay, indexUnit }
              );
            }}
          >
            {item.isOnline ? "Online" : "Offline"}
          </button>

          <DeliveryType
            data={intitialDataDeliveryType}
            name={"DeliveryTypeId_" + index}
            onChangeValueContent={onChangeValueContent}
            indexDay={indexDay}
            indexUnit={indexUnit}
            value={item.DeliveryTypeId}
          />
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              this.setState({
                showPopupTraining: !this.state.showPopupTraining,
                indexShowPopup: {
                  ...indexDayUnit,
                  indexContent: index,
                },
              });
            }}
          >
            <path
              d="M18 2H10L8 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V4C20 2.9 19.1 2 18 2ZM18 14H2V2H7.17L9.17 4H18V14ZM15.5 8.12V11.5H12.5V6.5H13.88L15.5 8.12ZM11 5V13H17V7.5L14.5 5H11Z"
              fill="#EE964B"
            />
          </svg>
        </div>
      ) : (
        <div
          style={{
            padding: "10px",
            backgroundColor: bgColor,
            borderRadius: 10,
            margin: "10px 0",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p
            style={{
              width: 300,
              height: 30,
              borderRadius: 10,
              padding: "0px 10px",
              fontWeight: 700,
            }}
          >
            {item.ContentName}
          </p>
          <p
            style={{
              width: 120,
              height: 30,
              borderRadius: 10,
              margin: "0px 15px",
              fontWeight: 700,
              textAlign: "center",
              backgroundColor: "#2D3748",
              color: "white",
            }}
          >
            {this.handleNameOutputStandard(item.OutputStandardId)}
          </p>
          <p
            style={{
              borderRadius: 10,
              margin: "0px 10px",
              minWidth: 80,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {item.Duration} mins
          </p>

          <button
            style={{
              border: item.isOnline ? "1px solid #4EA7EB" : "1px solid #990000",
              color: item.isOnline ? "#4EA7EB" : "#990000",
              height: 30,
              borderRadius: 10,
              padding: "0px 10px",
              margin: "0px 20px",
            }}
          >
            {item.isOnline ? "Online" : "Offline"}
          </button>
          {/* <p
            style={{
              width: 130,
              height: 30,
              borderRadius: 10,
              margin: "0px 15px",
              textAlign: "center",
            }}
          > */}
          <p
            style={{
              width: 80,
              height: 30,
              borderRadius: 10,
              margin: "0px 15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {this.handleIconDeliveryType(item.DeliveryTypeId)}
          </p>
          {/* </p> */}
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              this.setState({
                showPopupTraining: !this.state.showPopupTraining,
                indexShowPopup: {
                  ...indexDayUnit,
                  indexContent: index,
                },
              });
            }}
          >
            <path
              d="M18 2H10L8 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V4C20 2.9 19.1 2 18 2ZM18 14H2V2H7.17L9.17 4H18V14ZM15.5 8.12V11.5H12.5V6.5H13.88L15.5 8.12ZM11 5V13H17V7.5L14.5 5H11Z"
              fill="#EE964B"
            />
          </svg>
        </div>
      );
    });
  };

  handleIconDeliveryType = (index) => {
    return index
      ? this.state.deliveryType.find((item) => item.id === +index).icon
      : null;
  };

  handleNameOutputStandard = (index) => {
    return index
      ? this.state.outputStandard.find(
          (item) => item.OutputStandardId === +index
        ).OutputStandardName
      : null;
  };

  countUnit = (outLineData, index) => {
    if (outLineData[index].unit.length === 1 && index !== 0) {
      return outLineData[index - 1].unit.length;
    }
    return outLineData[index].unit.length;
  };

  handleClosePopupTraining = () => {
    this.setState({
      showPopupTraining: false,
    });
  };

  render() {
    const {
      outLineData,
      changeCollapse,
      handleAdd,
      onChangeUnitNameHandler,
      onChangeValueContent,
      onChangeTrainingMaterialValue,
      handleDeleteContentOfDay,
    } = this.props;
    return (
      <div className="bg-white outlines">
        {this.renderDay(
          outLineData,
          changeCollapse,
          handleAdd,
          onChangeUnitNameHandler,
          onChangeValueContent,
          handleDeleteContentOfDay
        )}
        <button
          style={{
            backgroundColor: "#0D3B66",
            display: "flex",
            padding: "10px",
            margin: "10px 30px",
            borderRadius: 10,
            color: "white",
            alignItems: "center",
          }}
          onClick={() => {
            handleAdd("day");
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              marginRight: 10,
            }}
          >
            <path
              d="M11 5H9V9H5V11H9V15H11V11H15V9H11V5ZM10 0C4.49 0 0 4.49 0 10C0 15.51 4.49 20 10 20C15.51 20 20 15.51 20 10C20 4.49 15.51 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
              fill="#F1F1F1"
            />
          </svg>{" "}
          Add day
        </button>
        {this.state.showPopupTraining && (
          <PopupTrainingMaterial
            outLineData={outLineData}
            handleClosePopupTraining={this.handleClosePopupTraining}
            indexShowPopup={this.state.indexShowPopup}
            onChangeTrainingMaterialValue={onChangeTrainingMaterialValue}
          />
        )}
      </div>
    );
  }
}

export default OutlineCreate;
