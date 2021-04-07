import React from 'react';
import { makeStyles, Card, CardContent, CardMedia, Typography,} from '@material-ui/core';
import { StudentProjectContent } from './StudentProjectContent.js'
 
const useStyles = makeStyles({
//controls the whole card size which is the picture and the text as one
    CardSize:{
        height: 360,
        width: 350, 
        border: "none",
        boxShadow: "none",
    },
 
//these two classes control the text under the pictures
    textAlign:{
      textAlign: 'center',
      fontFamily: 'Nunito',
      color: 'grey',
      fontSize: 16,
    },

    textTitle:{
      textAlign: 'center',
      fontFamily: 'Nunito',
      color: 'grey',
      fontWeight: '900',
      fontSize: 30,
    }


});
  


  function LibraryPicture() {
    const classes = useStyles();
    
    return (
        <div className ='ProjectGallery'>
  
          {StudentProjectContent.map((gallery) => (
            <Card className={classes.CardSize}>
              <CardContent>
                <CardMedia>{gallery.Image}</CardMedia>
                <Typography className={classes.textTitle}>{gallery.Title}</Typography>
                <Typography className={classes.textAlign}>{gallery.Difficulty}</Typography>
              </CardContent>
              </Card>
          ))}
         
        </div>
    );
  }

  export default LibraryPicture

