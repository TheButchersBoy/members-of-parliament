import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

    const NoMatch = ({ location }) => (
      <div>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </div>
    );

    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
          <div className="container">
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/myMP/:postcode" component={MyMP} />
              <Route exact path="/issues" component={Issues} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/forum" component={Forum} />
              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
