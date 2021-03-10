import React, {useState} from 'react';
import '../CSS/StudentProjectLib.css';
import { Button, ButtonGroup } from '@material-ui/core';


// changes the button to show which selection is highlighted
function LibButton() {
    const [variant, setVariant]= useState('text')

    function customMe(){

    setVariant('outlined')
    }

    return (
        <div className='ButtonContainer'>
            <div className='LeftButtonContainer'>
                <ButtonGroup variant = {variant} onClick = {customMe} color="primary" aria-label="text primary button group">
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