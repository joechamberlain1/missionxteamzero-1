import React from "react";
import star from "../img/logo.png";
import flagnz from "../img/nz.jpg";
import flagmaori from "../img/maori.jpg";
import { Link } from "react-router-dom";
import "../CSS/nav.css";
// import ModalFunction from '../joe/modalfunction.js'
//these will need to be the modal parts for the home page -joe
// import LogInModal from '../joe/LoginModal.js'
// import SignUpModal from '../joe/SignUpModal.js'

function Nav() {
  
  return (
    <div className="topNav"> 

      <div className="topLogo">
        <img src={star} className="star" alt="starlogo" />
      </div>

      <div className="topNavLinks">

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
                TEACHERS{" "}
              </a>  
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
                    
                    <a href="#" className="a2">
                    
                    
                        <Link to="/SignUp">
                          
                          
                        <i class="fa fa-user-circle" aria-hidden="true"></i>{" "}
                          REGISTER
                        </Link> 
                    </a>

                    <a href="#" className="a2">
                      
                      
                        <Link to='/Login'>
                        
                        {" | "}
                           LOGIN 
                        </Link> 
                    </a>                

                    {/* <ModalFunction /> */}
                        
                  </div>
              </div>


      </div>
    </div>
  );
}

export default Nav;
