import React, { Component } from 'react';

// IMPORTING COMPONENTS TO MY LAYOUT
import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Footer />
      </div>
    );
  }
}

export default Layout;
