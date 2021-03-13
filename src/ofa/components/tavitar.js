import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import teachid from "../img/teacherpro.png";
import "../css/tavitar.css";



function Tavitar() {
   
  
    return (
      <div  className="defAvatar" >
        <Avatar alt="Remy Sharp" src={teachid} />
      </div>
    );
  }
export default Tavitar;