import React from 'react';

const MainFooter () {
return (
    <div className="main-footer">
        <div className="container">
            <div className='row'>
            {/* Column1 */}
                <div className="Col">
                    <h4>COMPANY</h4>
                        <ul className="list-unstyled">
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Partners</li>
                        </ul>
                </div>

            {/* Column2 */}
            <div className="Col">
                    <h4>COURSES</h4>
                        <ul className="list-unstyled">
                        <li>Register</li>
                        <li>Login</li> {/*Once website is functioning, we should link these to whatever web pages we have live. Login / Register is one of them */}
                        <li>Projects</li>
                        <li>Teachers</li>
                        <li>Parents</li>
                        <li>Resources</li>
                        </ul>
                </div>
            {/* Column3 */}
            <div className="Col">
                    <h4>SUPPORT</h4>
                        <ul className="list-unstyled">
                        <li>FAQs</li>
                        <li>Helpdesk</li>
                        <li>Contact Us</li>
                        </ul>
                </div>

                         {/* Column4 */}
            <div className="Col">
                    <h4>LEGAL</h4>
                        <ul className="list-unstyled">
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        </ul>
                </div>

                <div className="LevelUpWorksText">
                    <h4>LevelUp Works</h4>
                    <p>LevelUp Works is an Auckland-based enterprise dedicated to developing game-based learning software to help teachers
                    in response to the New Zealand Digital Technologies & Hangarau Matchiko.
                    alan@levelupworks.com
                    (021) 668 185
                    </p>
                </div>
            </div>
        </div>
    </div>
);
}

expect default MainFooter;