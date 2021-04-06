import React from 'react'
import {Link} from 'react-router-dom'
import project1 from '../img/Project -1@2x.jpg';
import project2 from '../img/Project -2@2x.jpg';
import project3 from '../img/Project -3@2x.jpg';
import project4 from '../img/Project -4@2x.jpg';
import project5 from '../img/Project -5@2x.jpg';
import project6 from '../img/Project -6@2x.jpg';
import project7 from '../img/Project -7@2x.jpg';
import project8 from '../img/Project -8@2x.jpg';
import project9 from '../img/Project -9@2x.jpg';
import project10 from '../img/Project -10@2x.jpg';
import project11 from '../img/Project -11@2x.jpg';
import project12 from '../img/Project -12@2x.jpg';
import project13 from '../img/Project -13@2x.jpg';
import project14 from '../img/Project -14@2x.jpg';
import project15 from '../img/Project -15@2x.jpg';
import '../App.css'

export const StudentProjectContent =[
    {
    Image: <Link to="/StudentProjectBuilder"><img src = {project1}  alt="Project 1"/></Link>,
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
    Difficulty: ['BEGINNER|Animation']
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
},
{
    Image: <img src = {project7}  alt="Project 7"/>,
    Title: 'About me',
    Difficulty: 'BEGINNER|Animation'
     
},
{
    Image: <img src = {project8}  alt="Project 8"/>,
    Title: 'I am here!',
    Difficulty: 'BEGINNER|Animation'
     
},
{
    Image: <img src = {project9}  alt="Project 9"/>,
    Title: 'Funny Faces',
    Difficulty: 'BEGINNER|Animation'
     
},
{
    Image: <img src = {project10}  alt="Project 10"/>,
    Title: 'It tickles',
    Difficulty: 'BEGINNER|Animation'
     
},
{
    Image: <img src = {project11}  alt="Project 11"/>,
    Title: 'Penguin in a desert',
    Difficulty: 'BEGINNER|Animation'
     
},
{
    Image: <img src = {project12}  alt="Project 12"/>,
    Title: 'Time Travel',
    Difficulty: 'BEGINNER|Animation'
     
},
{
    Image: <img src = {project13}  alt="Project 13"/>,
    Title: 'Birthday Card',
    Difficulty: 'BEGINNER|Animation'
     
},
{
    Image: <img src = {project14}  alt="Project 14"/>,
    Title: 'The Lion and the Mouse Part 1',
    Difficulty: 'BEGINNER|Animation'
     
},
{
    Image: <img src = {project15}  alt="Project 15"/>,
    Title: 'The Lion and the Mouse Part 2',
    Difficulty: 'BEGINNER|Animation'
     
},
];