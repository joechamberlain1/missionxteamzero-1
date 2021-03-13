import React from "react";
import "../ofa/css/learning.css";
import { Link } from "react-router-dom";
import { ProIcons } from "./components/icons";
import Tavitar from "./components/tavitar";
import openicon from "../ofa/img/open.png";
import closeicon from "../ofa/img/close.png";


function LeftNavL2() {

  return (
    <div className="mainL">
              
                <Tavitar />

                {/*left-side menu */}
                {ProIcons.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}


                
                {/* open button */}     
                <div className="arrowopen">
                  <Link to="#"><img src={openicon} /></Link>
                </div>
          
    
    </div>
  
  
  
  
  
  
  
  
  );
}

export default LeftNavL2;
