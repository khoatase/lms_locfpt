import React, { Component } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export class GeneralCreate extends Component {
  constructor() {
    super();
    this.state = {
      level: null,
      attendee: null,
      technical: null,
      course: EditorState.createEmpty(),
    };
  }

  onChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: name === "attendee" ? +value : value,
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
      course: editorState,
    });
  };
  render() {
    return (
      <div className="bg-white general">
        <div className="generalLevel">
          <label htmlFor="level">Level</label>
          <select
            id="level"
            name="level"
            value={this.state.level}
            onChange={this.onChangeHandler}
          >
            <option>All Level</option>
            <option>All Level</option>
            <option>All Level</option>
          </select>
        </div>
        <div className="generalAttendee">
          <label htmlFor="attendee">Attendee number</label>
          <input
            name="attendee"
            id="attendee"
            value={this.state.attendee}
            onChange={this.onChangeHandler}
          />
        </div>
        <div className="generalTechnical">
          <label htmlFor="technical">Technical Requirement(s)</label>
          <textarea
            name="technical"
            id="technical"
            onKeyDown={this.onKeyDownHandler}
            value={this.state.technical}
            onChange={this.onChangeHandler}
          />
        </div>
        <div className="generalCourse">
          <label htmlFor="course">Course Objectives</label>
          {/* <input
            name="course"
            id="course"
            value={this.state.course}
            onChange={this.onChangeHandler}
          /> */}
          <div className="editorCourse">
            <Editor
              editorState={this.state.course}
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
