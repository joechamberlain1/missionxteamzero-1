import React from 'react';

import './StudentProjectLib.css';
import LibraryPicture from './ProjectLibraryPicture'
import {Grid} from "@material-ui/core"




const ProjectGallery = () => {

    return (
        <div className='ProjectGallery'>

            {/*this first project needs to go the project builder pages*/}
            <div>
                
                {/* <img src={project1} className='ProjectPic2' alt="Project 1" />
                <h3>Introduction</h3><p>BEGINNER | Animation</p> */}
                <Grid container>
                    <Grid item xs={4}>
                <LibraryPicture />
                    </Grid>
                </Grid>
            </div>
            {/* <div className='ProjectPic'>
                <img src={project2} className='ProjectPic2' alt="Project 2" />
                <h3>My Birthday</h3><p>BEGINNER | Animation</p>
            </div>
            <div className='ProjectPic'>
                <img src={project3} className='ProjectPic3' alt="Project 3" />
                <h3>10 Block Challenge</h3><p>BEGINNER | Animation</p>
            </div>
            <div className='ProjectPic'>
                <img src={project4} className='ProjectPic4' alt="Project 4" />
                <h3>Build a Band</h3><p>BEGINNER | Animation</p>
            </div>
            <div className='ProjectPic'>
                <img src={project5} className='ProjectPic5' alt="Project 5" />
                <h3>The bear and the monkey</h3><p>BEGINNER | Animation</p>
            </div>
            <div className='ProjectPic'>
                <img src={project6} className='ProjectPic6' alt="Project 6" />
                <h3>Debugging</h3><p>BEGINNER | Animation</p>
            </div>

            <div className='ProjectPic'>
                <img src={project7} className='ProjectPic7' alt="Project 7" />
                <h3>About me</h3><p>BEGINNER | Animation</p>
            </div>
            <div className='ProjectPic'>
                <img src={project8} className='ProjectPic8' alt="Project 8" />
                <h3>I am here!</h3><p>BEGINNER | Animation</p>
            </div>
            <div className='ProjectPic'>
                <img src={project9} className='ProjectPic9' alt="Project 9" />
                <h3>Funny faces</h3><p>BEGINNER | Animation</p>
            </div>
            <div className='ProjectPic'>
                <img src={project10} className='ProjectPic10' alt="Project 10" />
                <h3>It tickles!</h3><p>BEGINNER | Animation</p>
            </div>
            <div className='ProjectPic'>
                <img src={project11} className='ProjectPic11' alt="Project 11" />
                <h3>Penguin in a desert</h3><p>BEGINNER | Animation</p>
            </div>
            <div className='ProjectPic'>
                <img src={project12} className='ProjectPic12' alt="Project 12" />
                <h3>Time Travel</h3><p>BEGINNER | Animation</p>
            </div>
            <div className='ProjectPic'>
                <img src={project13} className='ProjectPic13' alt="Project 13" />
                <h3>Birthday Card</h3><p>BEGINNER | Animation</p>
            </div>
            <div className='ProjectPic'>
                <img src={project14} className='ProjectPic14' alt="Project 14" />
                <h3>The Lion and the Mouse Part 1</h3><p>BEGINNER | Animation</p>
            </div>
            <div className='ProjectPic'>
                <img src={project15} className='ProjectPic15' alt="Project 15" />
                <h3>The Lion and the Mouse Part 2</h3><p>BEGINNER | Animation</p>
            </div> */}
        </div>


    )
}

export default ProjectGallery


// const useStyles = makeStyles(() =>({

// })) 

// const PorjectGallery = () => {
//     return(
//         <Grid container spacing={6}>
//             <Grid item xs={12} md={4}>
//             <SimpleCard />
//             </Grid>
//             <Grid item xs={12} md={4}>
//             <SimpleCard />
//             </Grid>
//             <Grid item xs={12} md={4}>
//             <SimpleCard />
//             </Grid>
//             <Grid item xs={12} md={4}>
//             <SimpleCard />
//             </Grid>
//             <Grid item xs={12} md={4}>
//             <SimpleCard />
//             </Grid>
//             <Grid item xs={12} md={4}>
//             <SimpleCard />
//             </Grid>
//         </Grid>
//     )
// }

// export default ProjectGallery