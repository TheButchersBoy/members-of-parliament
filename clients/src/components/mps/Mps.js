import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MpInfo from "../common/MpInfo";
import Spinner from "../common/Spinner";
import { getMps } from "../../actions/mpActions";

class Mps extends Component {

  componentDidMount() {
    this.props.getMps();
  }  

  renderMps() {
    var mps = [];
    for(var key in this.props.mp.mps) {
      mps.push(
        <div key={key} className="col-md-2 col-sm-3 col-4">
          <MpInfo info={this.props.mp.mps[key]} link={`/myMp/${this.props.mp.mps[key]._id}`} />
        </div>
      );
    }
    return mps;
  }

  render() {
    return (
      <div className="row">
        {this.props.mp.mps 
          ? this.renderMps()
          : <Spinner />}
      </div>
    );
  }
}

Mps.propTypes = {
  getMps: PropTypes.func.isRequired,
  mp: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  mp: state.mp
});

export default connect(
  mapStateToProps,
  { getMps }
)(Mps);
