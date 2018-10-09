import React, { Component } from 'react';
import styled from 'styled-components';

// IMPORTING COMPONENTS
import Error404 from '../Error404/Error404';

const OuterBox = styled.div`
  width: 90%
  border: 1px solid #fff
  margin: 100px auto
`

const Ul = styled.ul`
  padding: 0
  margin: 0
  display: flex
  flex-direction: row
  flex-wrap: wrap;
  justify-content: space-evenly
`

const Cards = styled.div`
  width: 350px
  height: 200px
  color: #000
  border: 1px solid #F2F2F2
  border-radius: 10px
  list-style: none
  padding: 15px
  margin: 20px
  background: linear-gradient(35deg, #CCFFFF, #FFCCCC);

  :hover{
    color: #000
    background-color: #F2F2F2
    box-shadow: 0 0 25px salmon
    transition: all 0.4s ease;
  }
`

const ReadMore = styled.button`
  color: red
  background-color: transparent
  border: 0
  font-size: 16px

  :hover{
    color: #000
    background-color: salmon
    border: 0
    border-radius: 7px
    cursor: pointer
  }
`

export default class EventList extends Component {

  // class constructor
  constructor(props){
    super(props);
    this.state = {
      item: [], // an array for the data that we will be fetching from the api
      dataLoaded: false, // to be able to know is the data has been loaded or not
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
          dataLoaded: true
        })
      })
  }

  shrinkText = (text, length) => {
    let shrinkText = text.substring(0, 182);
    return shrinkText;
  }

  render(){

    // so we can have access to item and dataLoaded from inside of the render
    let { dataLoaded, item } = this.state;
    if(!dataLoaded) {
      return <Error404 />
    }

    // variables
    let id = 0;

    return(
      <OuterBox>
        <Ul>
            {item.map((item) => (
              <Cards key={id++}>
                <li>
                  <h2>{item.category_name}</h2>
                  <p>
                    {this.shrinkText(item.description, 180)}
                    <ReadMore>
                      Read More...
                    </ReadMore>
                  </p>
                  <p>${item.unit_price}</p>
                </li>
              </Cards>
            ))}
        </Ul>
      </OuterBox>
    )
  }
};
