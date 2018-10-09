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
      .then(res => {
        if (!res.nompfound) {
          this.setState({mpData: res});
        }
      })
      .catch(function(err){
        console.log('Cannot retrieve MP data.')
      })

    this.getIssues()
      .then(res => {
        if (!res.noissuesfound) {
          this.setState({issues: res});
        }
      })
      .catch(function(err){
        console.log('Cannot retrieve issues.')
      })  
  }  

  getMpData = async () => {
    var apiUrl = "";
    if (this.props.match.params.mpId) {
      apiUrl = `/api/mp/mp/${this.props.match.params.mpId}`
    } else if (this.props.match.params.postcode){
      apiUrl = `/api/mp/mp/postcode/${this.props.match.params.postcode}`
    }
    const response = await fetch(apiUrl);
    return await response.json();
  };

  getIssues = async () => {
    const response = await fetch('/api/issues/issues');
    return await response.json();
  };

  render() {
    return (
      <div className="row">
        {this.state.mpData && this.state.issues ?
          <div className="col-md-12 text-center">
            <MpFace id={this.state.mpData._id}/>
            <h3>{this.state.mpData.firstName} {this.state.mpData.lastName}</h3>
            <p>Party: {this.state.mpData.party}</p>
            <br />
            <div className="container-fluid bg-3 text-center">    
              <AllIssues issues={this.state.issues} mpData={this.state.mpData}/>
            </div>
          </div>
        : null }  
      </div>
    );
  }
}

export default MyMp;
