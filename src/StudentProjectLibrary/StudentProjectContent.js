import React from 'react'
import project1 from '../img/Project -1@2x.jpg';
import project2 from '../img/Project -2@2x.jpg';
import project3 from '../img/Project -3@2x.jpg';
import project4 from '../img/Project -4@2x.jpg';
import project5 from '../img/Project -5@2x.jpg';
import project6 from '../img/Project -6@2x.jpg';
import '../App.css'

export const StudentProjectContent =[
    {
    Image: <img src = {project1}  alt="Project 1"/>,
    Title: 'Introduction',
    Difficulty: 'BEGINNER|Animation'
     
},

{
    Image : <img src = {project2}  alt="Project 2"/>,
    Title: 'My Birthday',
    Difficulty: 'BEGINNER|Animation'
},

{
    Image : <img src = {project3} alt="Project 3"/>,
    Title: '10 Block Challenege',
    Difficulty: 'BEGINNER|Animation'
},

{
    Image : <img src = {project4} alt="Project 4"/>,
    Title: 'Build a band',
    Difficulty: 'BEGINNER|Animation'
},

{
    Image : <img src = {project5}  alt="Project 5"/>,
    Title: 'The bear and the monkey',
    Difficulty: 'BEGINNER|Animation'
},

{
    Image : <img src = {project6}  alt="Project 6"/>,
    Title: 'Debugging',
    Difficulty: 'BEGINNER|Animation'
}
];