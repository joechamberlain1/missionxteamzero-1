import React from 'react';
import { makeStyles, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { StudentProjectContent } from './StudentProjectContent.js'
 
const useStyles = makeStyles({

    CardSize:{
        height: 250,
        width: 350, 
    },
 
    FontSize:{
        fontSize: 50,
    },

    textAlign:{
      textAlign: 'center',
      fontFamily: 'Nunito'
    },

    cardBorder: {
        border: "none",
        boxShadow: "none"
      }
});
  


  function LibraryPicture() {
    const classes = useStyles();
    
    return (
        <div>
          {StudentProjectContent.map((gallery) => (
            <Card className={classes.CardSize}>
              <CardContent className={classes.cardBorder}>
                <CardMedia>{gallery.Image}</CardMedia>
                <Typography>{gallery.Title}</Typography>
                <Typography>{gallery.Difficulty}</Typography>
              </CardContent>
              </Card>
          ))}
        </div>
    );
  }

  export default LibraryPicture

