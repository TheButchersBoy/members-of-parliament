import React, { Component } from "react";

/**
 * Available props
 * source   -   source of image
 */

class Face extends Component {
  render() {
    return (
      <div>
        <img src={this.props.source} className="CircularImage" />
      </div>
    );
  }
}

export default Face;
