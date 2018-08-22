import React, { Component } from "react";
import temp from "../../assets/temp.png";
import ".//styles.css";

class SingleMP extends Component {
  render() {
    return (
      <div>
        <div className="SizeTitle">
          <img src={temp} className="CircularImage" />
          <div className="MpHeadings">
            <h2>John Smith</h2>
            <p>Labour party</p>
          </div>
        </div>
        <div className="MpValues">
          <table>
            <tr>
              <th>Issues he cares about</th>
              <th>Voted Yes</th>
              <th>Voted No</th>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default SingleMP;
