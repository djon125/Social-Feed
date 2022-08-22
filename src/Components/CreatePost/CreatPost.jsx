import React, { useState } from 'react';


const CreatPost = (props) => {
    
    const [name, setName] = useState('');
    const [post, setPost] = useState('');
    const [date, setDate] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            name: name,
            post: post,
            date: date
        };
        console.log(newEntry);
        props.addNewEntry(newEntry);
    }
    
    return ( 
        <form classname="entryPost" onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Name: </label>
                <input className="form-control" type="text" value={name} onChange={(event) => setName(event.target.value)} /><br></br>
            </div>
            <div>
                <label>Post: </label>
                <textarea className="form-control" rows="4" cols="40" type="text" value={post} onChange={(event) => setPost(event.target.value)} /> 
            </div>
            <div>
                <label>Date: </label>
                <input className="date" type='date' value={date} onChange={(event) => setDate(event.target.value)} /> <button className='button' style={{margin: '1em'}} type='submit'>Create</button>
            </div>
        </form>
     );
}
 
export default CreatPost;