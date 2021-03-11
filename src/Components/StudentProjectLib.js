import React from 'react';
import Nav from './nav.js';
import '../CSS/StudentProjectLib.css';
import ProjectGallery from './ProjectGallery.js';
import LibButton from './ProjectLibButtons.js';
import ProjectSideBar from './ProjectGallerySideBar';
import MainFooter from './Footer.js'
import { Button, } from '@material-ui/core';
import {makeStyles} from '@material-ui/styles'
// import { yellow } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'static',
        display: 'flex',
        flexDirection: 'column',
        backgroudColor: 'yellow',
        margin: 50,
        boxShadow: 'none',
        border: '1px solid',
        backgroundColor: '#E5AB2C',
        color: 'white',
        width: 170,

        '&:hover': {
        backgroundColor: '#E5AB2C',
        boxShadow: 'none',
          },
    },
  }));


function StudentProjectLib() {

    const classes = useStyles();

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

                        <h1>PROJECTS</h1>
                        <p>Welcome to the project library. You can use filters on the right to help you search for specific projects.</p>

                        <LibButton />

                    </div>
                    <div>
                        
                        <ProjectGallery />

                    </div>
                    <div className='RightButtonContainer'>
                    <Button href = '#top' variant = 'contained' className= {classes.paper} size='small' >Back to the top</Button>
                    </div>
                </div>
            </div>

            <MainFooter />

        </div>



    )
}

export default StudentProjectLib