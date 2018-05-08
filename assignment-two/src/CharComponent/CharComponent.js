import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
  return(
    <div className="cc" onClick={props.remove}>
      <p className="pp">{props.atom}</p>
    </div>
  );
}

export default charComponent