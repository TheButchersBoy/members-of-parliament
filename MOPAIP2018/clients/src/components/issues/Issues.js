import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import AllIssues from "../common/AllIssues";

class Issues extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getIssues()
      .then(res => {
        this.setState({issues: res});
      })
      .catch(function(err){
        console.log('Cannot retrieve issues.')
      })
  }  

  getIssues = async () => {
    const response = await fetch('/api/issues/issues');
    return await response.json();
  };

  render() {
    return (
      <div className="row">
        {this.state.issues ?
          <div className="col-md-12">
            <div className="container-fluid bg-3 text-center">    
              <AllIssues issues={this.state.issues}/>
            </div>
          </div>
        : null}
      </div>
    );
  }
}

export default Issues;
