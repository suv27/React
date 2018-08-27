import React from 'react';
import classes from './Cockpit.css'; // JUST GIVE IT A NAME FOR ABILITY TO USE THE FILE CONTENT

const cockpit = (props) => {

  const assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className = {classes.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>This is really working</p>
      <button
        className={btnClass}
        onClick={ props.clicked }>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
