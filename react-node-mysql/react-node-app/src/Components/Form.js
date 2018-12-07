import React, { Component } from 'react';

export default class Form extends Component{

  constructor(props){
    super(props)
    this.state = {
      users: {
        username: '',
        passcode: '',
      }
    }
  }

  componentDidMount(){

    this.getUser();

  }

  getUser = () => {
    fetch('http://localhost:4000/users', {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
    }).then((x)=> console.log(x)).catch((err)=>console.log(err));
  }
  addUser = () => {
    // const { users } = this.state;
    // fetch(`http://localhost:4000/login/add=username${users.username}&passcode=${users.passcode}`)
  }

  render(){
    return(
      <div>
        <form>
          <div>
            <label>Username:</label>
            <input
              id="username"
              type="text"
              placeholder="Username" />
          </div>
          <div>
            <label>Password:</label>
            <input
              id="password"
              type="password"
              placeholder="Password" />
          </div>
          <div>
            <button
              type="submit"
              onClick={this.getUser}>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
