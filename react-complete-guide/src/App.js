// REACT NEEDS TO BE IMPORT FROM THE REACT LIBRARY,
// IS RESPOSIBLE TO RENDER ANYTHING TO THE 'DOM'
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// THIS IS A REACT COMPONENT
class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: `Starlyn`, age: 21},
      { name: `David`, age: 15 }
    ],
    otherState: `some other value`,
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // alert(`BUTTON CLICKED...!`);
    // DON'T DO THIS this.state.persons[0].name = `Maxamimilian`;
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: `Starlyn`, age: 21},
        { name: `David`, age: 27 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: `Max`, age: 28 },
        { name: `Starlyn`, age: 21},
        { name: event.target.value, age: 27 }
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    // IF `showPersons` IS TRUE THE WE WILL MAKE `persons` NOT NULL
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!!!')}>My hobbies: racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            change={this.nameChangeHandler}/>
        </div>
      );
    }

    return (
      <div className='App'>
        <h1>Welcome</h1>
        <button
          style={style}
          onClick={ this.togglePersonHandler }>
          Toggle Persons
        </button>
         {persons}
      </div>
    );

    // TAKES AT LEATS 3 ELEMENTS
    // FIRST('THE ELEMENT WE WANT TO RENDER TO THE DOM')
    // SECOND('THE CONFIGURATION FOR THIS, A JS OBJECT[OPTIONAL]')
    // THIRD('ANY AMOUNT OF CHILDREN [WHATS NESTED INSIDE THE DIV]')
    //return React.createElement('div', {className: 'person'}, React.createElement('h1', null, 'Hi, I\'m a React app'));
  }
}

export default App;
