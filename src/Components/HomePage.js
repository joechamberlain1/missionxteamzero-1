import React from "react";
import Nav from "./nav";
import Hsec1 from "./hsec1";
import Hsec2 from "./hsec2";
import Hsec3 from "./hsec3";
import Hsec4 from "./hsec4";
import "../App.css";
import { Route, Link, Switch } from "react-router-dom";
import MainFooter from "./Footer";
import ProfilePage from "./ProfilePage";


function HomePage() {
  return (
    <div className="App">
      <Nav />
      <Hsec1 />
      <Hsec2 />
      <Hsec3 />
      <Hsec4/>
      <div className="page-container">
      <div className="content-wrap">
      </div>
      <MainFooter />
      </div>
    </div>

    /*
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/projects" component={Projects}/>
      <Route exact path="/contact" component={Contacts}/>

      this is was inside the return function
    */
  );

}

export default HomePage;
