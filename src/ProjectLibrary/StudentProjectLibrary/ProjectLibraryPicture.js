import React, {useEffect, useState} from 'react';
import StudentLibraryImage from './Student-Project-Library-Image.js';
import { StudentProjectContent } from './StudentProjectContent.js'

  function LibraryPicture() {
    const [projectData, setProjectData] = useState("");

    function CallAPI(){
      const requestURL1 ="http://localhost:8080/api/project/getAllData";
      fetch(requestURL1)
        .then((response) => response.json())
        .then((data) => {
          setProjectData(data)
          console.log(data) 
        })
      }

    useEffect(() => {
      if(!projectData) {
        CallAPI();
      }
    })
    


    return (
        <div className ='ProjectGallery'>
  
          {StudentProjectContent.map((project) => {
            const {Image, Title} = project;
            return(
                <StudentLibraryImage Image={Image} Title={Title} 
                Difficulty ={projectData ? `${projectData[0].Course} | ${projectData[0].SubjectMatter1}` : "Loading"} />
          )})}
          
          </div>

        // trying to map through a database  
        // <div className ='ProjectGallery'>
        // {projectData.map((courseDetails) =>{
        //   const {Course, SubjectMatter1} = courseDetails
        //   {StudentProjectContent.map((gallery) => {
        //    const {Image, Title} = gallery;
        //   return (
        //     <StudentLibraryImage Image ={Image} Title= {Title}
        //             Difficulty ={projectData ? `${Course} | ${SubjectMatter1}` : "Loading"} />
        //   )
        // })}})}
        // </div>
    );
  }

  export default LibraryPicture

