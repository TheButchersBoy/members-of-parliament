import React from "react";
import { Link } from "react-router-dom";

const mpFaces = require.context("../../img/repPhotos", true);

export default props => {
  return (
    <div className="mp-info-container">
      <Link to={props.link}>
        <img
          className="mp-face clickable-area img-fluid"
          src={mpFaces(`./${props.info._id}.png`)}
        />
      </Link>
      <div className="text-center">
        <div>
          <span>
            {props.info.firstName} {props.info.lastName}
          </span>
        </div>
        <div>
          <span>{props.info.party}</span>
        </div>
      </div>
    </div>
  );
};
