import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import project1 from '../img/Project -1@2x.jpg'
import { CardMedia } from '@material-ui/core';


// const {Image, title, subtitle} = props; 

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
    },

    cardBorder: {
        border: "none",
        boxShadow: "none"
      }
});
  


  function SimpleCard() {
    const classes = useStyles();
  
    return (

      <Card className = {classes.cardBorder}>
        <CardContent>

        {/*project image*/}<CardMedia component = 'img' alt = 'Project 1' height = 'auto' image = {project1}/>
        {/* title*/}<Typography className = {classes.textAlign}>Introduction</Typography> 
        {/* subtitle*/}<Typography className = {classes.textAlign}>BEGINNER | Animation</Typography>

        </CardContent>
      </Card>

    );
  }

  export default SimpleCard