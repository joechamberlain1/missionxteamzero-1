import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const MainFooter = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="Col">
            <h4>COMPANY</h4>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Careers</li>
              <li>Partners</li>
              <li>
                <Link to="/progress-tracker">ProgressTrackerPg</Link>{" "}
                {/* use to access to my Progress Tracker Page - Ofa */}
              </li>

              <li>
                <Link to="/help-request">HelpRequestsPg</Link>{" "}
                {/* use to access to my Help Requests Page - Ofa */}
              </li>

              <li>
                <Link to="/dashboard-progress">DashboardTest</Link>{" "}
                {/* access to my test Dashboard 1 - Ofa */}
              </li>

              <li>
                <Link to="/learning">CollapseDashboardTest</Link>{" "}
                {/* use to access to my CollapseDashboardTest page- Ofa */}
              </li>
            </ul>
          </div>

          {/* Column2 */}
          <div className="Col">
            <h4>COURSES</h4>
            <ul className="list-unstyled">
              <li>Register</li>
              <li>Login</li>{" "}
              {/*Once website is functioning, we should link these to whatever web pages we have live. Login / Register is one of them */}
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
          {/* Column5 */}
          <div className="Col">
            <h4>LevelUp Works</h4>
            <p>
              LevelUp Works is an Auckland-based enterprise dedicated to
              developing game-based learning software to help teachers in
              response to the New Zealand Digital Technologies & Hangarau
              Matchiko. alan@levelupworks.com (021) 668 185
            </p>
          </div>
          {/* Column6 */}
          <div className="Col">
            <h4>Random Test</h4>
            <ul className="list-unstyled">
              <li>
                <Link to="/profilepage">Profile Page TEST LOL</Link>{" "}
                {/* Be sure to update this properly once finalized - Johnny */}
              </li>
              <li>
                <Link to="/TeacherStudentProfilePart1">
                  Teacher Student Profile Page TEST LOL
                </Link>{" "}
                {/* Be sure to update this properly once finalized - Johnny */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
