import React, {useEffect, useState} from 'react';
import StudentLibraryImage from './Student-Project-Library-Image.js';
// import { StudentProjectContent } from './StudentProjectContent.js'

  function LibraryPicture() {
    const [projectData, setProjectData] = useState([]);

    const CallAPI = () =>{
      const requestURL1 ="http://localhost:8080/api/project/getAllData";
      


      fetch(requestURL1)
        .then((response) => response.json())
        .then((data) => {
          setProjectData(data)
          console.log(data) 
        })
      }


    useEffect(() => {
      CallAPI();
    }, [])

    return (


        <div className ='ProjectGallery'>
  
          {projectData.map((project) => {
            const { Course, SubjectMatter1, Title, IMGURL} = project
            return(
                <StudentLibraryImage Image={projectData ? IMGURL : 'Pic loading'} Title={Title} 
                Difficulty ={projectData ? `${Course} | ${SubjectMatter1}` : "Loading"} />
          )})}
          
          </div>

        // <div className ='ProjectGallery' id = "Projects">
        
        //   {StudentProjectContent.map((gallery) => {
        //    const {Image, Title} = gallery;
        //   return (
        //     <StudentLibraryImage Image ={Image} Title= {Title}
        //             Difficulty ={projectData ? `${projectData[0].Title} | ${projectData[0].SubjectMatter1}` : "Loading"} />
        //   )
        // })}
        // </div>
    );
  }

  export default LibraryPicture

