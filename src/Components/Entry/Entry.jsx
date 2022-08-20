//import React, { useState } from "react";
import CustomButton from "../PostButton/PostButton";



const Entry = (props) => {
  return (
    <div>
      <div className="name">{props.entry.name}</div>
      <br />
      <div className="post">{props.entry.post}</div>
      <br />
      <div className="date">Date Posted: {props.entry.date}</div>
      <div className="custom">
        <CustomButton />
      </div>
    </div>
  );
};

export default Entry;
