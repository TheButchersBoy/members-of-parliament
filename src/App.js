import React, { Component } from "react";
import SingleMP from "./pages/singleMP/SingleMP";
import Footer from "./common/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <SingleMP />
        <Footer />
      </div>
    );
  }
}

export default App;
