import React , {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props){
    super(props);
    console.log('[Persons.js] Inside Constructor',props);
  }

  componentWillMount(){
    console.log('[Persons.js] Inside Component Will Mount');
  }

  componentDidMount(){
    console.log('[Persons.js] Inside Component Did Mount');
  }
  
  render() {
    console.log('[Persons.js] Inside Render');
    
    return this.props.person.map((per, index)=>{
      return  <Person 
        click={this.props.clicked.bind(this.props,index)}
        name={per.name}
        transform={(event) => this.props.transform(event,per.id)}
        age={per.age}
        key={per.id}>
      </Person>;
    });
  }
}

export default Persons;