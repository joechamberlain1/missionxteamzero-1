import React, {useEffect, useState} from 'react';
import StudentLibraryImage from './Student-Project-Library-Image.js';
import { Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	paper: {
		boxShadow: "none",
		border: "1px solid grey",
		color: "white",
		height: 20,
	},

  textDecoration : {
    textDecoration: 'none',
  },

}));
  function LibraryPicture(props) {
    const [projectData, setProjectData] = useState([]);

    const callAPI = () =>{
      const requestURL1 ="http://localhost:8080/api/project/getAllData";

      fetch(requestURL1)
        .then((response) => response.json())
        .then((data) => {
          setProjectData(data)
          console.log(data) 
        })
      }


    useEffect(() => {
      callAPI();
    }, [])


    const getBeginnerData = () => {
      const requestURL1 = 'http://localhost:8080/api/project/getbeginnerData';
      
      // calls the API with the url 'requestURL2'
      // once we get the response then do something with it
      // * CONSUMER of the promise returned by the Fetch API
      fetch(requestURL1)
        .then((response) => response.json())
        .then((data) => {
          setProjectData(data)
          console.log(data)
        });
      };

      const getIntermediate = () => {
        const requestURL1 = 'http://localhost:8080/api/project/getintermediatedata';
        
        // calls the API with the url 'requestURL2'
        // once we get the response then do something with it
        // * CONSUMER of the promise returned by the Fetch API
        fetch(requestURL1)
          .then((response) => response.json())
          .then((data) => {
            setProjectData(data)
            console.log(data)
          });
        };

        const getAdvanced = () => {
          const requestURL1 = 'http://localhost:8080/api/project/getadvanceddata';
          
          // calls the API with the url 'requestURL2'
          // once we get the response then do something with it
          // * CONSUMER of the promise returned by the Fetch API
          fetch(requestURL1)
            .then((response) => response.json())
            .then((data) => {
              setProjectData(data)
              console.log(data)
            });
          };
    const classes = useStyles();

    return (

<>

<div className="StudentLibButtonContainer">
<div>
  <ButtonGroup
    size="small"
    variant="text"
    className={classes.paper}
  >

    {/* color ={beginner ? 'black' : 'primary'}  */}
    <Button onClick={()=> getBeginnerData()}>BEGINNER</Button>
    <Button onClick={()=> getIntermediate()}>INTERMEDIATE</Button>
    <Button onClick={()=> getAdvanced()}>ADVANCED</Button>
    <Button onClick={()=> callAPI()}>ALL</Button>
  </ButtonGroup>
</div>

<div>
  Show
  <ButtonGroup
    size="small"
    variant="contained"
    color="primary"
    aria-label="text primary button group"
  >
    <Button className={classes.paper}>25</Button>
    <Button className={classes.paper}>50</Button>
    <Button className={classes.paper}>100</Button>
  </ButtonGroup>
</div>
</div>
        <div className ='ProjectGallery'>
  
          {projectData.map((project) => {
            return(
               <Link className = {classes.textDecoration} to={props.path}><StudentLibraryImage Image = {project.IMGURL} Title ={project.Title} 
                Difficulty ={projectData ? `${project.Course} | ${project.ActivityType}` : "Loading"} /></Link>
          )})}
          
          </div>


</>
          
    );
  }

  export default LibraryPicture

