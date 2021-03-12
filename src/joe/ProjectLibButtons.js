import React, {useState} from 'react';
import './css/StudentProjectLib.css';
import { Button, ButtonGroup } from '@material-ui/core';
// import { makeStyles } from '@material-ui/styles'

// in case i want to add some styles to the buttons for the top part of the page using material UI
// const useStyles = makeStyles((theme) => ({
//     paper: {
//         position: 'static',
//         display: 'flex',
//         flexDirection: 'column',
//         backgroudColor: 'yellow',
//         margin: 50,
//         boxShadow: 'none',
//         border: '1px solid',
//         backgroundColor: '#E5AB2C',
//         color: 'white',
//         fontFamily: 'Nunito',
//         // width: 170,
//         textAlign: 'center',

//         '&:hover': {
//         backgroundColor: '#E5AB2C',
//         boxShadow: 'none',
//           },
//     },
//   }));


// changes the button to show which selection is highlighted
function LibButton() {
    return (
        <div className='ButtonContainer'>
            <div className='LeftButtonContainer'>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                    <Button>BEGINNER</Button>
                    <Button>INTERMEDIATE</Button>
                    <Button>ADVANCED</Button>
                </ButtonGroup>
            </div>

            <div className='RightButtonContainer'>
                Show:
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                    <Button>5</Button>
                    <Button>10</Button>
                    <Button>20</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default LibButton