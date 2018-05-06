import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person:[
      {name: 'Goku', age: 56 },
      {name: 'Vegeta', age: 40 },
      {name:'Gohan', age:12}
    ]
  }

  switchName = (newName) => {
    console.log('Was clicked');
    this.setState({
      person: [
        { name: newName, age: 56 },
        { name: 'Vegeta', age: 40 },
        { name: 'Gohan', age: 12 }
      ]
    });
  }

  transform = (event) => {
    console.log('Was treansformed clicked');
    this.setState({
      person: [
        { name: 'goku', age: 56 },
        { name: event.target.value, age: 40 },
        { name: 'Gohan', age: 12 }
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>I am react app</h1>
        <p>Helllaosd</p>
        <button
          style={style} 
          onClick={this.switchName.bind(this,'Kakarot')}>Switch</button>
        <Person 
          name={this.state.person[0].name} 
          age={this.state.person[0].age} />
        <Person 
          name={this.state.person[1].name} 
          age={this.state.person[1].age}
          click={this.switchName.bind(this, 'Ultra Goku')}
          transfor = {this.transform}>I am the prince</Person>
        <Person 
          name={this.state.person[2].name} 
          age={this.state.person[2].age}/>
      </div>
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'holla bitches')
    );
  }
}

export default App;
