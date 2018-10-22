import React from 'react';
import styled from 'styled-components'

const Right = styled.div`
  width: 70%;
  height: 100vh;
  background-color: #99c2ff;
`

export default class DrawComponent extends React.Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }


  render(){
    return(
      <Right />
    )
  }
}
