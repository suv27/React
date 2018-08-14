// REACT NEEDS TO BE IMPORT FROM THE REACT LIBRARY,
// IS RESPOSIBLE TO RENDER ANYTHING TO THE 'DOM'
import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

// THIS IS A REACT COMPONENT
class App extends Component {

  state = {
    persons: [
      { id: 'asdfd', name: 'Max', age: 28 },
      { id: 'SDEQs', name: `Starlyn`, age: 21},
      { id: '234rs', name: `David`, age: 15 },
    ],
    otherState: `some other value`,
    showPersons: false,
  };

  // switchNameHandler = (newName) => {
  //   // alert(`BUTTON CLICKED...!`);
  //   // DON'T DO THIS this.state.persons[0].name = `Maxamimilian`;
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: `Starlyn`, age: 21},
  //       { name: `David`, age: 27 }
  //     ]
  //   })
  // }

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // const person = this.state.persons[personIndex];
    const person = { ...this.state.persons[personIndex] };

    // updating the person nameChangeHandler
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1); // REMOVES ONE ELEMENT FROM THE ARRAY
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };

  render() {
    let persons = null;
    let btnClass = '';

    // IF `showPersons` IS TRUE THE WE WILL MAKE `persons` NOT NULL
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (

              // RENDERING A LIST OF PERSONS FROM AN ARRAY
            <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              change={(event) => this.nameChangeHandler(event, person.id) } />
            );
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Welcome</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button
          className={btnClass}
          onClick={ this.togglePersonHandler }>
          Toggle Persons
        </button>
         {persons}
      </div>
    );
  }
}

export default App;
