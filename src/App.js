import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// App is a stateful component as it manages state
// Also known as smart components or container components
class App extends Component {
  state = {
    persons: [
      { id: 'adfd', name: 'James', age: 36 },
      { id: 'gfdsd', name: 'Caryn', age: 39 },
      { id: 'jlijkl',name: 'Gabriel', age: 2 }
    ],
    showPersons: false
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'James', age: 36 },
        { name: event.target.value, age: 27 },
        { name: 'Gabriel', age: 2 }
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    // 2 options below showing how to copy an array:
    // Option 1 to use slice() with no argument
    // Option 2 to use spread operator
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  // Inline style being used here to style the button
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}/>
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <h1>Another heading</h1>
        <button
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
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
