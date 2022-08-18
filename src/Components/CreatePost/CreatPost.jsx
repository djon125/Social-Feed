import React, { useState } from 'react';


const CreatPost = (props) => {
    
    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            name: name,
            post: post
        };
        console.log(newEntry);
        props.addNewEntry(newEntry);
    }
    
    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)}></input><br></br>
            </div>
            <div>
                <label>Post: </label>
                <textarea type="text" value={post} onChange={(event) => setPost(event.target.value)}></textarea>
            </div>
            <button type='submit'>Create</button>
        </form>
     );
}
 
export default CreatPost;