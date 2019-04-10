import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// App is a stateful component as it manages state
// Also known as smart components or container components
class App extends Component {
  state = {
    persons: [
      { name: 'James', age: 36 },
      { name: 'Caryn', age: 39 },
      { name: 'Gabriel', age: 2 }
    ]
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!')
    // DON'T DO THIS!!! MUTATE STATE DIRECTLY!!! personsState.persons[0].name = "James Andrew Hughes"
    this.setState({
      persons: [
        { name: newName, age: 36 },
        { name: 'Caryn', age: 27 },
        { name: 'Gabriel', age: 2 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'James', age: 36 },
        { name: event.target.value, age: 27 },
        { name: 'Gabriel', age: 2 }
      ]
    })
  }

  // Note 2 different syntax examples for passing arguments
  // 2 e.g.'s on line 40 and on line 52

  // Inline style being used here to style the button
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    // JSX must have one root element
    // So various elements need to be included within the div
    // e.g. both h1 elements here
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <h1>Another heading</h1>
        <button
        style={style}
        onClick={() => this.switchNameHandler('Reginald')}>Switch name</button>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person 
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
        />
        <Person 
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, 'Tennessee')} >My Hobbies: BibleMan, Superheroes!
        </Person>
      </div>
    );
    
    // Can pass methods as props as you can see above with switchNameHandler
    // being passed to click property
    // Can pass click handlers from child components to Parent components
    // as child component doesn't have access to the state
    
    // If you don't use JSX you would need to create react elements as so:
    // createElement takes at least 3 args
    // 1. The element we want to render to the DOM
    // 2. configuration for this
    // 3. Any amount of children (i.e. what's nested inside div)

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
