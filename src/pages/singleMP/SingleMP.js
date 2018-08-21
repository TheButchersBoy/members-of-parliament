import React, { Component } from 'react';
import temp from '../../assets/temp.png';

class SingleMP extends Component {
  render() {
    return (
      <div>
        <img src={temp} style={{width: 100}} />
        <h2>John Smith</h2>
        <p>Labour party</p>
      </div>
    );
  }
}

export default SingleMP;