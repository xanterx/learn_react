import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import ErrorBoundry from './ErrorBoundry/ErrorBoundry';
import WithClass from '../hoc/WithClass';

export const AuthContext = React.createContext(false);
class App extends PureComponent {
  constructor(props){
    super(props);
    console.log('[App.js] Inside Constructor',props);
    this.state = {
      person:[
        {id: '1', name: 'Goku', age: 56 },
        {id: '2', name: 'Vegeta', age: 40 },
        {id: '3', name:'Gohan', age:12}
      ],
      showPerson : false,
      toggleCounter : 0,
      authenticated : false
    };
  }

  componentWillMount(){
    console.log('[App.js] Inside Component Will Mount');
  }

  componentDidMount(){
    console.log('[App.js] Inside Component Did Mount');
    
  }

  // shouldComponentUpdate(nextProps,nextState){
  //   console.log('[Update App.js] Inside Component Should Update',nextProps,nextState);
  //   return nextState.showPerson !== this.state.showPerson ||
  //    nextState.person !== this.state.person;
  // }

  // componentWillUpdate(nextProps,nextState){
  //   console.log('[Update App.js] Inside Component Will Update',nextProps,nextState);
  // }

  static getDerivedStateFromProps(nextProps, prevState){
    console.log('[Update App.js] Inside Derived State From Props',nextProps,prevState);
    return prevState;
  }

  getSnapshotBeforeUpdate(){
    console.log('[Update App.js] Inside getSnapshotBeforeUpdate');
  }

  componentDidUpdate(){
    console.log('[Update App.js] Inside Component Did Update');    
  }
  
  // componentWillUnmount() {
  //   console.log('[App.js] Inside Component Wil  UnMount');
  // }

  // state = {
  //   person:[
  //     {id: '1', name: 'Goku', age: 56 },
  //     {id: '2', name: 'Vegeta', age: 40 },
  //     {id: '3', name:'Gohan', age:12}
  //   ],
  //   showPerson : false
  // };

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
    this.setState( (prevState) => {
      return{
        showPerson:!doesShow,
        toggleCounter : prevState.toggleCounter + 1
      };
    });
  }

  loginHandeler = () => {
    this.setState({authenticated:true});
  }

  render() {
    console.log('[App.js] Inside render()');
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
      <WithClass classes = {classes.App}>
        <button onClick={() => {this.setState({showPerson:true});}}>Show Person</button>
        <Cockpit 
          appTitle={this.props.title}
          showPerson={this.state.showPerson}
          person={this.state.person}
          clicked={this.togglePerson}
          counter={this.state.toggleCounter}
          login={this.loginHandeler} />
        <AuthContext.Provider value = {this.state.authenticated}>{person}</AuthContext.Provider>
      </WithClass>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'holla bitches')
  }
}

export default App;
