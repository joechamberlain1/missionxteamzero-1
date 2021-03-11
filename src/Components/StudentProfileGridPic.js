import React from "react";
import ProfilePic from "../img/profilepicplaceholder.png";
import "../CSS/StudentProfileGrid.css";

function StudentProfileGridPic() {
  return (
    <div className="student-profile-pic">
      <img
        className="student-profile-pic"
        src={ProfilePic}
        alt="profileplaceholder"
      />
    </div>
  );
}

export default StudentProfileGridPic;
