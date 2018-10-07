import React, { Component } from 'react';
import styled from 'styled-components';

// IMPORTING COMPONENTS
import Error404 from '../Error404/Error404';

const OuterBox = styled.div`
  width: 80%
  margin: 85px auto
`

const Ul = styled.ul`
  padding: 0
`

const Cards = styled.div`
  width: 28%
  height: 200px
  color: #FFF
  display: inline-flex
  border: 1px solid #F2F2F2
  border-radius: 10px
  list-style: none
  padding: 1%
  margin: 1%

  :hover{
    color: #000
    background-color: #F2F2F2
    box-shadow: 0 0 25px salmon
    transition: all 0.4s ease;
  }
`

export default class EventList extends Component {

  // class constructor
  constructor(props){
    super(props);
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
      return <Error404 />
    }

    let id = 0;

    return(
      <OuterBox>
        <Ul>
            {item.map(item => (
              <Cards>
                <li key={id++}>
                  <h1>{item.category_name} </h1>
                  <p>{item.description}</p>
                  <p>${item.unit_price}</p>
                </li>
              </Cards>
            ))}
        </Ul>
      </OuterBox>
    )
  }
};
