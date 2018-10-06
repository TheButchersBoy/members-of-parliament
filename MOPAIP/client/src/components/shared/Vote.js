import React from "react";

export default (props) => {
  return (
  	<div className={["voteContainer", props.className].join(' ')}>
  		<div>
  			<h3>{props.title}</h3>
  		</div>
  		<div>
  			{props.children}
  		</div>
  	</div>
  );
};
