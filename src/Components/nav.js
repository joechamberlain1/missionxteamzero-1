import React from "react";
import star from "../img/logo.png";
import flagnz from "../img/nz.jpg";
import flagmaori from "../img/maori.jpg";
import { Link } from "react-router-dom";
import "../CSS/nav.css";
import SimpleModal from './LoginModal.js'

function Nav() {
  return (
    <div className="topNav">

      <div className="topLogo">
        <img src={star} className="star" alt="starlogo" />
      </div>

      <div className="topNavLinks">

          <ul>

            <li className="a1"> <Link to="/">HOME</Link> </li>

            <li className="a1"> <Link to="/">FEATURES</Link> </li>
            
            <li className="a1"><Link to="/teacherpro">TEACHERS</Link> </li>

          </ul>
        

      </div>

      <div className="topNavUser">
        <div className="leftsidenav">
          
          <div className="topFlagLang">
            <p className="lang1">
              LANG: <img src={flagnz} alt="NZ Flag" />  <img src={flagmaori} alt="Maori Flag" />
            </p>
          </div>  

          <div className="topNavLogin">
            <SimpleModal /></div>
         
        </div>


          
        </div>
    </div>
  );
}

export default Nav;
