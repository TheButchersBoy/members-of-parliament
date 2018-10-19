import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AllIssues from "../common/AllIssues";
import Spinner from "../common/Spinner";
import { getIssues } from "../../actions/issueActions";

class Issues extends Component {

  componentDidMount() {
    this.props.getIssues();
  }  

  render() {
    return (
      <div className="row">
        {this.props.issue.issues 
          ? <div className="col-md-12">
              <div className="container-fluid bg-3 text-center">    
                <AllIssues issues={this.props.issue.issues}/>
              </div>
            </div>
          : <Spinner />}
      </div>
    );
  }
}

Issues.propTypes = {
  getIssues: PropTypes.func.isRequired,
  issue: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  issue: state.issue
});

export default connect(
  mapStateToProps,
  { getIssues }
)(Issues);