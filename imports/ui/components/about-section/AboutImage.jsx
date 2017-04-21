import React, { Component } from 'react';
import {TweenMax, Power2, TimelineLite} from "gsap";

// TvFrame component
export default class AboutImage extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){

  }

  render() {
    return (
        <div className="col-md-12 col-sm-12 aboutImage-section">
          <div className="col-md-7 col-sm-12">
            <img src="/images/profile/profile.png" className="img-responsive center-block" />
          </div>
          <div className="col-md-5 col-sm-12">
            <p className="about-image-title">
              JUSTIN C. SCHILLING
            </p>
            <p className="about-image-list">
              ACTOR - EMMCEE - IMPROV
            </p>
            <p className="about-image-location">
              New York City, New York
            </p>
          </div>
        </div>
    );
  }
}
