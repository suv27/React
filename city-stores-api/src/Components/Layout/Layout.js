import React, { Component } from 'react';

// IMPORTING COMPONENTS THAT WILL FORM MY LAYOUT
import Header from '../Header/Header';
import EventList from '../EventList/EventList';

export default class Layout extends Component{

  render(){
    return(
      <div>
        <Header />
        <EventList />
      </div>
    )
  }
}
