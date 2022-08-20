//import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";



const Entry = (props) => {
  return (
    <div>
      <div className="name">{props.entry.name}</div>
      <div className="post">{props.entry.post}</div>
      <div className="custom">
        <CustomButton />
      </div>
    </div>
  );
};

export default Entry;
