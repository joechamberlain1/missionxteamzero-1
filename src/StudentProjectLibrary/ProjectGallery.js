import React from 'react';

import './StudentProjectLib.css';
import LibraryPicture from './ProjectLibraryPicture'
import {Grid} from "@material-ui/core"




const ProjectGallery = () => {

    return (
        <div className='ProjectGallery'>
            {/*this first project needs to go the project builder pages*/}
            <div>
                <Grid container >
                    <Grid item xs={12}>
                <LibraryPicture />
                    </Grid>
                </Grid>
            </div>

        </div>


    )
}

export default ProjectGallery
