import React, { Component } from "react";
import { Link } from "react-router-dom";
import MpFace from "../shared/MpFace";
import Topic from "../shared/Topic";
import axios from 'axios';

class MyMP extends Component {
  
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

  hasVote(issue) {
    return issue.votesFor.includes(issue.id) || issue.votesAgainst.includes(issue.id);
  }

  renderVote(issue) {
    return issue.votesFor.includes(this.state.data.mpData.id) 
      ? <p style={{fontWeight: 'bold', color: 'green'}}>for</p>
      : <p style={{fontWeight: 'bold', color: 'red'}}>against</p>
  }

  getIssues() { // TODO: make more seperate components
    if (this.state.data) {
      var topics = [];
      for(var key in this.state.data.topicsAndIssues) {
        var issues = [];
        this.state.data.topicsAndIssues[key].map((issue, i) => { 
          if (this.hasVote(issue)) {
            issues.push(
              <div key={i}>
                <p>{issue.title}</p>
                {this.renderVote(issue)}
              </div>
            )
          }
        });
        topics.push(
          <Topic title={key} className="col-lg-4 col-md-6">
            {issues}
          </Topic>
        );
      }
      return topics;
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <MpFace src=""/>
            <h3>{this.getMpName()}</h3>
            <br />
            <div className="container-fluid bg-3 text-center">    
              <div className="row">
                <h3></h3>
                {this.getIssues()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyMP;
