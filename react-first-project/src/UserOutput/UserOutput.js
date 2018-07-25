import React from 'react';
import UserOutput from './UserOutput.css';

const userOutput = (props) => {
  return (
      <div className='UserOutput'>
        <p>Username: {props.usrName} </p>
        <p>I hope I'will be in your class in the fall</p>
      </div>
  );
};

export default userOutput;
