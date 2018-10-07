import React, { Component } from 'react';
import styled from 'styled-components';

// INLINE CSS
const Input = styled.input`
  width: 300px
  padding: 15px
  margin-top: 10px
  font-size: 18px
`

export default class Data extends Component {

  // constructor of the pullingdata component
  constructor(props) {
    super(props);
    this.data = this.data.bind(this);
    this.state = {
      info: [],
      value: '',
    };
  };

  data = (props) => {
    this.setState({
      value: props.target.value,
    }, () => {
      console.log(this.props.value);
    });

    console.log(this.state.value);

    let url = 'http://ctp-zip-api.herokuapp.com/zip/' + this.state.value;

    if (props.target.value > 5 || props.target.value < 1) {
      this.setState({ info: [] });
      return;
    }

    fetch(url).then((response) => {
        // CHECKING IF EVERYTHING IS WELL
        if (response.status === 200) return response.json();
        else throw 'Not Found';
      }).then((jsonData) => {
      console.log(jsonData);
      this.setState({ info: jsonData });
    }).catch((error) => {
      console.log(error);
    });

  };

  render() {
    return (
      <div>
        <Input type="text" placeholder="Search" value = {this.state.value} onChange={this.data}></Input>
      </div>
    );
  }
};
