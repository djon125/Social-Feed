import React, { useState } from 'react';

const Entry = (props) => {
    return ( 
        <>
            <td>{props.entry.name}</td>
            <td>{props.entry.post}</td>
        </>
        
     );
}
 
export default Entry;