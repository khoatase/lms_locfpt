import React from "react";
import ProcessCreate from "../../components/ProcessCreate";
import "./styles/style.css";

const initialDateProcess = ["General", "Outline", "Other", "Done"];

class CreateSyllabus extends React.Component {
  constructor() {
    super();
    this.state = {
      indexProcess: 1,
    };
  }
  
  render() {
    return (
      <div className="createSyllabus">
        <div className="createHeader">
          <h1 className="titleCreateSyll">Syllabus</h1>
          <ProcessCreate
            data={initialDateProcess}
            indexProcess={this.state.indexProcess}
          />
        </div>
        <div className="createContent">
          <div className="contentLeft">
            <div className="inforSyllabus">
              <div className="syllabusName">
                <label htmlFor="syllName">Syllabus Name*</label>
                <input id="syllName" name="syllName" />
              </div>
              <div className="syllabusCode">
                <label htmlFor="syllCode">Code:</label>
                <p>AKT</p>
              </div>
              <div className="syllabusVersion">
                <label htmlFor="syllVersion">Version:</label>
                <p>1.0</p>
              </div>
            </div>
          </div>
          <div className="contentRight"></div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default CreateSyllabus;
