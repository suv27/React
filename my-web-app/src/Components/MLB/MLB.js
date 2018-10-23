import React from 'react';
import styled from 'styled-components';

const MLBwrap = styled.div`
    width: 150px
    height: 50px
    color: white
    background-color: #000
    border: 1px solid white
    text-align: center
    display: flex
    align-items: center
`

export default class MLB extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showData: false,
        }
    }

    render(){

        // eventlistener that toggles on and off a button or bool value

        return(
            <MLBwrap>
                <p>I am from MLB</p>
            </MLBwrap>
        )
    }
}