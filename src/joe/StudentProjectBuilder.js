import React from 'react';
import TopNav2 from '../TeacherDashboard/TopNavPart2';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ProjectBuilderSideBar from './ProjectBuilderSideBar'

function StudentProjectBuilder(){
    return(
        <div><TopNav2 />
        <h1>HELLO<ArrowBackIosIcon /></h1>
        <ProjectBuilderSideBar />
        </div>
    )
}

export default StudentProjectBuilder