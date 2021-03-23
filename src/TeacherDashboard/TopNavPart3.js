import React from "react";
import "./TopNavPart3Style.css";

import star from "../img/logo.png";
import flagnz from "../img/nz.jpg";
import flagmaori from "../img/maori.jpg";

function TopNav3() {
  return (
    <div className="topNav3">
      {/*Logo */}
      <div className="topLogo3">
        <img src={star} alt="starlogo" />
      </div>
      {/*nz flag and maori flag */}
      <div className="topFlagLang3">
        <img src={flagnz} alt="NZ Flag" />{" "}
        <img src={flagmaori} alt="Maori Flag" />
      </div>
    </div>
  );
}

export default TopNav3;
