import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import HomePage from "./Components/HomePage";
import ImageAvatars from "./Components/ImageAvatars";
import StudentProfileGrid from "./Components/StudentProfileGrid";
import TeacherStudentProfilePart1 from "./Components/TeacherStudentProfilePart1";
import ProfilePage from "./ProfilePage/ProfilePage";


import LogIn from "./joe/Login";
import SignUp from "./joe/SignUp.js";
import StudentProjectLib from "./joe/StudentProjectLib.js";
import ProjectBuilderSideBar from './joe/ProjectBuilderSideBar';
import StudentProjectBuilder from './joe/StudentProjectBuilder';



import HelpRequest from "./ofa/help-request";
import ProgressTracker from "./ofa/progress-tracker";
import DashboardProgress from "./ofa/dashboard-progress";
import DashboardHelp from "./ofa/dashboard-help";
import Checkboxes from "./ofa/checkbox";
import RadioButton from "./ofa/radio-button";


import LeftNavL2 from "./ofa/leftNavLayout2";


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/ProfilePage" component={ProfilePage} />
      <Route exact path="/Login" component={LogIn} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/StudentProjectLib" component={StudentProjectLib} />
      <Route exact path="/dashboard-progress" component={DashboardProgress} />
      <Route exact path="/progress-tracker" component={ProgressTracker} />
      <Route exact path="/radio-button" component={RadioButton} />
      <Route exact path="/help-request" component={HelpRequest} />
      <Route exact path="/ImageAvatars" component={ImageAvatars} />
      <Route exact path="/checkbox" component={Checkboxes} />
      <Route exact path="/dashboard-help" component={DashboardHelp} />
      <Route exact path="/leftNavLayout2" component={LeftNavL2} />
      <Route exact path="/ProjectBuilderSideBar" component={ProjectBuilderSideBar} />
      <Route exact path="/StudentProfileGrid" component={StudentProfileGrid} />
      <Route
        exact
        path="/TeacherStudentProfilePart1"
        component={TeacherStudentProfilePart1}
      />
      <Route exact path="/StudentProjectBuilder" component ={StudentProjectBuilder} />
    </div>
  );
}

export default App;
