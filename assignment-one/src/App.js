import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state={
    username:[
      'Goku',
      'Vegeta'
    ]
  }

  transform = (event) =>{
    this.setState({
      username:[
        'Ultra Goku',
        event.target.value
      ]
    });
  }

  render() {

    return (
      <div className="App">
        <h1>DBZ</h1>
        <UserInput changed={this.transform} val={this.state.username[1]}/>
        <UserOutput username={this.state.username[0]}/>
        <UserOutput username={this.state.username[1]}/>
      </div>
    );
  }
}

export default App;