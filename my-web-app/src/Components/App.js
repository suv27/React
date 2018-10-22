import React from 'react';
import styled from 'styled-components';
import ListOfComponents from './ListOfComponents';
import DrawComponent from './DrawComponent';

const WrapDiv = styled.div`
  display: flex;
`

export default function App() {
  return(
    <WrapDiv>
      <ListOfComponents />
      <DrawComponent />
    </WrapDiv>
  )
}
