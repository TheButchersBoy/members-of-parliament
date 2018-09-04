import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

class Postcode extends Component {
  state = { 
    postcode: '' 
  };

  onChange = e => this.setState({ postcode: e.target.value });

  render() {
    
    const SubmitButton = withRouter(({ history }) => (
        <button
          type="submit" onClick={() => history.push(`singleMP/${this.state.postcode}`)}> Go
        </button>
    ));

    return (
      <form>
        <input onChange={this.onChange} value={this.state.postcode} />
        <SubmitButton/>
      </form>
    )
  }
}

export default Postcode;
