import React from 'react';
import classes from './Cockpit.css';

const cockpit=(props)=>{
  const assignedclasses = [];
  let btnClass = '';
  if(props.showPerson){
    btnClass = classes.Red;
  }

  if (props.person.length <= 2){
    assignedclasses.push(classes.red);
  }
  if (props.person.length <= 1){
    assignedclasses.push(classes.bold);
  }

  return(
    <div className={classes.Cockpit}>
      <h1>I am react app</h1>
      <p className={assignedclasses.join(' ')}>Kamehame haaa....!!!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Person</button>
    </div>
  );
};


export default cockpit;