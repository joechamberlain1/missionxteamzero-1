import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import teachid from "../img/teacherpro.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


function Tavitar() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Avatar alt="Remy Sharp" src={teachid}  />
      </div>
    );
  }
export default Tavitar;