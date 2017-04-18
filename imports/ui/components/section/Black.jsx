import React, { Component } from 'react';
import {TweenMax, Power2, TimelineLite} from "gsap";

// TvFrame component
export default class Black extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){

  }


  render() {
    return (
        <div className="col-md-12 col-sm-12 black-section" id="black">
          <div className="border-box">
            <p className="black-text">Ideas? Questions? Just want to chat? <a href="" className="underline-effect no-decor">Click Here.</a></p>
          </div>
        </div>
    );
  }
}
