import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import MpInfo from "../common/MpInfo";

class Mps extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getMps()
      .then(res => {
        this.setState({mps: res.mps});
      })
      .catch(function(err){
        debugger;
        console.log('Cannot retrieve issues data.')
      })
  }  

  getMps = async () => {
    const response = await fetch('api/mp/mps');
    return await response.json();
  };

  renderMps() {
    var mps = [];
    for(var key in this.state.mps) {
      mps.push(
        <div key={key} className="col-md-2 col-sm-3 col-4">
          <MpInfo info={this.state.mps[key]} />
        </div>
      );
    }
    return mps;
  }

  render() {
    return (
      <div className="row">
        {this.state.mps ?
            this.renderMps()
        : null}
      </div>
    );
  }
}

export default Mps;
