import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import "./dashboard.css";
import { getCurrentProfile } from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import Button from "./Button";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getAbortionPreferences: false,
      getHIRPreferences: false,
      getGunsPreferences: false,
      getGayPreferences: false,
      preferenceArray: [],
      black: false
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log("shadman");
    /*


    const preferenceArray = this.state.preferenceArray;
    console.log("val of preferenceArray" + preferenceArray);
    let current = e.target.getAttribute("dataTest");
    console.log("current attribute is" + current);

    for (var i = 0; i < preferenceArray.length; i++) {
      if (preferenceArray[i] === current) {
        var index = preferenceArray[i];
        if (index > -1) {
          preferenceArray.splice(index, 1);
          console.log(preferenceArray);
        }
      } else {
        this.setState(state => ({
          preferenceArray: state.preferenceArray.push(current)
        }));
        console.log("hhhhh" + preferenceArray);
      }
    }
  }
  */

    /*
    const getAbortionPreferences = this.setState.getAbortionPreferences;
    const getHIRPreferences = this.setState.getHIRPreferences;
    const getGayPreferences = this.setState.getGayPreferences;
    const getGunsPreferences = this.setState.getGunsPreferences;

    if (getAbortionPreferences === false) {
      getAbortionPreferences = !getAbortionPreferences;
      preferenceArray = state.preferenceArray.push(current);
      this.setState(state => ({
        getAbortionPreferences: !state.getAbortionPreferences,
        preferenceArray: state.preferenceArray.push(current)
      }));
      console.log("situation is" + current);
    }
    if (getGayPreferences === false) {
      this.setState(state => ({
        getGayPreferences: !state.getGayPreferences,
        preferenceArray: state.preferenceArray.push(current)
      }));
    }
    if (getGunsPreferences === false) {
      this.setState(state => ({
        getGunsPreferences: !state.getGunsPreferences,
        preferenceArray: state.preferenceArray.push(current)
      }));
    }
    if (getHIRPreferences === false) {
      this.setState(state => ({
        getHIRPreferences: !state.getHIRPreferences,
        preferenceArray: state.preferenceArray.push(current)
      }));
    }
    */
    var color = this.state.black;
    let current = e.target.getAttribute("dataTest");
    console.log(current);
    const preferenceArray = this.state.preferenceArray;
    if (preferenceArray.indexOf(current) > -1) {
      let preferenceArray2 = [...this.state.preferenceArray]; // make a separate copy of the array
      var index = preferenceArray2.indexOf(current);
      preferenceArray2.splice(index, 1);
    }

    if (preferenceArray.indexOf(current) === -1) {
      this.setState(prevState => ({
        preferenceArray: [...prevState.preferenceArray, current]
      }));
    }
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    let btn_class = this.state.black ? "blackButton" : "whiteButton";
    console.log("color of button " + btn_class);
    const preference = this.state.preferenceArray;
    console.log(this.state.preferenceArray);
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile == null || loading) {
      dashboardContent = <Spinner />;
    } else {
      dashboardContent = (
        <div>
          <p className="lead text-muted">Welcome {user.name}</p>
          <h2>
            Select all issues that you are interested in:&nbsp;
            <Link to="/yourLocalMp" className="btn btn-lg btn-info">
              Click to see your Local Mp
            </Link>
            <hr />
            <br />
          </h2>
        </div>
      );
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard {dashboardContent}</h1>
              <Button
                type="button"
                name="Abortion"
                value="Abortion"
                color="blackButton"
                color2="whiteButton"
                onClick={this.handleClick}
                dataTest="Abortion"
              />
              &nbsp;&nbsp;&nbsp;
              <Button
                type="button"
                name="Gay Marriage"
                value="GayMarriage"
                className={btn_class}
                onClick={this.handleClick}
                dataTest="GayMarriage"
              >
                Gay Marraige
              </Button>
              &nbsp;&nbsp;&nbsp;
              <Button
                type="button"
                name="Guns"
                value="Guns"
                className={btn_class}
                dataTest="Guns"
                onClick={this.handleClick}
              >
                Guns
                {"     "}
              </Button>
              &nbsp;&nbsp;&nbsp;
              <Button
                type="button"
                name="HIR"
                value="HIR"
                className={btn_class}
                dataTest="HIR"
                onClick={this.handleClick}
              >
                Higher Interest Rates
                {"     "}
              </Button>
            </div>
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
export default connect(
  mapStsteToProps,
  { getCurrentProfile }
)(Dashboard);
