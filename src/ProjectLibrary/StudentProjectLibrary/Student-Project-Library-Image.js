import React from 'react';
import { makeStyles, Card, CardContent, CardMedia, Typography,} from '@material-ui/core';


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

    //uses props from StudentProjectContent in order to make the buttons and side bar interactive
const StudentLibraryImage = ({Image, Title, Difficulty}) => {
    const classes = useStyles();
    return (
        <Card className={classes.CardSize}>
        <CardContent>
         <CardMedia>{Image}</CardMedia>
         <Typography className={classes.textTitle}>{Title}</Typography>
         <Typography className={classes.textAlign}>{Difficulty}</Typography>
       </CardContent>
       </Card>
    )
}

export default StudentLibraryImage