import React, { Component } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export class GeneralCreate extends Component {
  onKeyDownHandler = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
    }
  };

  render() {
    const { data, onChangeHandlerGeneral, onEditorStateChange } = this.props;

    return (
      <div className="bg-white general">
        <div className="generalLevel">
          <label htmlFor="Level">Level</label>
          <select
            id="Level"
            name="Level"
            value={data.Level}
            onChange={onChangeHandlerGeneral}
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
            value={data.AttendeeNumber}
            onChange={onChangeHandlerGeneral}
          />
        </div>
        <div className="generalTechnical">
          <label htmlFor="TechReq">TechReq Requirement(s)</label>
          <textarea
            name="TechReq"
            id="TechReq"
            onKeyDown={this.onKeyDownHandler}
            value={data.TechReq}
            onChange={onChangeHandlerGeneral}
          />
        </div>
        <div className="generalCourse">
          <label htmlFor="CourseObj">CourseObj Objectives</label>

          <div className="editorCourse">
            <Editor
              editorState={data.CourseObj}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={(e) => {
                onEditorStateChange(e, "CourseObj");
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default GeneralCreate;
