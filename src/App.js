import React, { Component } from "react";
import SingleMP from "./pages/singleMP/SingleMP";
import "./assets/stylesheets/footer.css";
class App extends Component {
  render() {
    return (
      <div>
        <SingleMP />
        <div className="footer">
          <p>
            Content Created By @Nathan,Angelica Shadman for Advanced Internet
            Programming
          </p>
        </div>
      </div>
    );
  }
}

export default App;
