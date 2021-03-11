import React from "react";
import "../CSS/StudentProfileGrid.css";
import StudentProfileGridPic from "./StudentProfileGridPic";

function StudentProfileGrid() {
  return (
    <div className="MainReusableSmallContainer">
      <StudentProfileGridPic />
      <p>Student Name Function</p>
    </div>
  );
}

export default StudentProfileGrid;
