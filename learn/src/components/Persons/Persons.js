import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.person.map((per, index)=>{
  return  <Person 
    click={props.clicked.bind(props,index)}
    name={per.name}
    transform={(event) => props.transform(event,per.id)}
    age={per.age}
    key={per.id}>
  </Person>;
});
export default persons;