import React from 'react';
import '../CSS/hsec3.css';
import pxt1 from '../img/11.png';
import pxt2 from '../img/22.png';
import pxt3 from '../img/33.png';
import pxt4 from '../img/44.png';

function Hsec3() {
    return (

        <div className="sec3">
            <div className="sec31">
                <h2> Teaching kids programming and
                digital skills is MORE than just
                        writing code. </h2>

                <img src={pxt1} className="pxt" />
                <img src={pxt2} className="pxt" />
                <img src={pxt3} className="pxt" />
                <img src={pxt4} className="pxt" />
            </div>

          

            <div className="sec32">
                <h2> How our programme helps teachers and schools </h2>
                <ul>
                    <li>
                        <a href="#" className="a11"> LEARNING PATHWAYS </a>
                    </li>
                    <li>
                        <a href="#" className="a11"> DIGITAL TECHNOLOGIES </a>
                    </li>
                    <li>
                        <a href="#" className="a12"> KEY COMPETENCIES </a>
                    </li>
                    <li>
                        <a href="#" className="a11"> IR4.0 </a>
                    </li>
                </ul>
            </div>
        </div>




    );
}

export default Hsec3;