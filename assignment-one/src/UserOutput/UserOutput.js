import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return(
    <div className="UserOutput">
      <p>Hi, {props.username}</p>
      <p>Welcome {props.username}</p>
    </div>
  );
}

export default userOutput;