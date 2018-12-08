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

    let { user } = this.state;
    if(user.length !== 0){
      return(
        <div>
          {console.log('Not Empty')}
        </div>
      )
    } else{
        return(
          <div>
            {console.log(`Users is ${user}`)}
            // {user.map(x => console.log('User: ', x.username))}
          </div>
        )
      }
    }
}
