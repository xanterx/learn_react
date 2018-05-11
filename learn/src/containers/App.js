import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import ErrorBoundry from './ErrorBoundry/ErrorBoundry';

class App extends Component {
  state = {
    person:[
      {id: '1', name: 'Goku', age: 56 },
      {id: '2', name: 'Vegeta', age: 40 },
      {id: '3', name:'Gohan', age:12}
    ],
    showPerson : false
  };

  deletePerson= (personIndex) => {
    // const person = this.state.person.slice();
    const person = [...this.state.person];
    person.splice(personIndex,1);
    this.setState({person:person});
  }

  transform = (event,id) => {
    console.log('Was treansformed clicked');
    const pi = this.state.person.findIndex(p=>{
      return p.id === id;
    });

    const newPerson = {
      ...this.state.person[pi]
    };

    newPerson.name = event.target.value;

    const persons = [...this.state.person];
    persons[pi]=newPerson;


    this.setState({
      person: persons
    });
  }

  togglePerson = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson:!doesShow});
  }

  render() {
    let person = null;

    if(this.state.showPerson){
      person = (
        <div>
          <Persons 
            person={this.state.person}
            clicked = {this.deletePerson}
            transform = {this.transform}
          />
        </div>
      );

    }

    return (
      <div className={classes.App}>
        <Cockpit 
          showPerson={this.state.showPerson}
          person={this.state.person}
          clicked={this.togglePerson} />
        {person}
      </div>
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'holla bitches')
    );
  }
}

export default App;
