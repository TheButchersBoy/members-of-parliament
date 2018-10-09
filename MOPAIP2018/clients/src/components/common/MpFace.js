import React from "react";

const mpFaces = require.context('../../img/reps', true);

export default (props) => {
  return (
  	<div className="row">
			<div className="col-md-4 offset-md-4">
    		<img className="mp-face img-fluid" src={mpFaces(`./${props.id}.png`)} />
			</div>
    </div>
  );
};
