import React from "react";
import Nav from "./nav";
import Hsec1 from "./hsec1";
import Hsec2 from "./hsec2";
import Hsec3 from "./hsec3";

import Hsec5 from "./hsec5";
import Hsec6 from "./hsec6";
import "../App.css";
import MainFooter from "./Footer";



function HomePage() {
  return (
    <div className="App">
      <Nav />
      <Hsec1 />
      <Hsec2 />
      <Hsec3 />
      
      <Hsec5/>
      <Hsec6/>
      <div className="page-container">
      <div className="content-wrap">
      </div>
      <MainFooter />
      </div>
    </div>
  );

}

export default HomePage;
