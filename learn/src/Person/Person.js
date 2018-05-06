import React from 'react';
import './Person.css'

const person = (props) => {
  return (
    <div className="Person">
      <p> I am funcking {props.name}, i am {props.age} year old</p>
      <p onClick={props.click}>{props.children}</p>
      <input type="text" onChange={props.transfor} value={props.name} />
    </div>
  );
}

export default person;