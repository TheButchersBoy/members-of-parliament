import React, { Component } from "react";
import { Link } from "react-router-dom";

class Profile extends Component {
  render() {
    return (
      <div className="standard-page">
        <div className="landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3 className="display-3 mb-4">Profile</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;