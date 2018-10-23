import React from 'react';
import styled from 'styled-components';
import ListOfComponents from './ListOfComponents/ListOfComponents';
import DrawComponent from './DrawComponent/DrawComponent';

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
