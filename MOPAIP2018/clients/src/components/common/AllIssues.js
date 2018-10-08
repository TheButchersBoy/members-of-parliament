import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Topic from "../common/Topic";

class AllIssues extends Component {

  getIssues() {
    var topics = [];
    if (!this.props.issues) {
      return (<div></div>);
    }
    for(var key in this.props.issues) {
      var issues = [];
      this.props.issues[key].map((issue, i) => { 
        if (this.props.mpData) {
          if (this.mpHasVote(issue)) {
            issues.push(
              <div key={issue.id} className='row'>
                <div className="col-sm-9 text-left">
                  <Link to={`/issues/${key}/${issue.id}/${issue.title}`} className="topic-button">{issue.title}</Link>
                </div>
                <div className="col-sm-3 text-left">
                  {this.renderMpVote(issue)}
                </div>
              </div>
            )
          }
        } else {
          issues.push(
            <div key={issue.id} className='row'>
              <div className="col-sm-9 text-left">
                <Link to={`/issues/${key}/${issue.id}/${issue.title}`} className="topic-button">{issue.title}</Link>
              </div>
              <div className="col-sm-3 text-left">
                {this.renderIssueStatus(issue)}
              </div>
            </div>
          )
        }
      });
      topics.push(
        <Topic key={key} title={key} className="col-lg-4 col-md-6">
          {issues}
        </Topic>
      );
    }
    return topics;
  }

  mpHasVote(issue) {
    return issue.votesFor.includes(issue.id) || issue.votesAgainst.includes(issue.id);
  }

  renderMpVote(issue) {
    return issue.votesFor.includes(this.props.mpData.id) 
      ? <p style={{fontWeight: 'bold', color: 'green'}}>for</p>
      : <p style={{fontWeight: 'bold', color: 'red'}}>against</p>
  }

  renderIssueStatus(issue) {
    return issue.votesFor.length > issue.votesAgainst.length
      ? <p style={{fontWeight: 'bold', color: 'green'}}>Passed</p>
      : <p style={{fontWeight: 'bold', color: 'red'}}>Not passed</p>
  }

  render() {
    return (
  		<div className="row">
        {this.getIssues()}
  		</div>
  	);
	}
}
export default AllIssues;