import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ProfilePage from "./Components/ProfilePage";
import LogIn from "./Components/Login";
import StudentProjectLib from "./Components/StudentProjectLib.js";
import SignUp from "./Components/SignUp.js";
import Teacherpro from "./Components/teacherpro.js";
import TeacherStudentProfilePart1 from "./Components/TeacherStudentProfilePart1";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/ProfilePage" component={ProfilePage} />
      <Route exact path="/Login" component={LogIn} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/StudentProjectLib" component={StudentProjectLib} />
      <Route exact path="/teacherpro" component={Teacherpro} />
      <Route
        exact
        path="/TeacherStudentProfilePart1"
        component={TeacherStudentProfilePart1}
      />
    </div>

  );
}

export default App;
