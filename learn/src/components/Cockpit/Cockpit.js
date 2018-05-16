import React from 'react';
import classes from './Cockpit.css';
// import Aux from '../../hoc/Aux'; Also <> but not supported by Linters

const cockpit=(props)=>{
  const assignedclasses = [];
  let btnClass = classes.Button;
  if(props.showPerson){
    btnClass = [classes.Button,classes.Red].join(' ');
  }

  if (props.person.length <= 2){
    assignedclasses.push(classes.red);
  }
  if (props.person.length <= 1){
    assignedclasses.push(classes.bold);
  }
  const REACT_VERSION = React.version;

  return(
    <React.Fragment>
      <h1>{props.appTitle}-{REACT_VERSION}</h1>
      <p className={assignedclasses.join(' ')}>Kamehame haaa....!!!</p>
      <p>{props.counter}</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Person</button>
    </React.Fragment>
  );
};


export default cockpit;