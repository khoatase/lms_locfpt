import React, { useState } from "react";
import ProcessCreate from "../../components/ProcessCreate";
import "./styles/style.css";

const initialDateProcess = ["General", "Outline", "Other", "Done"];

const CreateSyllabus = () => {
  const [indexProcess, setIndexProcess] = useState(1);
  return (
    <div className="createSyllabus">
      <div className="createHeader">
        <h1 className="titleCreateSyll">Syllabus</h1>
        <ProcessCreate data={initialDateProcess} indexProcess={indexProcess} />
      </div>
    </div>
  );
};

export default CreateSyllabus;
