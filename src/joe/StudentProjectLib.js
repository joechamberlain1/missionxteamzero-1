import React from 'react';
import Nav from '../Components/nav.js';
import './css/StudentProjectLib.css';
import ProjectGallery from './ProjectGallery.js';
import LibButton from './ProjectLibButtons.js';
import ProjectSideBar from './ProjectGallerySideBar';
import MainFooter from '../Components/Footer.js'
import { Button, } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom';
import StudentProjectBuilder from './StudentProjectBuilder'

// import { yellow } from '@material-ui/core/colors';

// this controls the button at the botttom and still needs some configuring
const useStyles = makeStyles((theme) => ({
    paper: {
        position: "static",
        display: "flex",
        float: "right",
        flexDirection: "column",
        backgroudColor: "yellow",
        margin: 50,
        boxShadow: "none",
        border: "1px solid",
        backgroundColor: "#E5AB2C",
        color: "white",
        width: 170,

        "&:hover": {
            backgroundColor: "#E5AB2C",
            boxShadow: "none",
        },
    },
}));

function StudentProjectLib() {

    const classes = useStyles();

    return (
        <div>
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
                        <Link to='/StudentProjectBuilder'> TAKE ME TO MY SIDEBAR</Link>
                        <LibButton />

                    </div>
                    <div>
                        
                        <ProjectGallery />

                    </div>
                    <div>
                    <Button href = '#top' variant = 'contained' className= {classes.paper} size='small' >Back to the top</Button>
                    </div>
                </div>
            </div>

            <MainFooter />

        </div>
        <div className="ProjectContainer">
          <div className="ProjectLibText">
            <h1>PROJECTS</h1>
            <p>
                    Welcome to the project library. You can use filters on the right
                    to help you search for specific projects.
            </p>

            <LibButton />
          </div>
          <div>
            <ProjectGallery />
          </div>
          <div>
            <Button
              href="#top"
              variant="contained"
              className={classes.paper}
              size="small">
                    Back to the top
            </Button>
          </div>
        </div>
        <MainFooter />
    </div >
  );
}

export default StudentProjectLib;
