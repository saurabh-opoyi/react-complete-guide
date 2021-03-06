import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id:1, name:'Max', age:'32'},
      {id:2, name:'Manu',age:'26'},
      {id:3,name:'Staphnee', age:'25'}
    ],
    otherState: 'some other value',
    showPersons: false
  };

  deletePersonsHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons}); 
  };

  nameChangeHandler = (event, id) => {
    
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personIndex])
    
    person.name = event.target.value;
  
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    const style = {
       backgroundColor: 'green',
       color:'white',
       font: 'inherit',
       border: '1px solid blue',
       padding: '8px',
       cursor: 'pointer',
       ':hover': {
         backgroundColor: 'lightgreen',
         color: 'black'
       }
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
              return <Person
                       click={()=> this.deletePersonsHandler(index)}
                       name={person.name}
                       age={person.age}
                       key={person.id}
                       changed={(event) => this.nameChangeHandler(event, person.id)} />  
          })}
        </div>
      );
      style.backgroundColor='red';
      style[':hover'] ={
        backgroundColor:'salom',
        color:'black'
      };
    }

    const classes = [];//['red','bold'].join(' ');
    if(this.state.persons.length <= 2){
      classes.push('red'); //['red']
    }

    if(this.state.persons.length <= 1){
      classes.push('bold'); //['red','bold]
    }

    return (
      <div className="App">
        
       <h1>Hi, I'm a React App</h1>
       <p className={classes.join(' ')}>This is really working!</p>
       <button
          style={style} 
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
       {persons}   
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, I\'m a React App!!!'))
  }
}

export default Radium(App);