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
import {Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import SimpleCard from './galleryComponent'



function ProjectGallery(){
    return(
    <div className = 'ProjectGallery'>
        <div className='ProjectPic1'>
        <img src={project1} className='ProjectPic1' alt="Project 1" />
        <h3>Introduction</h3><p>BEGINNER | Animation</p>
    </div>
    <div className='ProjectPic2'>
        <img src={project2} className='ProjectPic2' alt="Project 2" />
        <h3>My Birthday</h3><p>BEGINNER | Animation</p>
    </div>
    <div className='ProjectPic3'>
        <img src={project3} className='ProjectPic3' alt="Project 3" />
        <h3>10 Block Challenge</h3><p>BEGINNER | Animation</p>
    </div>
    <div className='ProjectPic4'>
        <img src={project4} className='ProjectPic4' alt="Project 4" />
        <h3>Build a Band</h3><p>BEGINNER | Animation</p>
    </div>
    <div className='ProjectPic5'>
        <img src={project5} className='ProjectPic5' alt="Project 5" />
        <h3>The bear and the monkey</h3><p>BEGINNER | Animation</p>
    </div>
    <div className='ProjectPic6'>
        <img src={project6} className='ProjectPic6' alt="Project 6" />
        <h3>Debugging</h3><p>BEGINNER | Animation</p>
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

// export default PorjectGallery