import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import './css/StudentProjectLib.css'

function ProjectSideBar(){
    return(
<div className='ProjectSideBar'> {/*sidebar container */}

                    <div className="TableHeader">
                        <tr>
                            <th>Subscription</th>
                        </tr>
                        <tr>
                        <Checkbox
                            defaultChecked
                            size = 'small'
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                            Free
                        </tr>
                        <tr>
                        <Checkbox
                            size = 'small'
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                            Premium
                        </tr>

                        <tr>
                            <th>Activity Type</th>
                        </tr>
                        <tr>
                        <Checkbox
                            defaultChecked
                            size = 'small'
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                            Animation
                        </tr>
                        <tr>
                        <Checkbox
                            size = 'small'
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                            Game
                        </tr>
                        <tr>
                        <Checkbox
                            size = 'small'
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                                Chatbot
                        </tr>
                        <tr>
                        <Checkbox
                            size = 'small'
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                                    Augmented Reality
                        </tr>

                        <tr>
                            <th>Year Level</th>
                        </tr>
                        <tr>
                        <Checkbox
                            defaultChecked
                            size = 'small'
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                            1-4
                        </tr>
                        <tr>
                        <Checkbox
                            size = 'small'
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                            5-6
                        </tr>
                        <tr>
                        <Checkbox
                            size = 'small'
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                            7-8
                        </tr>
                        <tr>
                        <Checkbox
                            size = 'small'
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                            9-13
                        </tr>

                        <tr>
                            <th>Subject Matter</th>
                        </tr>
                        <tr>
                        <Checkbox
                            defaultChecked
                            size = 'small'
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                            Computer Science
                        </tr>
                        <tr>
                        <Checkbox
                            size = 'small'
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                            Maths
                        </tr>
                        <tr>
                        <Checkbox
                            size = 'small'
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                            Science
                        </tr>
                        <tr>
                        <Checkbox
                            size = 'small'
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                            Language
                        </tr>
                        <tr>
                        <Checkbox
                            size = 'small'
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                            Art
                        </tr>
                        <tr>
                        <Checkbox
                            size = 'small'
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                            Music
                        </tr>

                    </div>
                </div>


)
}

export default ProjectSideBar