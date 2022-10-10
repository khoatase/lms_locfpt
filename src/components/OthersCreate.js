import React, { Component } from "react";
import AssessmentScheme from "./AssessmentScheme";
import TimeAllocation from "./TimeAllocation";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
export class OthersCreate extends Component {
  constructor() {
    super();
    this.state = {
      value: EditorState.createEmpty(),
    };
  }
  onEditorStateChange = (editorState) => {
    // console.log(editorState.getCurrentContent().getPlainText());
    this.setState({
      ...this.state,
      value: editorState,
    });
  };
  render() {
    const { timeLocation } = this.props;
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
          <div className="trainingEditor">
            <Editor
              editorState={this.state.value}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={this.onEditorStateChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default OthersCreate;
