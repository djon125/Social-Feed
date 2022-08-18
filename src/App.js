import React, { useState } from 'react';
import CreatPost from './Components/CreatePost/CreatPost';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import CustomButton from './Components/CustomButton/CustomButton';
import "./App.css";



function App() {

  const [entries, setEntries] = useState([{name: 'Dion Ross', post: 'Put your post here'}])

  function addNewEntry(entry) {
    let tempEntries = [...entries, entry];

    setEntries(tempEntries);
  }

  return (
    <div>
      <h1>Social
      <small className='text-muted'>Tracker</small></h1>
      <CreatPost addNewEntry={addNewEntry}/>
      <DisplayPosts entries={entries}/>
      <div className='block'>
        <CustomButton />
      </div>

      
    </div>
  );
}

export default App;
