// REACT NEEDS TO BE IMPORT FROM THE REACT LIBRARY,
// IS RESPOSIBLE TO RENDER ANYTHING TO THE 'DOM'
import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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

    // IF `showPersons` IS TRUE THE WE WILL MAKE `persons` NOT NULL
    if (this.state.showPersons) {
      persons =  <Persons
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.deletePersonHandler} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle = {this.props.title}
          showPersons = {this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
