import React, {useEffect, useState} from 'react';
import StudentLibraryImage from './Student-Project-Library-Image.js';
import { StudentProjectContent } from './StudentProjectContent.js'

  function LibraryPicture() {
    const [projectData, setProjectData] = useState("");

    function CallAPI(){
      const requestURL1 ="http://localhost:8080/api/StudentProjectLib/getAllData/projectData";
      fetch(requestURL1)
        .then((response) => response.json())
        .then((data) => setProjectData)
    }

    useEffect(() => {
      if(!projectData) {
        CallAPI();
      }
    })
    
    return (
        <div className ='ProjectGallery'>
  
          {StudentProjectContent.map((gallery) => {
            const {Image, Title} = gallery;
            return(
                <StudentLibraryImage Image={Image} Title={Title} 
                Difficulty ={projectData ? projectData[0].Course : "Waiting for API to load"} />
          )})}
          
          </div>
    );
  }

  export default LibraryPicture

