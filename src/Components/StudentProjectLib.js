import React from 'react';
import Nav from './nav.js';
import '../CSS/StudentProjectLib.css';
import project1 from '../img/Project -1@2x.jpg';
import project2 from '../img/Project -2@2x.jpg';
import project3 from '../img/Project -3@2x.jpg';
import project4 from '../img/Project -4@2x.jpg';
import project5 from '../img/Project -5@2x.jpg';
import project6 from '../img/Project -6@2x.jpg';
import { Link } from 'react-router-dom';


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
                            <label class="checkbox">Free
                                    <input type='checkbox' checked='checked' />
                                <span class='checkmark'></span>
                            </label>
                        </tr>
                        <tr>
                            <label class="checkbox">Premium
                                    <input type='checkbox' />
                                <span class='checkmark'></span>
                            </label>
                        </tr>

                        <tr>
                            <th>Activity Type</th>
                        </tr>
                        <tr>
                            <label>Animation
                                    <input type='checkbox' />
                                <span class='checkmark'></span>
                            </label>
                        </tr>
                        <tr>
                            <label>Game
                                    <input type='checkbox' checked='checked' />
                                <span class='checkmark'></span>
                            </label>
                        </tr>
                        <tr>
                            <label>Chatbot
                                    <input type='checkbox' />
                                <span class='checkmark'></span>
                            </label>
                        </tr>
                        <tr>
                            <label>Augmented Reality
                                    <input type='checkbox' />
                                <span class='checkmark'></span>
                            </label>
                        </tr>

                        <tr>
                            <th>Year Level</th>
                        </tr>
                        <tr>
                            <label>1-4
                                    <input type='checkbox' checked='checked' />
                                <span class='checkmark'></span>
                            </label>
                        </tr>
                        <tr>
                            <label>5-6
                                    <input type='checkbox' />
                                <span class='checkmark'></span>
                            </label>
                        </tr>
                        <tr>
                            <label>7-8
                                    <input type='checkbox' />
                                <span class='checkmark'></span>
                            </label>
                        </tr>
                        <tr>
                            <label>9-13
                                    <input type='checkbox' />
                                <span class='checkmark'></span>
                            </label>
                        </tr>

                        <tr>
                            <th>Subject Matter</th>
                        </tr>
                        <tr>
                            <label>Computer Science
                                    <input type='checkbox' checked='checked' />
                                <span class='checkmark'></span>
                            </label>
                        </tr>
                        <tr>
                            <label>Maths
                                    <input type='checkbox' />
                                <span class='checkmark'></span>
                            </label>
                        </tr>
                        <tr>
                            <label>Science
                                    <input type='checkbox' />
                                <span class='checkmark'></span>
                            </label>
                        </tr>
                        <tr>
                            <label>Language
                                    <input type='checkbox' />
                                <span class='checkmark'></span>
                            </label>
                        </tr>
                        <tr>
                            <label>Art
                                    <input type='checkbox' />
                                <span class='checkmark'></span>
                            </label>
                        </tr>
                        <tr>
                            <label>Music
                                    <input type='checkbox' />
                                <span class='checkmark'></span>
                            </label>
                        </tr>

                    </div>
                </div>
                <div className='ProjectContainer'>

                    <div className='ProjectLibText'>
                        <h1>Projects</h1>
                        <p>This is where all the project pictures will go</p>
                        <button className = "difficultyButton">beginner</button><button className = "difficultyButton">Intermediate</button><button className = "difficultyButton">Advanced</button>
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