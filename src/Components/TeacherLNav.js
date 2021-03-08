import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


function TeacherLNav() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      
      <ListItem button>
        <ListItemText primary="PROGRESS TRACKER" />
      </ListItem>

      <ListItem button>
        <ListItemText primary="STUDENT PROFILES" />
      </ListItem>

      <ListItem button>
        <ListItemText primary="HELP REQUESTS" />
      </ListItem>

      <ListItem button>
        <ListItemText primary="PROJECT SUBMISSIONS" />
      </ListItem>

      <ListItem button>
        <ListItemText primary="PROJECT LIBRARY" />
      </ListItem>


    </List>
  );
}
export default TeacherLNav;