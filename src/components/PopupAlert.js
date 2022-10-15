import React, { Component } from "react";

export class PopupAlert extends Component {
  render() {
    const { title, content, cancelBtn, doActionBtn, closePopup } = this.props;

    return (
      <div className="popup">
        <div className="popup_inner">
          <div className="flex headerPop">
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

            <p
              className="ml-3"
              style={{
                fontWeight: 700,
              }}
            >
              {title}
            </p>
          </div>
          <div
            style={{
              height: "60%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              fontWeight: 700,
            }}
          >
            <p>{content}</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <a
                href="#aa"
                style={{
                  color: cancelBtn.color,
                  marginRight: 20,
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
                onClick={closePopup}
              >
                Cancel
              </a>
              <button
                style={{
                  color: "white",
                  backgroundColor: doActionBtn.color,
                  borderRadius: "10px",
                  padding: "5px 10px",
                }}
                onClick={() => {
                  doActionBtn.func(doActionBtn.indexDay);
                  closePopup();
                }}
              >
                {doActionBtn.value}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopupAlert;
