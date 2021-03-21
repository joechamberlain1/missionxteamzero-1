import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';
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

      <Card className = {classes.cardBorder}>
        <CardContent>

        {/*project image*/}<CardMedia>{StudentProjectContent[0].Image}</CardMedia>
        {/* title*/}<Typography className = {classes.textAlign}>{StudentProjectContent[0].Title}</Typography> 
        {/* subtitle*/}<Typography className = {classes.textAlign}>{StudentProjectContent[0].Difficulty}</Typography>

        </CardContent>
      </Card>

    );
  }

  export default LibraryPicture