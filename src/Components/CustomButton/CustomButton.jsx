import React, { useState } from 'react';
import "../../App.css"

const CustomButton = (props) => {
    const [buttonClass, setButtonClass] = useState("inactive");
    const [buttonClassDislike, setButtonClassDislike] = useState("inactive");
    
    function handleClick(){
        if(buttonClass === "inactive"){
            setButtonClass('like');
            setButtonClassDislike('inactive')
        }
        else {
            setButtonClass('inactive');
        }
    }
    function handleClickDislike(){
        if(buttonClassDislike === "inactive"){
            setButtonClassDislike('dislike');
            setButtonClass('inactive')
        }
        else {
            setButtonClassDislike('inactive');
        }
    }

    return ( 
            <>
                <button type="submit" className={buttonClass} onClick={handleClick}>Up</button>
                <button type="submit" className={buttonClassDislike} onClick={handleClickDislike}>Down</button>
            </>
     );
}
 
export default CustomButton;


