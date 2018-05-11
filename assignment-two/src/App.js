import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    string : []
  }

  updateState = (event) => {
    const charArr = event.target.value.split('');
    const objArr = charArr.map((i,index)=>{
      return {
        id: index,
        value:i
      }
    });
    this.setState(
      {
        string : objArr
      });
  }

  remove=(event,id)=>{
    const objID = this.state.string.findIndex(i=>{
      return id === i.id;
    });
    let objArr = [...this.state.string]
    objArr.splice(objID,1);
    this.setState({string:objArr});
  }
  
  render() {
    return (
      <div className="App">
        <h1>Assignment 2</h1>
        <input type="text" onChange={this.updateState} value={[...this.state.string].map(a=>{return a.value}).join('')} />
        <p>Length : {this.state.string.length}</p>
        {this.state.string.map((c,index)=>{
          return <CharComponent 
          atom={c.value}
          key={c.id}
          remove={(event)=>this.remove(event,c.id)}
          />
        })}
        <ValidationComponent length = {this.state.lengt} />
      </div>
    );
  }
}

export default App;
