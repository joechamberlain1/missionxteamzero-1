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

import Checkboxes from "./ofa/checkbox";
import Helpt from "./ofa/help-request";
import Teacher1 from "./ofa/progress-tracker";
import Teacher2 from "./ofa/teacher2";
import DashboardProgress from "./ofa/dashboard-progress";
import DashboardHelp from "./ofa/dashboard-help";
import TeacherDashboardTest from "./ofa/dashboard";


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/ProfilePage" component={ProfilePage} />
      <Route exact path="/Login" component={LogIn} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/StudentProjectLib" component={StudentProjectLib} />
      <Route exact path="/dashboard-progress" component={DashboardProgress} />
      <Route exact path="/progress-tracker" component={Teacher1} />
      <Route exact path="/teacher2" component={Teacher2} />
      <Route exact path="/help-request" component={Helpt} />
      <Route exact path="/ImageAvatars" component={ImageAvatars} />
      <Route exact path="/checkbox" component={Checkboxes} />
      <Route exact path="/dashboard-help" component={DashboardHelp} />
      <Route exact path="/dashboard" component={TeacherDashboardTest} />
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
