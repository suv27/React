import React, { Component } from 'react';
import styled from 'styled-components';

// INLINE CSS
const Head = styled.header`
  color: palevioletred
  font-size: 65px
  font-weight: bold
  font-family: monospace
  padding: 10px
  background-color: papayawhip
`

export default class Header extends Component {
  render() {
    return (
      <Head>
        City Search
      </Head>
    );
  }
};
