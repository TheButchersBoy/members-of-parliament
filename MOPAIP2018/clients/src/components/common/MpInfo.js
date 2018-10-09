import React from "react";
import face from '../../img/face.jpg'

export default (props) => {
  return (
  	<div>
  		<a href="#">
  			<img className="mp-face clickable-area img-fluid" src={face} />
  		</a>
  		<p className='text-center ml-1'>{props.info.name}</p>
    </div>
  );
};
