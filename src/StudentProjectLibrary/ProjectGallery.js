import React from 'react';

import './StudentProjectLib.css';
import LibraryPicture from './ProjectLibraryPicture'
import {Grid} from "@material-ui/core"




const ProjectGallery = () => {

    return (
        <div className='ProjectGallery'>
            {/*not sure how to get the grid working so it's only got three in a row but I like it at the moment*/}
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
