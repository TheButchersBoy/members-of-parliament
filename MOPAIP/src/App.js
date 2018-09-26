import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Postcode from "./pages/postcode/Postcode";
import SingleMP from "./pages/singleMP/SingleMP";
import Footer from "./common/Footer/Footer";

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
      <div>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Postcode</Link>
              </li>
              <li>
                <Link to="/singleMP">SingleMP</Link>
              </li>
            </ul>
            <hr />

            <Switch>
              <Route path="/" exact component={Postcode} />
              <Route path="/singleMP" component={SingleMP} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
