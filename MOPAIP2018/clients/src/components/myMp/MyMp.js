import React, { Component } from "react";
import { Link } from "react-router-dom";
import MpFace from "../common/MpFace";
import Topic from "../common/Topic";
import AllIssues from "../common/AllIssues";
import axios from 'axios';

class MyMp extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getMpData()
      .then(data => {
        this.setState({data: data});
      })
      .catch(function(err){
        console.log('Cannot retrieve MP data.')
      })
  }  

  getMpData = async () => {
    const response = await fetch(`/api/mp/getData?postcode=${this.props.match.params.postcode}`);
    return await response.json();
  };

  getMpName() {
    if (this.state.data) {
      return this.state.data.mpData.name;
    }
  }  

  render() {
    return (
      <div className="row">
        {this.state.data ?
          <div className="col-md-12 text-center">
            <MpFace src=""/>
            <h3>{this.getMpName()}</h3>
            <br />
            <div className="container-fluid bg-3 text-center">    
              <AllIssues issues={this.state.data.issues} mpData={this.state.data.mpData}/>
            </div>
          </div>
        : null }  
      </div>
    );
  }
}

export default MyMp;
