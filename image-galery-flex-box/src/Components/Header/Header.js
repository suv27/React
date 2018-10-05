import React, { Component } from 'react';
import styled, { injected } from 'styled-components';

const Head = styled.div`
  height: 80px;
  width: 100%;
  background-color: #353a44;
  border-bottom: 1px solid salmon;
  top: 0;
  position: absolute;
`
const Title = styled.h1`
  color: salmon
  text-align: center
`

export default class Header extends Component{
  render(){
    return(
      <Head>
        <Title>
          Image Gallery
        </Title>
      </Head>
    )
  }
};
