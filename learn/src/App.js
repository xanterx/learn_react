import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person:[
      {id: '1', name: 'Goku', age: 56 },
      {id: '2', name: 'Vegeta', age: 40 },
      {id: '3', name:'Gohan', age:12}
    ],
    showPerson : false
  }

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
    persons[pi]=newPerson


    this.setState({
      person: persons
    });
  }

  togglePerson = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson:!doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let person = null;

    if(this.state.showPerson){
      person = (
        <div>
          {this.state.person.map((per, index)=>{
            return <Person 
                click={this.deletePerson.bind(this,index)}
                name={per.name}
                transform={(event) => this.transform(event,per.id)}
                age={per.age}
                key={per.id}>
              </Person>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>I am react app</h1>
        <p>Helllaosd</p>
        <button
          style={style} 
          onClick={this.togglePerson}>Toggle Person</button>
        {person}
      </div>
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'holla bitches')
    );
  }
}

export default App;
