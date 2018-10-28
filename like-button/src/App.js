import React, { Component } from 'react';

/* CSS STYLING */
let div = {
  display: 'flex',
  justifyContent: 'center',
}
let btn = {
  color: '#FFF',
  width: '150px',
  height: '80px',
  fontSize: '20px',
  borderRadius: '8px',
  border: '1px solid salmon',
  backgroundColor: '#29436d',
  outline: 'none',
};

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      like: false,
      count: 0,
    }

    // THE 'THIS' WORD FOR THE
    this.toggleLikeHandler = this.toggleLikeHandler.bind(this);
  }

  toggleLikeHandler(){
    let { count } = this.state;
    if(this.state.like){
      this.setState({
        like: false,
        count: count - 1,
      })
    }
    else{
      this.setState({
        like: true,
        count: count + 1,
      })
    }

  }

  render() {
    return(
      <div>
        <div style={div}>
          <button style={btn} onClick={this.toggleLikeHandler}>
            Like | <span>{this.state.count}</span>
          </button>
        </div>
      </div>
    )
  }
}
