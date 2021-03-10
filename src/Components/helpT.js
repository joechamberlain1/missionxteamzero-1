import React from "react";
import Avatar from '@material-ui/core/Avatar';

import "../CSS/teacher1.css";
import Nav from "./nav.js";
import AIDEN from "../img/AIDEN.png"

function Helpt() {
  return (
    <div>
      <Nav />
      <div className="divt1">

        <div className="divt2">


         
        <div className="divt3">
            <div className="col2">
                <div>
                <h4 className="c1">HELP REQUESTS</h4>
                </div>
                <div className="col2">
                <h4 className="c2">REPLY</h4>
                <h4 className="c2">MARK AS DONE</h4>
                </div>

            </div >

            <div className="divt41">
                <div className="divt5">
                  <Avatar alt="Aiden" src={AIDEN}/>
                  <p className="mp1">AIDEN needs help with his project.</p>
                  <p className="mp2">TUE 28 April 2020</p>

                  
                </div>
            </div>

          

            
          
          
          
          </div>
        </div>
      </div>
   
    </div>
  );
}

export default Helpt;