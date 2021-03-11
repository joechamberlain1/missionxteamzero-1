import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Students from '../img/Project -1@2x.jpg'
import '../CSS/StudentProjectLib.css'
import project1 from '../img/Project -1@2x.jpg';
import project2 from '../img/Project -2@2x.jpg';
import project3 from '../img/Project -3@2x.jpg';
import project4 from '../img/Project -4@2x.jpg';
import project5 from '../img/Project -5@2x.jpg';
import project6 from '../img/Project -6@2x.jpg';
import project7 from '../img/Project -7@2x.jpg';
import project8 from '../img/Project -8@2x.jpg';
import project9 from '../img/Project -9@2x.jpg';
import project10 from '../img/Project -10@2x.jpg';
import project11 from '../img/Project -11@2x.jpg';
import project12 from '../img/Project -12@2x.jpg';
import project13 from '../img/Project -13@2x.jpg';
import project14 from '../img/Project -14@2x.jpg';
import project15 from '../img/Project -15@2x.jpg';
// import {Grid} from '@material-ui/core'
// import {makeStyles} from '@material-ui/styles'
// import SimpleCard from './galleryComponent'



const ProjectGallery = () => {
    
    return(
    <div className = 'ProjectGallery'>
        <div className='ProjectPic'>
        <img src={project1} className='ProjectPic1' alt="Project 1" />
        <h3>Introduction</h3><p>BEGINNER | Animation</p>
    </div>
    <div className='ProjectPic'>
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
    </div>
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