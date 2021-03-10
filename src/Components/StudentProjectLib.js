import React from 'react';
import Nav from './nav.js';
import '../CSS/StudentProjectLib.css';
// import NestedGrid from './ProjectGallery.js'
// import { Link } from
import ProjectGallery from './ProjectGallery.js';
import LibButton from './ProjectLibButtons.js';
import ProjectSideBar from './ProjectGallerySideBar'

function StudentProjectLib() {
    return (
        <div className="StudentProjectLibrary">
            <Nav />
            <div className='MainPage'>

                <div className='ProjectSideBar'> {/*sidebar container */}
                    <div>
                    <ProjectSideBar />

                    </div>
                </div>
                <div className='ProjectContainer'>

                    <div className='ProjectLibText'>

                        <h1>Projects</h1>
                        <p>Welcome to the project library. You can use filters on the right to help you search for specific projects.</p>

                        <LibButton />

                    </div>
                    <div>
                        
                        <ProjectGallery />

                    </div>

                    {/* <NestedGrid /> */}
                </div>
            </div>
        </div>



    )
}

export default StudentProjectLib