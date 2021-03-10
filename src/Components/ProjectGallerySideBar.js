import React from 'react';
import '../CSS/StudentProjectLib.css'

function ProjectSideBar(){
    return(
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
                                <span className='checkmark'>Premium</span>
                            </label>
                        </tr>

                        <tr>
                            <th>Activity Type</th>
                        </tr>
                        <tr>
                            <label className="checkbox">
                                <input type='checkbox' />
                                <span className='checkmark'>Animation</span>
                            </label>
                        </tr>
                        <tr>
                            <label className="checkbox">
                                <input type='checkbox' checked='checked' />
                                <span className='checkmark'>Game</span>
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


)
}

export default ProjectSideBar