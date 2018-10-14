import React, { Component } from "react";
import {Bar} from 'react-chartjs-2';

class BarChart extends Component {

  render() {

  	// TODO: Somehow remove top label

  	const data = {
  	  labels: ['For', 'Againts'],
  	  datasets: [
  	    {
  	      label: this.props.title,
  	      backgroundColor: ['rgba(150, 255, 99, 0.4)', 'rgba(255,99,132,0.4)'],
  	      borderColor: ['rgba(132, 255, 72, 1)','rgba(255,99,132,1)'],
  	      borderWidth: 1,
  	      data: [this.props.votesFor, this.props.votesAgainst, 0]
  	    }
  	  ]
  	};

    return (
  		<div>
  			<Bar
  	      data={data}
  	      width={50}
  	      height={300}
          legend={{}}
  	      options={{
  	        maintainAspectRatio: false
  	      }}
  	    />
  		</div>
  	);
	}
}
export default BarChart;