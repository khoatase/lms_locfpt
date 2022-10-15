import React, { Component } from "react";

export class PopupTrainingMaterial extends Component {
  render() {
    const {
      outLineData,
      handleClosePopupTraining,
      indexShowPopup,
      onChangeTrainingMaterialValue,
    } = this.props;
    const { indexDay, indexUnit, indexContent } = indexShowPopup;
    return (
      <div className="popup">
        <div className="popup_inner trainingpop">
          <div className="flex headertrain">
            <p
              style={{
                fontWeight: 700,
              }}
            >
              {outLineData[indexDay].day}
            </p>
            <p className="btnClose" onClick={handleClosePopupTraining}>
              x
            </p>
          </div>
          <div>
            <div className="unitTraining">
              <p>Unit 5</p>
              <p>{outLineData[indexDay].unit[indexUnit].unitName}</p>
            </div>
            <div className="trainingDetails">
              <p>
                {
                  outLineData[indexDay].unit[indexUnit].contents[indexContent]
                    .ContentName
                }
              </p>
              <div>
                {/* {
                    outLineData[indexDay].unit[indexUnit].contents[indexContent].trainingMaterials.map((item,index) => {

                    })
                } */}
                <div className="flex">
                  <p
                    style={{
                      width: "50%",
                    }}
                  >
                    .Net Introduction overview.pdf
                  </p>
                  <p>By Joseph on 12/3/2012</p>
                  <img
                    src="./icons8-delete-48.png"
                    alt="a"
                    style={{
                      width: 30,
                      height: 30,
                      margin: "0 10px",
                    }}
                  />
                  <img
                    src="./icons8-edit-30.png"
                    alt="b"
                    style={{
                      width: 30,
                      height: 30,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <label className="btnUploadNew" htmlFor="fileAva">
                Upload new
              </label>
              <input
                style={{
                  display: "none",
                }}
                type="file"
                accept=".doc,.docx,application/pdf"
                id="fileAva"
                onChange={(e) => {
                  onChangeTrainingMaterialValue(e);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopupTrainingMaterial;
