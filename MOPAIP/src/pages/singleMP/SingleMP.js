import React, { Component } from "react";
import Face from "../../common/Face/Face";
import tempImage from '../../assets/temp.png'
import "./styles.css";

class SingleMP extends Component {
  render() {
    return (
      <div>
        <Face source={tempImage}/>
        <div className="sizeTitle">
          <div className="mpHeadings">
            <h2>John Smith</h2>
            <p>Labour party</p>
          </div>
        </div>
        <div className="mpValues">
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
