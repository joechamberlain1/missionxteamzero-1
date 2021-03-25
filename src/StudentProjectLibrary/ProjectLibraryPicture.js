import React from 'react';
import { makeStyles, Card, CardContent, CardMedia, Typography, Grid } from '@material-ui/core';
import { StudentProjectContent } from './StudentProjectContent.js'
 
const useStyles = makeStyles({

    CardSize:{
        height: 250,
        width: 350, 
        border: "none",
        boxShadow: "none"
    },
 

    textAlign:{
      textAlign: 'center',
      fontFamily: 'Nunito',
      color: 'grey',
    },

    textTitle:{
      textAlign: 'center',
      fontFamily: 'Nunito',
      color: 'grey',
      fontWeight: 'bolder'
    }


});
  


  function LibraryPicture() {
    const classes = useStyles();
    
    return (
        <div>
          <Grid container spacing ={3}>
          {StudentProjectContent.map((gallery) => (
            <Card className={classes.CardSize}>
              <CardContent>
                <CardMedia>{gallery.Image}</CardMedia>
                <Typography className={classes.textTitle}>{gallery.Title}</Typography>
                <Typography className={classes.textAlign}>{gallery.Difficulty}</Typography>
              </CardContent>
              </Card>
          ))}
          </Grid>
        </div>
    );
  }

  export default LibraryPicture

