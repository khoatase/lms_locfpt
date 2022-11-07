import React, { Component } from "react";
import AssessmentScheme from "./AssessmentScheme";
import TimeAllocation from "./TimeAllocation";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
export class OthersCreate extends Component {
  render() {
    const {
      timeLocation,
      trainingValue,
      reTestValue,
      markingValue,
      waiverValue,
      otherValue,
      onEditorStateChange,
    } = this.props;
    return (
      <div className="bg-white general others">
        <div
          style={{
            display: "flex",
            height: 250,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: "50%",
              marginRight: 20,
            }}
          >
            <TimeAllocation timeLocation={timeLocation} type="left" />
          </div>
          <div
            style={{
              width: "50%",
            }}
          >
            <AssessmentScheme />
          </div>
        </div>
        <div className="training">
          <h3>Training delivery principle</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                marginLeft: 20,
                display: "flex",
                width: "30%",
              }}
            >
              <svg
                style={{
                  marginRight: 10,
                }}
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0L0 4V10C0 15.55 3.84 20.74 9 22C14.16 20.74 18 15.55 18 10V4L9 0ZM16 10C16 14.52 13.02 18.69 9 19.93C4.98 18.69 2 14.52 2 10V5.3L9 2.19L16 5.3V10ZM4.41 10.59L3 12L7 16L15 8L13.59 6.58L7 13.17L4.41 10.59Z"
                  fill="#EE964B"
                />
              </svg>
              Training
            </p>
            <div className="trainingEditor">
              <Editor
                editorState={trainingValue}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={(editorState) => {
                  onEditorStateChange(editorState, "trainingValue");
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                marginLeft: 20,
                display: "flex",
                width: "30%",
              }}
            >
              <svg
                style={{
                  marginRight: 10,
                }}
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0L0 4V10C0 15.55 3.84 20.74 9 22C14.16 20.74 18 15.55 18 10V4L9 0ZM16 10C16 14.52 13.02 18.69 9 19.93C4.98 18.69 2 14.52 2 10V5.3L9 2.19L16 5.3V10ZM4.41 10.59L3 12L7 16L15 8L13.59 6.58L7 13.17L4.41 10.59Z"
                  fill="#EE964B"
                />
              </svg>
              Re-test
            </p>
            <div className="trainingEditor">
              <Editor
                editorState={reTestValue}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={(editorState) => {
                  onEditorStateChange(editorState, "reTestValue");
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                marginLeft: 20,
                display: "flex",
                width: "30%",
              }}
            >
              <svg
                style={{
                  marginRight: 10,
                }}
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0L0 4V10C0 15.55 3.84 20.74 9 22C14.16 20.74 18 15.55 18 10V4L9 0ZM16 10C16 14.52 13.02 18.69 9 19.93C4.98 18.69 2 14.52 2 10V5.3L9 2.19L16 5.3V10ZM4.41 10.59L3 12L7 16L15 8L13.59 6.58L7 13.17L4.41 10.59Z"
                  fill="#EE964B"
                />
              </svg>
              Marking
            </p>
            <div className="trainingEditor">
              <Editor
                editorState={markingValue}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={(editorState) => {
                  onEditorStateChange(editorState, "markingValue");
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                marginLeft: 20,
                display: "flex",
                width: "30%",
              }}
            >
              <svg
                style={{
                  marginRight: 10,
                }}
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0L0 4V10C0 15.55 3.84 20.74 9 22C14.16 20.74 18 15.55 18 10V4L9 0ZM16 10C16 14.52 13.02 18.69 9 19.93C4.98 18.69 2 14.52 2 10V5.3L9 2.19L16 5.3V10ZM4.41 10.59L3 12L7 16L15 8L13.59 6.58L7 13.17L4.41 10.59Z"
                  fill="#EE964B"
                />
              </svg>
              Waiver Criteria
            </p>
            <div className="trainingEditor">
              <Editor
                editorState={waiverValue}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={(editorState) => {
                  onEditorStateChange(editorState, "waiverValue");
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                marginLeft: 20,
                display: "flex",
                width: "30%",
              }}
            >
              <svg
                style={{
                  marginRight: 10,
                }}
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0L0 4V10C0 15.55 3.84 20.74 9 22C14.16 20.74 18 15.55 18 10V4L9 0ZM16 10C16 14.52 13.02 18.69 9 19.93C4.98 18.69 2 14.52 2 10V5.3L9 2.19L16 5.3V10ZM4.41 10.59L3 12L7 16L15 8L13.59 6.58L7 13.17L4.41 10.59Z"
                  fill="#EE964B"
                />
              </svg>
              Others
            </p>
            <div className="trainingEditor">
              <Editor
                editorState={otherValue}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={(editorState) => {
                  onEditorStateChange(editorState, "otherValue");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OthersCreate;
