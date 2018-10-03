import React, { Component } from 'react';

// IMNPORT CSS MODULES
import styled from 'styled-components';

// IMPORTING COMPONENTS TO MY LAYOUT
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchData from '../SearchData/SearchData';

// INLINE CSS
const Head = styled.div`
  text-align: center
`

const Body = styled.body`
  height: 100vh
  background-color: #000
  ${'' /* #f3d3cb */}
`

export default class Layout extends Component {
  render() {
    return (
      <Body>
        <Head>
          <Header/>
          <SearchData />
          <Footer />
        </Head>
      </Body>
    );
  }
};
