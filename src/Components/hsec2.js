import React from 'react';

import pxt1 from '../img/pxt1.png';
import pxt2 from '../img/pxt2.png';
import pxt3 from '../img/pxt3.png';
import pxt4 from '../img/pxt4.png';
import project1 from '../img/project1.png';


import '../CSS/hsec2.css'; 

function Hsec2() {
  return (
    <div className="sec21">

        <div className="sec22">

          <h2> What we offer </h2>
          <p className="psec1">
            The Creative Problem Solving programme is series of digital creation projects
            aimed to encourage self-motivation and student agency, designed by New Zealand's
            leading IT industry experts and schools.
        <br></br>
          </p>

          <h3> What will students create? </h3>
          <img src={pxt1} className="pxt" />
          <img src={pxt2} className="pxt" />
          <img src={pxt3} className="pxt" />
          <img src={pxt4} className="pxt" />
        </div>
      
        <div className="sec22">
          <img src={project1} className="project1" />

        </div>

      
    

    










     
    </div>



    

  );
}

export default Hsec2;