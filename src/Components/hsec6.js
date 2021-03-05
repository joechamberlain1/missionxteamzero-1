import React from 'react';
import '../CSS/hsec6.css';
import project1 from '../img/class.png';


function Hsec6() {
    return (
        <div className="hsec61">



            <div className="sec61">
                <img src={project1} className="class1" />
            </div>


            <div className="sec62">
                <h2> What are you waiting for? </h2>
                <h3> Start teaching Digital Technologies today. </h3>

                <p> If you need more information, we are happy to answer any questions you may have.
                </p>

                <button className='b1'>ENQUIRE NOW</button>
                <button className='b2'>SIGN UP</button>


            </div>
            

            
        </div>

    );
}

export default Hsec6;