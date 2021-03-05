import React from 'react';
import Nav from './nav.js';
import css from './StudentProjectLib.css';
import project1 from './img/project1.png';

function StudentProjectLib() {
    return (
        <div className="StudentProjectLibrary">
            <Nav />
            <div className='MainPage'>
                <div className='SideBar'>
                    <ul>
                        <div className="Subscription">
                            <li>Subsrciption</li>

                            <label class="container">One
                        <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>

                            <label class="container">One
                        <input type="checkbox" />
                                <span class="checkmark"></span>
                            </label>

                        </div>
                        <li>Activity Type</li>
                        <li>Year Level</li>
                    </ul>
                </div>

                <div className='Header'>
                    <h1>Projects</h1>
                    <div className="ProjectGallery">
                        <p>This is where all the project pictures will go</p>
                        <img src={project1} className='Project1' alt="Project 1" />
                        <img src={project1} className='Project1' alt="Project 1" />
                        <img src={project1} className='Project1' alt="Project 1" />
                        <img src={project1} className='Project1' alt="Project 1" />
                        <img src={project1} className='Project1' alt="Project 1" />
                        <img src={project1} className='Project1' alt="Project 1" />
                        <img src={project1} className='Project1' alt="Project 1" />
                        <img src={project1} className='Project1' alt="Project 1" />
                        <img src={project1} className='Project1' alt="Project 1" />

                    </div>
                </div>





            </div>
        </div>



    )
}

export default StudentProjectLib