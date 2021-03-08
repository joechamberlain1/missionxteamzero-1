import React from "react";
import "../CSS/teacherpro.css";

import star from "../img/logo.png";
import flagnz from "../img/nz.jpg";
import flagmaori from "../img/maori.jpg";
import teachid from "../img/teacherpro.png";
import studentimg from "../img/std.png";
import TopNav2 from "./TopNavPart2";
import MainFooter2 from "./Footer2";
import TeacherLNav from "./TeacherLNav";



function Teacherpro() {
  return (
    <div className="teacherpro-body">

<TopNav2 />



      <div className="teacherbody">


          <div className="left-side">


            <div className="leftnav">
              <img src={teachid} className="teacherprofile" alt="teacherprofile" />

            </div>

            <div class="list-group">

            <TeacherLNav/>

            </div>


          </div>
        


          <div className="right-side">
          
            <div>
                  <div>    <h3 className="h31"> BEGINNER COURSE</h3>
                  
                  </div>

                  <div className="studentname">
                  <img src={studentimg} />

                  </div>
                  
            
            </div>

          
          </div>

        










      </div>





























<MainFooter2 />
     

    </div>
























  );
}

export default Teacherpro;
