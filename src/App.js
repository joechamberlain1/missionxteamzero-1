import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Checkboxes from "./Components/checkbox";
import Helpt from "./Components/helpT";
import HomePage from "./Components/HomePage";
import ImageAvatars from "./Components/ImageAvatars";
import StudentProfileGrid from "./Components/StudentProfileGrid";
import Teacher1 from "./Components/teacher1";
import Teacher2 from "./Components/teacher2";
import Teacherpro from "./Components/teacherpro.js";
import Teacherstu from "./Components/teacherstu";
import TeacherStudentProfilePart1 from "./Components/TeacherStudentProfilePart1";
import LogIn from "./joe/Login";
import SignUp from "./joe/SignUp.js";
import StudentProjectLib from "./joe/StudentProjectLib.js";
import ProfilePage from "./ProfilePage/ProfilePage";
import LearningPg from "./Project/learning";

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
      <Route exact path="/Project/learning" component={LearningPg} />

      <Route exact path="/StudentProfileGrid" component={StudentProfileGrid} />
      <Route
        exact
        path="/TeacherStudentProfilePart1"
        component={TeacherStudentProfilePart1}
      />
    </div>
  );
}

export default App;
