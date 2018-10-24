import React from 'react';
import styled from 'styled-components';

const MLBwrap = styled.div`
    width: 150px
    height: 50px
    color: #fff
    margin-top: 50px
    background-color: #000
    border: 1px solid #fff
    text-align: center
    :hover{
        color: #000
        background-color: #fff
        border: 1px solid #000
        cursor: pointer
    }
`

const MLB = ({ onClick }) => {
    return(
        <MLBwrap onClick={onClick}>
            <p>MLB</p>
        </MLBwrap>
    )
}

export default MLB;