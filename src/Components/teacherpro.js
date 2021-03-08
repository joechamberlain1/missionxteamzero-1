import React from "react";
import "../CSS/teacherpro.css";

import TopNav2 from "./TopNavPart2";
import MainFooter2 from "./Footer2";
import TeacherLNav from "./TeacherLNav";
import Tavitar from "./tavitar";


function Teacherpro() {
  return (
    <div className="teacherpro-body">

    <TopNav2 />

      <div className="teacherbody">


          <div className="left-side">


            <div className="leftnav">
            <Tavitar/>

            </div>

            <div class="list-group">

            <TeacherLNav/>

            </div>


          </div>
        


          <div className="rightSide-Body">
          
           
                 

          </div>
      
      
      
      </div>
    <MainFooter2 />
    </div>
























  );
}

export default Teacherpro;
