import React from "react";
import Nav from "./Components/nav";
import Hsec1 from "./Components/hsec1";
import Hsec2 from "./Components/hsec2";
import Hsec3 from "./Components/hsec3";
import Hsec4 from "./Components/hsec4";
import "./App.css";
// import { Route, Link } from "react-router-dom";
import MainFooter from "./Components/Footer";


function App() {
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

export default App;
