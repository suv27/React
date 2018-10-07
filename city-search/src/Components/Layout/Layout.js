import React, { Component } from 'react';

// IMNPORT CSS MODULES
import styled from 'styled-components';

// IMPORTING COMPONENTS TO MY LAYOUT
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Data from '../Data/Data';

// INLINE CSS
const Head = styled.div`
  height: 100vh
  background-color: #000
  text-align: center
`

export default class Layout extends Component {
  render() {
    return (
      <Head>
        <Header/>
        <Data />
        <Footer />
      </Head>
    );
  }
};
