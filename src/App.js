import React from "react";
import Nav from "./nav";
import Hsec1 from "./hsec1";
import Hsec2 from "./hsec2";
import Hsec3 from "./hsec3";
import "./App.css";
// import { Route, Link } from "react-router-dom";
import MainFooter from "./CSS/Footer.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hsec1 />
      <Hsec2 />
      <Hsec3 />
      <MainFooter />
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

export default App;
