import React from 'react';
import styled from 'styled-components';
import MLB from '../MLB/MLB';

const Left = styled.div`
  width: 30%
  height: 100vh
  background-color: #ff9999
  display: flex
  flex-flow: column nowrap
  align-items: center
`

export default class ListOfComponents extends React.Component{
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){

    return(
      <Left>
        <MLB onClick={this.props.onClick}/>
      </Left>
    )
  }
}
