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

export default class MLB extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showData: false,
        }

        this.componentHandler = this.componentHandler.bind(this);
    }

    // eventlistener that toggles on and off a button or bool value
    componentHandler(){
        this.setState({
            showData: true,
        })
        let { showData } = this.state;
        if(showData){
            return( <p>Hello World</p> )
        }
    }

    render(){

        return(
            <MLBwrap onClick={this.componentHandler}>
                <p>MLB</p>
            </MLBwrap>
        )
    }
}