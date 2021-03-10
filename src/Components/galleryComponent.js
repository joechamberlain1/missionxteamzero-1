import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import project1 from '../img/Project -1@2x.jpg'
import { CardMedia } from '@material-ui/core';



const useStyles = makeStyles({
  
    CardSize:{
        height: 300,
        width: 300,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    FontSize:{
        fontSize: 20,
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
        <CardMedia component = 'img' alt = 'Project 1' height = '250' image = {project1}/>
        <CardContent>
        <Typography>Introduction</Typography>
        <Typography>BEGINNER | Animation</Typography>
        </CardContent>
      </Card>
    );
  }

  export default SimpleCard