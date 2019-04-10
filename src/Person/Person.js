import React from 'react';
import './Person.css';

// Person is a stateless component is it has no internal state management
// Also known as presentational or dumb components
const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old! </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;