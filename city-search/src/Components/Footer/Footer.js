import React from 'react';
import styled from 'styled-components';

//IMPORT CSS
const Foot = styled.footer`
  color: #000
  width: 100%
  font-size: 12px
  font-weight: 800
  bottom: 0
  position: absolute
  padding: 10px
  background-color: #fdefd2
`

const Footer = () => {
  return (
    <Foot>
      @Starlyn Urena Ventura
    </Foot>
  );
};

export default Footer;
