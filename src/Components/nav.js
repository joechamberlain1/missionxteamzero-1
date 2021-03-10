import React from "react";
import star from "../img/logo.png";
import flagnz from "../img/nz.jpg";
import flagmaori from "../img/maori.jpg";
import { Link } from "react-router-dom";
import "../CSS/nav.css";
import LogInModal from './LoginModal.js'
import SignUpModal from './SignUpModal.js'

function Nav() {
  return (
    <div className="topNav">

      <div className="topLogo">
        <img src={star} className="star" alt="starlogo" />
      </div>

      <div className="topNavLinks">




        <nav>
          <ul>






            <li>
                <a href="#" className="a1">
                <Link to="/">HOME</Link></a>
            </li>
            <li>
            <a href="#" className="a1">
                FEATURES{" "}
              </a>         
            </li>
            <li>
            <a href="#" className="a1">
              <Link to="/teacherpro">TEACHERS</Link>{" "}
              {/* I'm using this to navigate to my Teacher Progress page - Ofa */}
              </a>
            </li>





          </ul>
        </nav>
      </div>

      <div className="topNavUser">
        <div>
          <div className="topNavLogin">
            <p>
            <a href="#" className="a1">
                {/* <Link to="/login">
                
                <i class="fa fa-user-circle" aria-hidden="true"></i>
                {" "}
                REGISTER | LOGIN 
                </Link> 
                
                have left the original in for now whilst I'm changing it on LoginModal page*/}
                <Link type="button" >
                  {/* this needs to be changed to suit the previous page */}
                  <i class="fa fa-user-circle" aria-hidden="true"></i>
                  {" "}
                </Link>
                <Link type="button" ><SignUpModal /></Link>
                <Link type="button" ><LogInModal /></Link>


              
                </a>            
                </p>
          </div>
        </div>

        <div>
          <div className="topFlagLang">
            <p>
              LANG: <img src={flagnz} alt="NZ Flag" />{" "}
              <img src={flagmaori} alt="Maori Flag" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
