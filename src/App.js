import React, { useState } from 'react';
import CreatPost from './Components/CreatePost/CreatPost';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import "./App.css";



function App() {

  const [entries, setEntries] = useState([{name: 'Dion Ross', post: 'This is my test post!', date: '2022-08-20'}])

  function addNewEntry(entry) {
    let tempEntries = [...entries, entry];

    setEntries(tempEntries);
  }

  return (
    <div>
      <h1>Social
      <small className='text-muted'>Feed</small></h1>
      <div className='bottom-part'>
        <CreatPost addNewEntry={addNewEntry} /*className="container-fluid"*//>
      </div>

      <DisplayPosts entries={entries} /*className="border-box"*//>
      
    </div>
  );
}

export default App;
