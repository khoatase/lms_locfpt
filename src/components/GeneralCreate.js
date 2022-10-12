import React, { Component } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export class GeneralCreate extends Component {
  constructor() {
    super();
    this.state = {
      Level: null,
      AttendeeNumber: null,
      TechReq: null,
      CourseObj: EditorState.createEmpty(),
    };
  }

  onChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: name === "AttendeeNumber" ? +value : value,
    });
  };

  onKeyDownHandler = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
    }
  };

  onEditorStateChange = (editorState) => {
    // console.log(editorState.getCurrentContent().getPlainText());
    this.setState({
      ...this.state,
      CourseObj: editorState,
    });
  };

  render() {
    return (
      <div className="bg-white general">
        <div className="generalLevel">
          <label htmlFor="Level">Level</label>
          <select
            id="Level"
            name="Level"
            value={this.state.Level}
            onChange={this.onChangeHandler}
          >
            <option>All Level</option>
            <option>All Level</option>
            <option>All Level</option>
          </select>
        </div>
        <div className="generalAttendee">
          <label htmlFor="AttendeeNumber">AttendeeNumber number</label>
          <input
            name="AttendeeNumber"
            id="AttendeeNumber"
            value={this.state.AttendeeNumber}
            onChange={this.onChangeHandler}
          />
        </div>
        <div className="generalTechnical">
          <label htmlFor="TechReq">TechReq Requirement(s)</label>
          <textarea
            name="TechReq"
            id="TechReq"
            onKeyDown={this.onKeyDownHandler}
            value={this.state.TechReq}
            onChange={this.onChangeHandler}
          />
        </div>
        <div className="generalCourse">
          <label htmlFor="CourseObj">CourseObj Objectives</label>
          
          <div className="editorCourse">
            <Editor
              editorState={this.state.CourseObj}
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

export default GeneralCreate;
