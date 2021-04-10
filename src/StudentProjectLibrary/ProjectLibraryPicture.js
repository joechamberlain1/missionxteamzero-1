import React from 'react';
import StudentLibraryImage from './Student-Project-Library-Image.js';
import { StudentProjectContent } from './StudentProjectContent.js'
 

  


  function LibraryPicture() {
    
    
    return (
        <div className ='ProjectGallery'>
  
          {StudentProjectContent.map((gallery) => {
            const {Image, Title, Difficulty} = gallery;
            return(
                <StudentLibraryImage Image={Image} Title={Title} Difficulty ={Difficulty} />
          )})}
          
          </div>
    );
  }

  export default LibraryPicture

