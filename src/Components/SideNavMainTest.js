import React from "react";
import SideNavTest from "./SideNavTest";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Teacherpro from "./teacherpro.js";
import TeacherStudentProfile from "./TeacherStudentProfilePart1";
import HomePage from "./HomePage";

function SideNavMainTest() {
  return (
    <div>
      <Router>
        <SideNavTest />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/teacherpro" component={Teacherpro} />
          <Route
            exact
            path="/teacherstudentprofile"
            component={TeacherStudentProfile}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default SideNavMainTest;
