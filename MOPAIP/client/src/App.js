import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./components/pages/Landing";
import Dashboard from "./components/pages/Dashboard";
import MyMP from "./components/pages/MyMP";
import Issues from "./components/pages/Issues";
import Forum from "./components/pages/Forum";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/myMP" component={MyMP} />
            <Route exact path="/issues" component={Issues} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/forum" component={Forum} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
