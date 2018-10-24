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
    super(props)
    this.state = {
      showMLBData: false,
    }
    //this.toggleMLBData = this.toggleMLBData.bind(this);
  }

  // EVENT LISTENERS
  toggleMLBData(){
    console.log("MLB CLICKED");
    let { showMLBData } = this.state;
    if(showMLBData){
      this.setState({
        showMLBData: false,
      })
      console.log("Data Showing...");
    } else{
      this.setState({
        showMLBData: true,
      })
      console.log("Loading...")
    }
  }

  render(){

    return(
      <Left >
        <MLB onClick={this.toggleMLBData} />
      </Left>
    )
  }
}
