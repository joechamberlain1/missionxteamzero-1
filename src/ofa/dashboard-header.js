import React from "react";
import "../ofa/css/TopNavPart2.css";

import star from "../img/logo.png";
import flagnz from "../img/nzflag.png";
import flagmaori from "../img/maoriflag.png";

function DashboardHeader() {
  return (
    <div className="topNav2">
      {/*Logo */}
      <div className="topLogo2">
        <img src={star} className="star" alt="starlogo" />
      </div>
      {/*nz flag and maori flag */}
      <div className="topFlagLang2">
        <img src={flagnz} alt="NZ Flag" />{" "}
        <img src={flagmaori} alt="Maori Flag" />
      </div>
    </div>
  );
}

export default DashboardHeader;
