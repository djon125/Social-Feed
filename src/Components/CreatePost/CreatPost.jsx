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
        <form classname="entryPost" onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Name: </label>
                <input className="form-control" type="text" value={name} onChange={(event) => setName(event.target.value)}></input><br></br>
            </div>
            <div>
                <label>Post: </label>
                <textarea rows="3" cols="45" type="text" value={post} onChange={(event) => setPost(event.target.value)}></textarea>
            </div>
            <button className='btn btn-primary' style={{margin: '1em'}} type='submit'>Create</button>
        </form>
     );
}
 
export default CreatPost;