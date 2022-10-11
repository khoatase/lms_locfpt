import React from "react";
import GeneralCreate from "../../components/GeneralCreate";
import OthersCreate from "../../components/OthersCreate";
import OutlineCreate from "../../components/OutlineCreate";
import PopupAlert from "../../components/PopupAlert";
import ProcessCreate from "../../components/ProcessCreate";
import TimeAllocation from "../../components/TimeAllocation";

import "./styles/style.css";

const initialDataProcess = ["General", "Outline", "Others", "Done"];
const initialDataTimeLocation = [
  { name: "Assignment/Lab", percent: 0, color: "#F4BE37" },
  { name: "Concept/Lecture", percent: 0, color: "#FF9F40" },
  { name: "Guide/Review", percent: 0, color: "#0D2535" },
  { name: "Test/Quiz", percent: 0, color: "#5388D8" },
  { name: "Exam", percent: 0, color: "#206EE5" },
];

class CreateSyllabus extends React.Component {
  constructor() {
    super();
    this.state = {
      indexProcess: 1,
      syllName: null,
      syllCode: "ABC",
      syllVersion: "1.0",
      menuCurrent: "General",
      timeLocation: initialDataTimeLocation,
      showPopup: false,
    };
  }

  onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name !== "syllName") {
      let findIndex = initialDataProcess.findIndex((item) => item === value);
      this.setState({
        ...this.state,
        [name]: value,
        indexProcess: ++findIndex,
      });
    } else {
      this.setState({
        ...this.state,
        [name]: value,
      });
    }
  };

  // styleBgColor = () => {
  //   return {
  //     backgroumd
  //   }
  // }

  handleNextPrevious = (data) => {
    const findIndex = initialDataProcess.findIndex(
      (item) => item === this.state.menuCurrent
    );
    if (findIndex < initialDataProcess.length - 2) {
      this.setState({
        ...this.state,
        menuCurrent: initialDataProcess[findIndex + data],
        indexProcess: data > 0 ? findIndex + 2 : findIndex,
      });
    } else {
      if (findIndex === initialDataProcess.length - 2) {
        this.setState({
          ...this.state,
          menuCurrent: initialDataProcess[findIndex + data],
          indexProcess: data > 0 ? findIndex + 2 : findIndex,
        });
      }
    }
  };

  togglePopup = () => {
    console.log("first");
    this.setState({
      ...this.state,
      showPopup: !this.state.showPopup,
    });
  };

  saveAsDraft = () => {
    
  }

  render() {
    return (
      <div className="w-full">
        <div className="flex items-baseline pb-2 pt-2">
          <h1 className="titleCreateSyll">Syllabus</h1>
          <ProcessCreate
            data={initialDataProcess}
            indexProcess={this.state.indexProcess}
          />
        </div>
        <div className="createContent">
          <div className="contentLeft">
            <div className="">
              <div className="flex justify-start items-center p-5">
                <div className="syllabusName">
                  <label className="mr-2" htmlFor="syllName">
                    Syllabus Name*
                  </label>
                  <input
                    id="syllName"
                    name="syllName"
                    value={
                      this.state.syllName !== null ? this.state.syllName : ""
                    }
                    onChange={this.onChangeHandler}
                  />
                </div>
                <div className="syllabusCode">
                  <label className="mr-2" htmlFor="syllCode">
                    Code:
                  </label>
                  <p>{this.state.syllCode}</p>
                </div>
                <div className="syllabusVersion">
                  <label className="mr-2" htmlFor="syllVersion">
                    Version:
                  </label>
                  <p>{this.state.syllVersion}</p>
                </div>
              </div>
              <div>
                <div className="flex w-8/12 justify-between text-center text-white pb-1 menu">
                  <p
                    className="w-3/5 cursor-pointer"
                    style={{
                      backgroundColor:
                        this.state.menuCurrent === "General"
                          ? "#2D3748"
                          : "#6D7684",
                      padding: "5px 0px",
                    }}
                    onClick={() => {
                      this.onChangeHandler({
                        target: { name: "menuCurrent", value: "General" },
                      });
                    }}
                  >
                    General
                  </p>
                  <p
                    className="w-3/5 cursor-pointer"
                    style={{
                      backgroundColor:
                        this.state.menuCurrent === "Outline"
                          ? "#2D3748"
                          : "#6D7684",
                      padding: "5px 0px",
                    }}
                    onClick={() => {
                      this.onChangeHandler({
                        target: { name: "menuCurrent", value: "Outline" },
                      });
                    }}
                  >
                    Outline
                  </p>
                  <p
                    className="w-3/5 cursor-pointer"
                    style={{
                      backgroundColor:
                        this.state.menuCurrent === "Others"
                          ? "#2D3748"
                          : "#6D7684",
                      padding: "5px 0px",
                    }}
                    onClick={() => {
                      this.onChangeHandler({
                        target: { name: "menuCurrent", value: "Others" },
                      });
                    }}
                  >
                    Others
                  </p>
                </div>

                {this.state.menuCurrent === "General" ? (
                  <GeneralCreate />
                ) : this.state.menuCurrent === "Outline" ? (
                  <OutlineCreate />
                ) : (
                  <OthersCreate timeLocation={this.state.timeLocation} />
                )}
              </div>
            </div>
          </div>
          <div className="contentRight">
            {this.state.menuCurrent !== "Others" && (
              <TimeAllocation
                timeLocation={this.state.timeLocation}
                type="right"
              />
            )}
          </div>
        </div>
        <div
          className="footerCreate"
          style={{
            justifyContent:
              this.state.menuCurrent === "General"
                ? "flex-end"
                : "space-between",
          }}
        >
          {this.state.menuCurrent === "General" ? null : (
            <button
              className="next"
              onClick={() => {
                this.handleNextPrevious(-1);
              }}
            >
              Previous
            </button>
          )}
          <div>
            <a href="#aa">Cancel</a>
            <button className="save" onClick={this.togglePopup}>
              Save as draft
            </button>
            {this.state.showPopup && (
              <PopupAlert
                title="Learning hours"
                content="Learning hours of a day cannot exceed 8 hours.
              Save and modify later?"
                closePopup={this.togglePopup}
                cancelBtn={{
                  color: "#E74A3B",
                }}
                doActionBtn={{
                  value: "Save as draft",
                  color: "#0D3B66",
                }}
              />
            )}
            <button
              className="next"
              onClick={() => {
                if (this.state.menuCurrent !== "Others")
                  this.handleNextPrevious(1);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateSyllabus;
