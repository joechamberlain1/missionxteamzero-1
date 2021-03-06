import React from "react";
import "../CSS/teacherpro.css";

import star from "../img/logo.png";
import flagnz from "../img/nz.jpg";
import flagmaori from "../img/maori.jpg";
import teachid from "../img/teacherpro.png";
import studentimg from "../img/std.PNG";


function Teacherpro() {
  return (
    <div className="teacherpro-body">

      <div className="topNav2">
        {/*Logo */}
        <div className="topLogo2">
          <img src={star} className="star" alt="starlogo" />
        </div>
        {/*nz flag and maori flag */}
        <div className="topFlagLang2">
          <p>
            <img src={flagnz} alt="NZ Flag" />{" "}
            <img src={flagmaori} alt="Maori Flag" />
          </p>
        </div></div>



      <div className="teacherbody">


          <div className="left-side">


            <div className="leftnav">
              <img src={teachid} className="teacherprofile" alt="teacherprofile" />

            </div>

            <div class="list-group">

              <div className="listbk">
                <a class="a2" href="#"><i class="fa fa-pencil fa-fw" aria-hidden="true"></i>&nbsp; PROGRESS TRACKER</a>
              </div>
              <div className="listbk">
                <br></br>
                <a class="a2" href="#"><i class="fa fa-pencil fa-fw" aria-hidden="true"></i>&nbsp; STUDENT PROFILE</a>
              </div>
              <div className="listbk">
                <br></br>
                <a class="a2" href="#"><i class="fa fa-pencil fa-fw" aria-hidden="true"></i>&nbsp; HELP REQUEST</a>
              </div>
              <div className="listbk">
                <br></br>
                <a class="a2" href="#"><i class="fa fa-pencil fa-fw" aria-hidden="true"></i>&nbsp; PROTECT SUBMISSIONS</a>
              </div>
              <div className="listbk">
                <br></br>
                <a class="a2" href="#"><i class="fa fa-pencil fa-fw" aria-hidden="true"></i>&nbsp; PROTECT LIBRARY</a>
              </div>

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



































      <footer>
      
      <p className="footer2"> &#169; LevelUp Works 2020 </p>
   
      </footer>
     

    </div>
























  );
}

export default Teacherpro;
