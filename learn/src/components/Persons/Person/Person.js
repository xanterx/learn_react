import React,{Component} from 'react';
import st from './Person.css';

class Person extends Component{
  constructor(props){
    super(props);
    console.log('[Per.js] Inside Constructor',props);
  }

  componentWillMount(){
    console.log('[Per.js] Inside Component Will Mount');
  }

  componentDidMount(){
    console.log('[Per.js] Inside Component Did Mount');
  }
  render(){
    console.log('[Per.js] Inside Render');    
    return (
      <div className={st.Person}>
        <p> I am funcking {this.props.name}, i am {this.props.age} year old</p>
        <p onClick={this.props.click}>{(this.props.age)*2}</p>
        <input type="text" onChange={this.props.transform} value={this.props.name} />
      </div>
    );
  }
}

export default Person;