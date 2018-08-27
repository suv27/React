import React from 'react';
import classes from './Person.css';

const person = (props) => {
  const rnd = Math.random();

  if (rnd > 0.7) {
    throw new Error('Something went wrong');
  }

  return (
    <div className={classes.person}>
      <p onClick={props.click}>My name is {props.name}, I'm {props.age} years old!</p>
      <p>{props.children}</p>
      <input type='text' onChange={props.change} value={props.name} />
    </div>
  );
};

export default person;
