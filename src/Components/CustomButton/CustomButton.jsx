import React, { useState } from 'react';
import "../../App.css"

const CustomButton = (props) => {
    const [buttonClass, setButtonClass] = useState("inactive");
    
    function handleClick(){
        if(buttonClass === "inactive"){
            setButtonClass('active');
        }
        else {
            setButtonClass('inactive');
        }
    }
    return ( 
            <>
                <button type="submit"sytle={{height: '1em'}} className={buttonClass} onClick={handleClick}>{props.message}</button>
            </>
     );
}
 
export default CustomButton;


