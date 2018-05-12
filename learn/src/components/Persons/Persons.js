import React , {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
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
  
  componentWillReceiveProps(nextProps){
    console.log('[Update Persons.js] Inside Component Will Props here',nextProps);
  }
  
  // shouldComponentUpdate(nextProps,nextState){
  //   console.log('[Update Persons.js] Inside Component Should Update',nextProps,nextState);
  //   return nextProps.person !== this.props.person ||
  //    nextProps.transform !== this.props.transform ||
  //    nextProps.clicked !== this.props.clicked;
  //   // return true;
  // }

  componentWillUpdate(nextProps,nextState){
    console.log('[Update Persons.js] Inside Component Will Update',nextProps,nextState);    
  }

  componentDidUpdate(){
    console.log('[Update Persons.js] Inside Component Did Update');    
  }
  
  componentWillUnmount() {
    console.log('[Persons.js] Inside Component Wil  UnMount');
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