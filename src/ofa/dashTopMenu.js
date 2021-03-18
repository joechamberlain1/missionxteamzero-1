import React from "react";
import "../ofa/css/dashTopMenu.css";

import star from "../ofa/img/logo.png";
import flagnz from "../ofa/img/nz.jpg";
import flagmaori from "../ofa/img/maori.jpg";

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
