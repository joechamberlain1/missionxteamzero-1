import React, { useState } from 'react';
import './StudentProjectLib.css'
import SideBarCheckbox from './checkboxSideBar'


function ProjectSideBar() {

    const [checkboxes  ] = useState([

        { title: 'Subscription', itemTypes: ['Free', 'Premium'], id:1 },
        { title: 'Activity Type', itemTypes: ['Animation', 'Game', 'Chatbot', 'Augmented Reality'], id: 2 },
        { title: 'Year Level', itemTypes: ['1-4', '5-6', '7-8', '9-13'], id:3 },
        { title: 'Subject Matter', itemTypes: ['Computer Science', 'Maths', 'Science', 'Language', 'Art', 'Music'], id:4 },

    ])
        
    return (
        <div>
            {checkboxes.map((checkbox) => (
                <div className='ProjectSideBar'>
                    <h1 className= 'TableHeader'>{checkbox.title}</h1>
                   <div>
                    <SideBarCheckbox className = 'CheckBoxContainer'/>{checkbox.itemTypes[0]}
                    </div>
                    
                </div>    
                
            )
                
                
            )}

        </div>
    )}


export default ProjectSideBar;



