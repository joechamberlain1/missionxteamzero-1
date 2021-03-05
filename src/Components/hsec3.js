import React from 'react';
import '../CSS/hsec3.css';
import pxt1 from '../img/11.png';
import pxt2 from '../img/22.png';
import pxt3 from '../img/33.png';
import pxt4 from '../img/44.png';

function Hsec3() {
    return (

        <div className="sec3">

                    <h2> Teaching kids programming and
                    digital skills is MORE than just
                        writing code. </h2>

                    <img src={pxt1} className="pxt" />
                    <img src={pxt2} className="pxt" />
                    <img src={pxt3} className="pxt" />
                    <img src={pxt4} className="pxt" />
                

           
        </div>
    );
}

export default Hsec3;