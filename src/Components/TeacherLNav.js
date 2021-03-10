import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';




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
      <Link to="/teacherpro">PROGRESS TRACKER</Link>
      </ListItem>

      <ListItem button >
      <Link to="/teacherstu">STUDENT PROFILES</Link>
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