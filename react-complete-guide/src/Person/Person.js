import React from 'react';
import './Person.css';

const person = (props) => {


  return (
    <div className='person'>
      <p onClick={props.click}>My name is {props.name}, I'm {props.age} years old!</p>
      <p>{props.children}</p>
      <input type='text' onChange={props.change} value={props.name} />
    </div>
  );
};

export default person;
