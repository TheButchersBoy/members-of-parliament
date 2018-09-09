import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Lab from "./pages/postcode/Lab";
import SingleMP from "./pages/singleMP/SingleMP";
import Footer from "./common/Footer/Footer";
import { withRouter } from 'react-router-dom';


class App extends Component {
  state = {
    count: null
   };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ count: res.express }))
      .catch(function(err){
        console.log(err)
      })
  }  

  incrementCount() {
    this.postApi()
      .then(res => this.setState({ count: res.express }))
      .catch(function(err){
        console.log(err)
      })
  }

  callApi = async () => {
    const response = await fetch('/api/getCount');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    } 
    return body;
  };

  postApi = async () => {
    const response = await fetch('/api/updateCount', {
      method: 'POST',
    });
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    } 
    return body;
  };

  render() {
    return (
      <div>
        <div>
          <button
            type="button" onClick={() => this.incrementCount()}> Increment
          </button>
        </div>
        <div>
          <h1>{this.state.count}</h1>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
