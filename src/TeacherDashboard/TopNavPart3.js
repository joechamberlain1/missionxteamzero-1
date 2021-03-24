import React from "react";
import "./TopNavPart3Style.css";

import star from "../img/project-icons/Header2Logo.png";
import flagnz from "../img/nzflag.png";
import flagmaori from "../img/maoriflag.png";

function TopNav3() {
  return (
    <div className="topNav3">
      {/*Logo */}
      <div className="topLogo3">
        <img src={star} alt="starlogo" />
      </div>
      {/*nz flag and maori flag */}
      <div className="topFlagLang3">
        <img src={flagnz} alt="NZ Flag" />
        <img src={flagmaori} alt="Maori Flag" />
      </div>
    </div>
  );
}

export default TopNav3;
