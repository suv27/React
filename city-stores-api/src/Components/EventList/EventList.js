import React, { Component } from 'react';
import styled from 'styled-components';

export default class EventList extends Component {

  // class constructor
  constructor(){
    super();
    this.state = {
      item: [], // an array for the data that we will be fetching from the api
      isLoaded: false // to be able to know is the data has been loaded or not
    }
  }

  // RUNS AFTER THE RENDER METHOD THEN UPDATES THE RENDER METHOD
  componentDidMount(){

    fetch('https://data.cityofnewyork.us/resource/gybi-64g5.json')
      .then(data => data.json())
      .then(json => {
        // setting the state of the json
        this.setState({
          item: json,
          isLoaded: true
        })
      })
  }

  render(){

    // so we can have access to item and isLoaded from inside of the render
    var { isLoaded, item } = this.state;
    if(!isLoaded) {
      return(
        <div>
          {console.log('Data is Loading...')}
        </div>
      )
    }

    let id = 0;

    return(
      <div>
        <ul>
            {item.map(item => (
              <li key={id+=1}>
                <h1>{item.category_name} </h1>
              </li>
            ))}
        </ul>
      </div>
    )
  }
};
