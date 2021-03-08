import React from 'react';
import Nav from './nav.js';
import '../CSS/StudentProjectLib.css';
import project1 from '../img/Project -1@2x.jpg';
import project2 from '../img/Project -2@2x.jpg';
import project3 from '../img/Project -3@2x.jpg';
import project4 from '../img/Project -4@2x.jpg';
import project5 from '../img/Project -5@2x.jpg';
import project6 from '../img/Project -6@2x.jpg';
// import { Link } from 'react-router-dom';


function StudentProjectLib() {
    return (
        <div className="StudentProjectLibrary">
            <Nav />
            <div className='MainPage'>

                <div className='ProjectSideBar'> {/*sidebar container */}

                    <div className="TableHeader">
                        <tr>
                            <th>Subscription</th>
                        </tr>
                        <tr>
                            <label className="checkbox">
                                    <input type='checkbox' checked='checked' />
                                <span className='checkmark'>Free</span>
                            </label>
                        </tr>
                        <tr>
                            <label className="checkbox">
                                    <input type='checkbox' />
                                <span  className='checkmark'>Premium</span>
                            </label>
                        </tr>

                        <tr>
                            <th>Activity Type</th>
                        </tr>
                        <tr>
                            <label className="checkbox">
                                    <input type='checkbox' />
                                <span  className='checkmark'>Animation</span>
                            </label>
                        </tr>
                        <tr>
                            <label className="checkbox">
                                    <input type='checkbox' checked='checked' />
                                <span  className='checkmark'>Game</span>
                            </label>
                        </tr>
                        <tr>
                            <label className="checkbox">
                                    <input type='checkbox' />
                                <span className='checkmark'>Chatbot</span>
                            </label>
                        </tr>
                        <tr>
                            <label className="checkbox">
                                    <input type='checkbox' />
                                <span className='checkmark'>Augmented Reality</span>
                            </label>
                        </tr>

                        <tr>
                            <th>Year Level</th>
                        </tr>
                        <tr>
                            <label className="checkbox">
                                    <input type='checkbox' checked='checked' />
                                <span className='checkmark'>1-4</span>
                            </label>
                        </tr>
                        <tr>
                            <label className="checkbox">
                                    <input type='checkbox' />
                                <span className='checkmark'>5-6</span>
                            </label>
                        </tr>
                        <tr>
                            <label className="checkbox">
                                    <input type='checkbox' />
                                <span className='checkmark'>7-8</span>
                            </label>
                        </tr>
                        <tr>
                            <label className="checkbox">
                                    <input type='checkbox' />
                                <span className='checkmark'>9-13</span>
                            </label>
                        </tr>

                        <tr>
                            <th>Subject Matter</th>
                        </tr>
                        <tr>
                            <label className="checkbox">
                                    <input type='checkbox' checked='checked' />
                                <span className='checkmark'>Computer Science</span>
                            </label>
                        </tr>
                        <tr>
                            <label className="checkbox">
                                    <input type='checkbox' />
                                <span className='checkmark'>Maths</span>
                            </label>
                        </tr>
                        <tr>
                            <label className="checkbox">
                                    <input type='checkbox' />
                                <span className='checkmark'>Science</span>
                            </label>
                        </tr>
                        <tr>
                            <label className="checkbox">
                                    <input type='checkbox' />
                                <span className='checkmark'>Language</span>
                            </label>
                        </tr>
                        <tr>
                            <label className="checkbox">
                                    <input type='checkbox' />
                                <span className='checkmark'>Art</span>
                            </label>
                        </tr>
                        <tr>
                            <label className="checkbox">
                                    <input type='checkbox' />
                                <span claclassNamess='checkmark'>Music</span>
                            </label>
                        </tr>

                    </div>
                </div>
                <div className='ProjectContainer'>

                    <div className='ProjectLibText'>

                        <h1>Projects</h1>
                        <p>This is where all the project pictures will go</p>

                        <div className='LeftButtonContainer'>
                            <button className="ProjectButton">beginner</button>
                            <button className="ProjectButton">Intermediate</button>
                            <button className="ProjectButton">Advanced</button>
                        </div>

                        <div className='RightButtonContainer'>
                            Show: 
                            <button className="ProjectButton">25</button>
                            <button className="ProjectButton">50</button>
                            <button className="ProjectButton">100</button>
                        </div>

                    </div>
                    <div className="ProjectGallery">
                        <div className='ProjectPic1'>
                            <img src={project1} className='ProjectPic1' alt="Project 1" />
                            <h3>Introduction</h3><p>BEGINNER | Animation</p>
                        </div>
                        <div className='ProjectPic2'>
                            <img src={project2} className='ProjectPic2' alt="Project 2" />
                            <h3>My Birthday</h3><p>BEGINNER | Animation</p>
                        </div>
                        <div className='ProjectPic3'>
                            <img src={project3} className='ProjectPic3' alt="Project 3" />
                            <h3>10 Block Challenge</h3><p>BEGINNER | Animation</p>
                        </div>
                        <div className='ProjectPic4'>
                            <img src={project4} className='ProjectPic4' alt="Project 4" />
                            <h3>Build a Band</h3><p>BEGINNER | Animation</p>
                        </div>
                        <div className='ProjectPic5'>
                            <img src={project5} className='ProjectPic5' alt="Project 5" />
                            <h3>The bear and the monkey</h3><p>Project5</p>
                        </div>
                        <div className='ProjectPic6'>
                            <img src={project6} className='ProjectPic6' alt="Project 6" />
                            <h3>Debugging</h3><p>BEGINNER | Animation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default StudentProjectLib