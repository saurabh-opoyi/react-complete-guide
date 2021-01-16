import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:'Max', age:'32'},
      {name:'Manu',age:'26'},
      {name:'Staphnee', age:'25'}
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    console.log("Was Clicked!")
    this.setState({
      persons: [
        {name:newName, age:'35'},
        {name:'Manu',age:'29'},
        {name:'Staphnee', age:'27'}
      ]
    })
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name:'Max', age:'32'},
        {name: event.target.value,age:'26'},
        {name:'Staphnee', age:'25'}
      ]
    })
  };

  render() {
    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <p>This is really working!</p>
       <button onClick={()=> this.switchNameHandler('Maxmilanium')}>Switch Name</button>
       <Person 
          name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <Person click={this.switchNameHandler.bind(this,'Maxi')}
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangeHandler}>My Hobbies: Chess</Person>
       <Person 
          name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, I\'m a React App!!!'))
  }
}

export default App;
