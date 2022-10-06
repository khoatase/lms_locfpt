import React from "react";
import GeneralCreate from "../../components/GeneralCreate";
import OthersCreate from "../../components/OthersCreate";
import OutlineCreate from "../../components/OutlineCreate";
import ProcessCreate from "../../components/ProcessCreate";
import "./styles/style.css";

const initialDataProcess = ["General", "Outline", "Other", "Done"];
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
    };
  }

  onChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  // styleBgColor = () => {
  //   return {
  //     backgroumd
  //   }
  // }

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
            <div className="p-5">
              <div className="flex justify-start items-center pb-5">
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
                <div className="flex w-8/12 justify-between text-center text-white menu">
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
                <GeneralCreate />
                <OutlineCreate />
                <OthersCreate />
              </div>
            </div>
          </div>
          <div className="w-1/5 h-5"></div>
        </div>
      </div>
    );
  }
}

export default CreateSyllabus;
