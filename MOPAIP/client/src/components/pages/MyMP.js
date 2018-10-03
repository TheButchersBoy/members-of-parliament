import React, { Component } from "react";
import { Link } from "react-router-dom";

class MyMP extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3 className="display-3 mb-4">Dashboard</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyMP;
