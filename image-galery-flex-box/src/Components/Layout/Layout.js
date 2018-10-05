import React, { Component } from 'react';
import styled from 'styled-components';

// IMPORTING COMPONENTS THAT WILL FORM MY LAYOUT
import Header from '../Header/Header';

const Body = styled.body`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export default class Layout extends Component{
  render(){
    return(
      <Header />
    )
  }
}
