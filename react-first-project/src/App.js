import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    usernames: 'supermax'
  }

  usernameChangeHandler = (event) => {
    this.setState({
      usernames: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <UserInput
          change={this.usernameChangeHandler}
          currentName={this.state.usernames}/>
        <UserOutput usrName={this.state.usernames} />
        <UserOutput usrName={this.state.usernames} />
        <UserOutput usrName= 'Max' />
      </div>
    );
  }
}

export default App;
