import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'James', age: 36 },
      { name: 'Caryn', age: 39 },
      { name: 'Gabriel', age: 2 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    // console.log('Was clicked!')
    // DON'T DO THIS!!! MUTATE STATE DIRECTLY!!! this.state.persons[0].name = "James Andrew Hughes"
    this.setState({
      persons: [
        { name: 'James Andrew Hughes', age: 36 },
        { name: 'Caryn', age: 27 },
        { name: 'Gabriel', age: 2 }
      ]
    })
  }

  render() {
    // JSX must have one root element
    // So various elements need to be included within the div
    // e.g. both h1 elements here
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <h1>Another heading</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} >My Hobbies: BibleMan, Superheroes!</Person>
      </div>
    );
    
    // If you don't use JSX you would need to create react elements as so:
    // createElement takes at least 3 args
    // 1. The element we want to render to the DOM
    // 2. configuration for this
    // 3. Any amount of children (i.e. what's nested inside div)

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
