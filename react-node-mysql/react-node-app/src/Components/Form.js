import React, { Component } from 'react';

export default class Form extends Component{

  constructor(props){
    super(props)
    this.state = {
      user: [],
    }
  }

  componentDidMount(){
    fetch('http://localhost:4000/users')
    .then(response => { response.json() })
    .then(users => this.setState({ users }))
  }

  render(){

    let { users } = this.state;

    return(
      <div>
        <table>
          <thead>
            <tr>
              <th>Usernames</th> |
              <th>Passcodes</th>
            </tr>
          </thead>
          <tbody>
            {users.map((username, passcode) =>
              <tr><td>{username}</td><td>{passcode}</td></tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}
