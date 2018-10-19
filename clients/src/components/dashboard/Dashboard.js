import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import "./dashboard.css";
import { getCurrentProfile } from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import Button from "./Button";
class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;
    console.log(profile);

    if (profile == null || profile.preference == null || loading) {
      dashboardContent = <Spinner />;
      dashboardContent = (
        <div>
          <p className="lead text-muted">Welcome {user.name}</p>
          <p className="lead text-muted">To get started : </p>

          <p className="lead list">
            {" "}
            Go to the discussion forum to discuss about issues that you care
            about
          </p>

          <p className="lead">
            Head over to issues page to see current issues that are being
            discussed and being voted on.
          </p>
          <p className="lead">Head over to MP page to see your leaders</p>
        </div>
      );
    } else {
      //Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = <h4>TO DO DISPLAY PROFILE</h4>;
      }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="col-md-12">
            <h1 className="display-4">Dashboard</h1>
            {dashboardContent}
          </div>
        </div>
      </div>
    );
  }
}
const mapStsteToProps = state => ({
  profile: state.profile,
  auth: state.auth
});
Dashboard.PropTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);