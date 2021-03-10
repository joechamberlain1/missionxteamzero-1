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
import Teacher1 from "./Components/teacher1";
import Teacher2 from "./Components/teacher2";
import Helpt from "./Components/helpT";
import ImageAvatars from "./Components/ImageAvatars";
import Checkboxes from "./Components/checkbox";
import Teacherstu from "./Components/teacherstu";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/ProfilePage" component={ProfilePage} />
      <Route exact path="/Login" component={LogIn} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/StudentProjectLib" component={StudentProjectLib} />
      <Route exact path="/teacherpro" component={Teacherpro} />
      <Route exact path="/teacher1" component={Teacher1} />
      <Route exact path="/teacher2" component={Teacher2} />
      <Route exact path="/helpT" component={Helpt} />
      <Route exact path="/ImageAvatars" component={ImageAvatars} />
      <Route exact path="/checkbox" component={Checkboxes} />
      <Route exact path="/teacherstu" component={Teacherstu} />
      <Route
        exact
        path="/TeacherStudentProfilePart1"
        component={TeacherStudentProfilePart1}
      />
    </div>

  );
}

export default App;
