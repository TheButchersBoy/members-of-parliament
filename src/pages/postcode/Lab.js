import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

class Lab extends Component {
  state = { 
    count: 0 
  };

  render() {
    
    const IncrementButton = withRouter(({ history }) => (
        <button
          type="submit" onClick={() => history.push(`singleMP/${this.state.Lab}`)}> Increment
        </button>
    ));

    return (
      <form>
        <div>
          <IncrementButton/>
        </div>
        <div>
          {this.state.count}
        </div>
      </form>
    )
  }
}

export default Lab;
