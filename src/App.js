import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState]  = useState({
      persons: [
        {name:'MaxMillin', age:'32'},
        {name:'Manu',age:'26'},
        {name:'Staphnee', age:'25'}
      ],
      otherState: 'some other value'
    });

    console.log(personsState);

    const switchNameHandler = () => {
      // console.log("Was Clicked!");
      // DON'T DO THIS: this.state.persons[0].name = "Maxmillin";
      setPersonsState({
        persons: [
          {name:'Max', age:'35'},
          {name:'Manu',age:'29'},
          {name:'Staphnee', age:'24'}
        ],
        otherState: personsState.otherState
      });
    };
    
    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <p>This is really working!</p>
       <button onClick={switchNameHandler}>Switch Name</button>
       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Chess</Person>
       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, I\'m a React App!!!'))
};

export default app;