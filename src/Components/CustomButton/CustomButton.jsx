import React, { useState } from 'react';
import "../../App.css"


const CustomButton = (props) => {

    
    const [buttonClass, setButtonClass] = useState('inactive');

    function handleClick(){
        if(buttonClass === "inactive"){
            setButtonClass('active');
        }
        else {
            setButtonClass('inactive');
        }
    }
        return (
            <div>
                <button className={buttonClass} onclick={handleClick}>{props.message}</button>
            </div>
        )

}
