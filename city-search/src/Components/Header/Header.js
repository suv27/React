import React from 'react';
import styled from 'styled-components';

// INLINE CSS
const Head = styled.header`
  color: #000
  height: 80px
  font-size: 65px
  font-weight: bold
  font-family: monospace
  background-color: papayawhip
`

// color to show data 'palevioletred'

const Header = () => {
  return (
    <Head>
      City Search
    </Head>
  );
};

export default Header;
