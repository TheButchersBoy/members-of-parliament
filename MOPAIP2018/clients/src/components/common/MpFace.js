import React from "react";
import face from '../../img/face.jpg'

export default (props) => {
  return (
  	<div className="row">
			<div className="col-md-4 offset-md-4">
    		<img className="mp-face img-fluid" src={face} />
			</div>
    </div>
  );
};
