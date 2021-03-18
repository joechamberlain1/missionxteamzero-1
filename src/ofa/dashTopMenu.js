import React from "react";
import "../ofa/css/dashTopMenu.css";

import star from "../ofa/img/logo.png";
import flagnz from "../ofa/img/nz.jpg";
import flagmaori from "../ofa/img/maori.jpg";

function TopNav3() {
  return (
    <div className="dashTopNav">
      
      
      {/*Logo */}
      <div className="dashTopLogo">
        <img src={star} alt="starlogo" />
      </div>
      
      
      {/*Links Buttons */}
      <div className="topButtons">
        <button className="btTake"> Take Screenshot </button>
        <button className="btHelp"> Help Centre </button>
        <button className="btMore"> More Projects </button>

      </div>



      {/*nz flag and maori flag */}
      <div className="dashTopFlag">
        <img src={flagnz} alt="NZ Flag" />{" "}
        <img src={flagmaori} alt="Maori Flag" />
      </div>






    </div>
  );
}

export default TopNav3;
