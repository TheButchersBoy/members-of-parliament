import React, { Component } from "react";
import { Link } from "react-router-dom";
import BarChart from "../common/BarChart";
import MpInfo from "../common/MpInfo";
import Spinner from "../common/Spinner";
import axios from 'axios';
import ReactDOM from 'react-dom';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

// Dummy Data:

// const postData = {
//   title: 'Introduce Carbon Farming initiative',
//   description: 'Amends the Carbon Credits (Carbon Farming Initiative) Act 2011 to: remove the obligation to obtain consent of eligible interest holders from existing area-based emissions-avoidance projects; clarify that state and territory government Crown lands ministers and Commonwealth ministers responsible for land rights legislation have consent rights for projects conducted on exclusive possession native title land that is Torrens system land or land rights land; provide for legislative rules or regulations to allow parts of a sequestration offsets project to be removed and credits surrendered for the carbon stored in that area.',
//   topic: 'Agriculture',
//   billUrl: 'https://www.aph.gov.au/Parliamentary_Business/Bills_Legislation/Bills_Search_Results/Result?bId=r5833',
//   votesFor: [
//     '5bbcc24bea1458a3f6f81c69',
//     '5bbcc16f167860a30f83dffe',
//     '5bbcc0e41b97a1a29d6d0ab2',
//     '5bbcbfb805e831a1ad83d42f'
//   ],
//   votesAgainst: [
//     '5bbcc1fbafc840a38eb87e6f'
//   ],
// }

class Issues extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getIssueData()
      .then(res => {
        this.setState({issueData: res});
      })
      .catch(function(err){
        console.log('Cannot retrieve issue data.')
      })
    this.getMps()
      .then(res => {
        this.setState({mps: res});
      })
      .catch(function(err){
        console.log('Cannot retrieve MPs.')
      })

    // Function to post Dummy data to DB
    
    //this.postIssue();
  }  

  getMps = async () => {
    const response = await fetch('/api/mp/mps');
    return await response.json();
  };

  getIssueData = async () => {
    const response = await fetch(`/api/issues/issue/${this.props.match.params.issueId}`);
    return await response.json();
  };

  // Function to post Dummy data to DB

  // postIssue = () => {
  //   axios
  //     .post("/api/mp/postIssue", postData)
  //     .then(res => {
  //         debugger;
  //       }
  //     )
  //     .catch(err => {
  //         debugger;
  //       }
  //     );
  // };

  renderMpsFor() {
    var mps = [];
    for(var key in this.state.mps) {
      if (this.state.issueData.votesFor.includes(this.state.mps[key]._id)) {
        mps.push(
          <div key={key} className="col-md-2 col-sm-3 col-4">
            <MpInfo info={this.state.mps[key]} link={`/myMp/${this.state.mps[key]._id}`} />
          </div>
        );
      }
    }
    return mps;
  }  

  renderMpsAgainst() {
    var mps = [];
    for(var key in this.state.mps) {
      if (this.state.issueData.votesAgainst.includes(this.state.mps[key]._id)) {
        mps.push(
          <div key={key} className="col-md-2 col-sm-3 col-4">
            <MpInfo info={this.state.mps[key]} link={`/myMp/${this.state.mps[key]._id}`} />
          </div>
        );
      }
    }
    return mps;
  }

  render() {

    const title = this.state.issueData ? this.state.issueData.title : null;
    const description = this.state.issueData ? this.state.issueData.description : null;
    const billUrl = this.state.issueData ? this.state.issueData.billUrl : null;
    const votesFor = this.state.issueData ? this.state.issueData.votesFor.length : 0;
    const votesAgainst = this.state.issueData ? this.state.issueData.votesAgainst.length : 0;

    return (
      <div className="row">
        { this.state.issueData ?
          <div>
            <div className="col-md-12">
              <div className="text-center mb-3">
                <h3>{title}</h3>
              </div>
              <p>{description}</p>
              <a href={billUrl} target="_blank" className="small">{billUrl}</a>
              {(votesFor || votesFor) ? 
                <div className='col-md-6 col-sm-8 offset-md-3 offset-sm-2 col-lg-4 offset-lg-4'>
                  <BarChart votesFor={votesFor} votesAgainst={votesAgainst} title={title} />
                </div> 
              : null}
              <hr />
            </div>
            <div className="col-sm-12">
              { this.state.mps ?
                <Accordion accordion={false}>
                  <AccordionItem expanded={true}>
                    <AccordionItemTitle>
                      <h3 className="u-position-relative">
                        For
                        <div className="accordion__arrow" role="presentation"></div>
                      </h3>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                      <div className="row">
                        {this.renderMpsFor()}
                      </div>
                    </AccordionItemBody>
                  </AccordionItem>
                  <AccordionItem expanded={true}>
                    <AccordionItemTitle>
                      <h3 className="u-position-relative">
                        Against
                        <div className="accordion__arrow" role="presentation"></div>
                      </h3>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                      <div className="row">
                        {this.renderMpsAgainst()}
                      </div>
                    </AccordionItemBody>
                  </AccordionItem>
                </Accordion>
              : <Spinner /> }
            </div>
          </div>
        : <Spinner /> }
      </div>
    );
  }
}

export default Issues;
