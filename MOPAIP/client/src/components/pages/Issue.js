import React, { Component } from "react";
import { Link } from "react-router-dom";
import BarChart from "../shared/BarChart";
import axios from 'axios';

class Issues extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getIssueData()
      .then(res => {
        this.setState({issueData: res.issueData});
      })
      .catch(function(err){
        console.log('Cannot retrieve issue data.')
      })
  }  

  getIssueData = async () => {
    const response = await fetch(`/api/issues/issue?id=${this.props.match.params.issueId}`);
    return await response.json();
  };

  render() {

    const title = this.state.issueData ? this.state.issueData.title : null;
    const description = this.state.issueData ? this.state.issueData.description : null;
    const billUrl = this.state.issueData ? this.state.issueData.billUrl : null;
    const votesFor = this.state.issueData ? this.state.issueData.votesFor.length : 0;
    const votesAgainst = this.state.issueData ? this.state.issueData.votesAgainst.length : 0;

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="text-center mb-3">
            <h3>{title}</h3>
          </div>
          <p>{description}</p>
          <a href={billUrl} target="_blank" className="small">{billUrl}</a>
          {(votesFor || votesFor) ? 
            <div className='col-md-6 col-sm-8 offset-md-3 offset-sm-2 col-lg-4 offset-lg-4'>
              <BarChart votesFor={votesFor} votesAgainst={votesAgainst} title={title} />
            </div> 
          : null}
          <hr />

        </div>
      </div>
    );
  }
}

export default Issues;
