import React from 'react';
import styled from 'styled-components'

const Left = styled.div`
  width: 30%;
  height: 100vh;
  background-color: #ff9999;
`

export default class ListOfComponents extends React.Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }


  render(){
    return(
      <Left />
    )
  }
}
