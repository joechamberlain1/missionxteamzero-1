import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import './StudentProjectLib.css'



function ProjectSideBar() {

    const [checkboxes, setCheckboxes ] = useState([

        { title: 'Subscription', itemTypes: ['Free', 'Premium'], id:1 },
        { title: 'Activity Type', itemTypes: ['Animation', 'Game', 'Chatbot', 'Augmented Reality'], id: 2 },
        { title: 'Year Level', itemTypes: ['1-4', '5-6', '7-8', '9-13'], id:3 },
        { title: 'Subject Matter', itemTypes: ['Computer Science', 'Maths', 'Science', 'Language', 'Art', 'Music'], id:4 },

    ])
        
    return (
        <div className='ProjectSideBar'>
            {checkboxes.map((checkbox) => (
                <ul>
                    <li className= 'TableHeader'>{checkbox.title}</li>
                    <li><Checkbox
                            defaultChecked
                            size='small'
                            color="primary"
                             />{checkbox.itemTypes[0]}</li>
                </ul>
            )
                
                
            )}

        </div>
    )}


export default ProjectSideBar;



