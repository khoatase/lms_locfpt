import React from "react";
import GeneralCreate from "../../components/GeneralCreate";
import OthersCreate from "../../components/OthersCreate";
import OutlineCreate from "../../components/OutlineCreate";
import PopupAlert from "../../components/PopupAlert";
import ProcessCreate from "../../components/ProcessCreate";
import TimeAllocation from "../../components/TimeAllocation";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";

import "./styles/style.css";

const initialDataProcess = ["General", "Outline", "Others", "Done"];

const initialDataTimeLocation = [
  { id: 1, name: "Assignment/Lab", percent: 0, color: "#F4BE37" },
  { id: 2, name: "Concept/Lecture", percent: 0, color: "#FF9F40" },
  { id: 3, name: "Guide/Review", percent: 0, color: "#0D2535" },
  { id: 4, name: "Test/Quiz", percent: 0, color: "#5388D8" },
  { id: 5, name: "Exam", percent: 0, color: "#206EE5" },
];

const initialTrainingMaterial = {
  ContentId: null,
  CreateBy: null,
  Url: null,
  CreatedOn: null,
};

const initialContent = {
  ContentName: null,
  Duration: null,
  Session: null,
  DeliveryTypeId: null,
  isOnline: true,
  OutputStandardId: null,
  isEdit: false,
};

const initialUnit = [
  {
    unitName: null,
    UnitNumber: null,
    Duration: null,
    isOpened: false,
    contents: [],
  },
];

const initialDay = {
  day: "Day 1",
  isOpened: false,
  unit: [...initialUnit],
};

const initialDataOUtLine = [
  {
    ...initialDay,
  },
];

class CreateSyllabus extends React.Component {
  constructor() {
    super();
    this.state = {
      indexProcess: 1,
      menuCurrent: "General",
      SyllabusName: null,
      SyllabusCode: "ABC",
      syllVersion: "1.0",
      timeLocation: [...initialDataTimeLocation],
      showPopup: false,
      outLineData: initialDataOUtLine,
      Level: null,
      AttendeeNumber: null,
      TechReq: null,
      CourseObj: EditorState.createEmpty(),
    };
  }

  onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name !== "SyllabusName") {
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

  onChangeHandlerGeneral = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: name === "AttendeeNumber" ? +value : value,
    });
  };

  onEditorStateChange = (editorState) => {
    //console.log(editorState.getCurrentContent().getPlainText());
    this.setState({
      CourseObj: editorState,
    });
  };

  componentDidMount() {
    const getDataSaveAsDraft = JSON.parse(
      sessionStorage.getItem("saveAsDraft")
    );
    console.log(getDataSaveAsDraft);
    if (getDataSaveAsDraft !== null) {
      getDataSaveAsDraft.showPopup = false;

      if (getDataSaveAsDraft.CourseObj) {
        const rawCourseObj = convertFromRaw(getDataSaveAsDraft.CourseObj);
        const initEditorStateCourseObj =
          EditorState.createWithContent(rawCourseObj);
        getDataSaveAsDraft.CourseObj = initEditorStateCourseObj;
      } else {
        getDataSaveAsDraft.CourseObj = EditorState.createEmpty();
      }

      this.setState({
        ...getDataSaveAsDraft,
      });
    }
  }

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
    const getAllState = { ...this.state };

    getAllState.indexProcess = 1;
    getAllState.menuCurrent = "General";

    const getDataInCourseObj = getAllState.CourseObj.getCurrentContent();
    getAllState.CourseObj = convertToRaw(getDataInCourseObj);

    sessionStorage.setItem("saveAsDraft", JSON.stringify(getAllState));
  };

  changeCollapse = (data, type) => {
    const newData = [...this.state.outLineData];
    if (type === "day") {
      const findIndex = newData.findIndex((item) => item.day === data);
      newData[findIndex].isOpened = !newData[findIndex].isOpened;
    } else {
      const { indexDay, indexUnit } = data;
      newData[indexDay].unit[indexUnit].isOpened =
        !newData[indexDay].unit[indexUnit].isOpened;
    }

    this.setState({
      ...this.state,
      outLineData: [...newData],
    });
  };

  handleAdd = (type, data) => {
    const newDataOutLine = [...this.state.outLineData];
    if (type === "day") {
      const getItemDay = newDataOutLine[newDataOutLine.length - 1];
      const newDay = {
        day: "Day 1",
        isOpened: false,
        unit: [
          {
            unitName: null,
            UnitNumber: null,
            Duration: null,
            isOpened: false,
            contents: [],
          },
        ],
      };
      newDay.day = "Day " + (+getItemDay.day.split(" ")[1] + 1);
      newDataOutLine.push(newDay);
    } else if (type === "unit") {
      newDataOutLine[data].unit.push({
        unitName: null,
        UnitNumber: null,
        Duration: null,
        isOpened: false,
        contents: [],
      });
    } else {
      const { indexDay, indexUnit } = data;
      newDataOutLine[indexDay].unit[indexUnit].contents.forEach(
        (item) => (item.isEdit = true)
      );
      newDataOutLine[indexDay].unit[indexUnit].contents.push({
        ContentName: null,
        Duration: null,
        Session: null,
        DeliveryTypeId: null,
        isOnline: true,
        OutputStandardId: null,
        isEdit: false,
        trainingMaterials: [],
      });
    }

    this.setState({
      ...this.state,
      outLineData: newDataOutLine,
    });
  };

  onChangeUnitNameHandler = (unitIndex, value, dayIndex) => {
    // const { name, value } = e.target;
    // const unitName = name.split("_")[0];
    // const unitIndex = +name.split("_")[1];
    const newOutLineData = [...this.state.outLineData];
    // console.log({
    //   unitIndex,
    //   value,
    //   dayIndex,
    // });
    newOutLineData[dayIndex].unit[unitIndex].unitName = value;
    newOutLineData[dayIndex].unit[unitIndex].contents.push({
      ContentName: null,
      Duration: null,
      Session: null,
      DeliveryTypeId: null,
      isOnline: true,
      OutputStandardId: null,
      isEdit: false,
      trainingMaterials: [],
    });
    // this.setState({
    //   ...this.state,
    //   outLineData: newOutLineData,
    // });
  };

  onChangeValueContent = (e, { indexDay, indexUnit }) => {
    console.log(e);
    const { name, value } = e.target;
    const realName = name.split("_")[0];
    const index = name.split("_")[1];

    const newDataOutLine = [...this.state.outLineData];

    newDataOutLine[indexDay].unit[indexUnit].contents[index][realName] = value;

    if (realName === "DeliveryTypeId") {
      this.handleCountPercent(newDataOutLine, value);
    }

    this.setState({
      outLineData: [...newDataOutLine],
    });
  };

  handleCountPercent = (data, value) => {
    const newDataTimeLocation = [
      { id: 1, name: "Assignment/Lab", percent: 0, color: "#F4BE37" },
      { id: 2, name: "Concept/Lecture", percent: 0, color: "#FF9F40" },
      { id: 3, name: "Guide/Review", percent: 0, color: "#0D2535" },
      { id: 4, name: "Test/Quiz", percent: 0, color: "#5388D8" },
      { id: 5, name: "Exam", percent: 0, color: "#206EE5" },
      // ...initialDataTimeLocation,
    ];

    for (const day of data) {
      for (const unit of day.unit) {
        for (const content of unit.contents) {
          console.log(content);
          const findIndex = newDataTimeLocation.findIndex(
            (item) => item.id === +content.DeliveryTypeId
          );
          newDataTimeLocation[findIndex].percent += 1;
        }
      }
    }
    // const findIndex = newDataTimeLocation.findIndex(
    //   (item) => item.id === +value
    // );
    // newDataTimeLocation[findIndex].percent += 1;
    // this.setState({
    //   ...this.state,
    //   timeLocation: newDataTimeLocation,
    // });
    const caclSum = newDataTimeLocation.reduce((a, b) => {
      return a + b.percent;
    }, 0);

    newDataTimeLocation.forEach((item) => {
      if (item.percent > 0) {
        item.percent = Math.floor((item.percent / caclSum) * 100);
      }
    });

    this.setState({
      ...this.state,
      timeLocation: [...newDataTimeLocation],
    });
  };

  onChangeTrainingMaterialValue = (e) => {
    const selectedFile = e.target.files[0];
    const { name } = selectedFile;
    const data = {
      ContentId: null,
      CreateBy: null,
      Url: null,
      CreatedOn: null,
    };
  };

  handleDeleteContentOfDay = (dayIndex) => {
    console.log(dayIndex);
    const newOutLineData = [...this.state.outLineData];
    newOutLineData[dayIndex].unit = [
      {
        unitName: null,
        UnitNumber: null,
        Duration: null,
        isOpened: false,
        contents: [],
      },
    ];

    this.setState({
      outLineData: [...newOutLineData],
    });
  };

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
                  <label className="mr-2" htmlFor="SyllabusName">
                    Syllabus Name*
                  </label>
                  <input
                    id="SyllabusName"
                    name="SyllabusName"
                    value={
                      this.state.SyllabusName !== null
                        ? this.state.SyllabusName
                        : ""
                    }
                    onChange={this.onChangeHandler}
                  />
                </div>
                <div className="syllabusCode">
                  <label className="mr-2" htmlFor="SyllabusCode">
                    Code:
                  </label>
                  <p>{this.state.SyllabusCode}</p>
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
                  <GeneralCreate
                    data={{
                      Level: this.state.Level,
                      AttendeeNumber: this.state.AttendeeNumber,
                      TechReq: this.state.TechReq,
                      CourseObj: this.state.CourseObj,
                    }}
                    onChangeHandlerGeneral={this.onChangeHandlerGeneral}
                    onEditorStateChange={this.onEditorStateChange}
                  />
                ) : this.state.menuCurrent === "Outline" ? (
                  <OutlineCreate
                    outLineData={this.state.outLineData}
                    changeCollapse={this.changeCollapse}
                    handleAdd={this.handleAdd}
                    onChangeUnitNameHandler={this.onChangeUnitNameHandler}
                    onChangeValueContent={this.onChangeValueContent}
                    onChangeTrainingMaterialValue={
                      this.onChangeTrainingMaterialValue
                    }
                    handleDeleteContentOfDay={this.handleDeleteContentOfDay}
                  />
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
                  func: this.saveAsDraft,
                  indexDay: null,
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
