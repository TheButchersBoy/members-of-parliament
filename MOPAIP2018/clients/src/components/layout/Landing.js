import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  auth: state.auth
});

class Landing extends Component {
  state = { 
    postcode: '' 
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  onChange = e => this.setState({ postcode: e.target.value });

  render() {
    const SubmitButton = withRouter(({ history }) => (
      <button
        onClick={() => history.push(`myMp/${this.state.postcode}`)} 
        className='btn btn-lg btn-primary' type="submit" > Go
      </button>
    ));

    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Member of Parliament</h1>
                <p className="lead">
                  {" "}
                  Create a profile, to know more about your leaders
                </p>
                <hr />
              </div>
            </div>
            <form className='col-md-8 offset-md-2'>
              <div class="input-group">
                <input onChange={this.onChange} value={this.state.postcode} className="form-control form-control-lg" placeholder='Postcode' type="text" />
                <span className="input-group-btn">
                  <SubmitButton/>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Landing);
