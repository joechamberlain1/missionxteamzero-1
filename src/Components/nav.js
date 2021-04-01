import React from "react";
import star from "../img/logo.png";
import flagnz from "../img/nzflag.png";
import flagmaori from "../img/maoriflag.png";
import { Link } from "react-router-dom";
import "../CSS/nav.css";
import LogInModal from "../LogInSignUp/LogInModal";
import SignUpModal from '../LogInSignUp/SignUpModal';


function Nav() {
  return (
    <div className="topNav">
      <div className="topLogo">
        <img src={star} className="star" alt="starlogo" />
      </div>

      <div className="topNavLinks">
        <ul>
          <li>
            <Link to="/" className="a1">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/" className="a1">
              FEATURES
            </Link>
          </li>

          <li>
            <Link to="/" className="a1">
              TEACHERS
            </Link>
          </li>
        </ul>
      </div>

      <div className="topNavUser">
        <div>
          <div className="topFlagLang">
            <p className="p1">
              LANG: <img src={flagnz} alt="NZ Flag" />{" "}
              <img src={flagmaori} alt="Maori Flag" />
            </p>
          </div>
        </div>

        <div>
          <div className="topNavLogin">
            <Link className="a2">
              <SignUpModal />
            </Link>

            <Link className="a2">
              <LogInModal />
            </Link>

            {/* have changed these in order to suit the modal functions  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
