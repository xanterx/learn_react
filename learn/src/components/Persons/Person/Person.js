import React,{Component} from 'react';
import st from './Person.css';
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
import {AuthContext} from '../../../containers/App';

class Person extends Component{
  constructor(props){
    super(props);
    console.log('[Per.js] Inside Constructor',props);
    this.inputElement = React.createRef();
  }

  componentWillMount(){
    console.log('[Per.js] Inside Component Will Mount');
  }

  componentDidMount(){
    console.log('[Per.js] Inside Component Did Mount');
    if(this.props.position === 0 ) {
      this.inputElement.current.focus();
    }
  }

  render(){
    console.log('[Per.js] Inside Render');    
    return (
      <WithClass classes={st.Person}>
        <AuthContext.Consumer>
          {auth => auth ? <p>Authenticated</p> : null}
        </AuthContext.Consumer>
        <p> I am funcking {this.props.name}, i am {this.props.age} year old</p>
        <p onClick={this.props.click}>{(this.props.age)*2}</p>
        <input 
          ref={this.inputElement}
          type="text" 
          onChange={this.props.transform} 
          value={this.props.name} />
      </WithClass>
    );
  }
}

Person.propTypes = {
  click : PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  transform:  PropTypes.func
};

export default Person;