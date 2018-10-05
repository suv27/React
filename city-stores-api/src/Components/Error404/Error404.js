import React, { Component } from 'react';
import styled from 'styled-components';

const Error = styled.div`
  color: red
  width: 350px
  font-size: 30px
  border: 2px solid white
  border-radius: 20px
  text-align: center
  margin: 200px auto;
  line-height: 0.5em
`

export default class Error404 extends Component {
  render(){
    return(
      <Error>
        <h1>Error 404</h1>
        <h6>Data wasn't loaded</h6>
        {console.log(`Data Wasn't loaded...`)}
      </Error>
    )
  }
}
