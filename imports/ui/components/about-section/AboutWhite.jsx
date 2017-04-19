import React, { Component } from 'react';
import {TweenMax, Power2, TimelineLite} from "gsap";

// TvFrame component
export default class White extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){

  }


  render() {
    return (
        <div className="col-md-12 col-sm-12 white-section" id="about-white">
          <div className="col-md-4 col-sm-12"><h1 id="white-header">Welcome</h1></div>
          <div className="col-md-6 col-sm-12" id="white-paragraph">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </div>
        </div>
    );
  }
}
