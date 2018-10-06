import React, { Component } from "react";
import { Link } from "react-router-dom";
import MpFace from "../shared/MpFace";
import axios from 'axios';

class MyMP extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getMpData()
      .then(data => {
        debugger;
        this.setState({data: data.data});
      })
      .catch(function(err){
        debugger;
        console.log('Cannot retrieve MP data.')
      })
  }  

  getMpData = async () => {
    const response = await fetch(`/api/mp/getData?postcode=${this.props.match.params.postcode}`);
    return await response.json();
  };

  getMpName() {
    if (this.state.data) {
      return this.state.data.mp.name;
    }
  }  

  hasVote(issue) {
    return issue.votesFor.includes(issue.id) || issue.votesAgainst.includes(issue.id);
  }

  votedFor(issue) {
    return issue.votesFor.includes(issue.id);
  }

  getIssues() { // TODO: make seperate component
    if (this.state.data) {
      return this.state.data.issues.map((issue, i) => { 
        

        // if (this.hasVote(issue)) {
        //   return (

        //     <div key={i}>
        //       <p>{issue.title}</p>
        //       {this.votedFor(issue) 
        //         ? <p>for</p>
        //         : <p>against</p>
        //       }
        //     </div>

        //   );
        // }
      })
    }
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <MpFace src=""/>
            <h3>{this.getMpName()}</h3>
            <br />
            <div className="container-fluid bg-3 text-center">    
              <div className="row">
                {this.getIssues()}
                <h3></h3>
                <div className="col-md-4 col-sm-6">
                  <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width: "100%"}} alt="Image" />
                </div>
                <div className="col-md-4 col-sm-6"> 
                  <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width: "100%"}} alt="Image" />
                </div>
                <div className="col-md-4 col-sm-6"> 
                  <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width: "100%"}} alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyMP;
