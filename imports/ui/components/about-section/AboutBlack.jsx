import React, { Component } from 'react';
import {TweenMax, Power2, TimelineLite} from "gsap";

// TvFrame component
export default class AboutBlack extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){

  }


  render() {
    return (
        <div className="col-md-12 col-sm-12 " id="about-black">
          <div className="col-md-4 col-sm-12"><h1 id="black-header">Special Skills.</h1></div>
          <div className="col-md-6 col-sm-12" id="black-paragraph">
            <ul className="skill-list">
              <li className="skill-list-item">Strong Emcee background</li>
              <li className="skill-list-item">Creative writing</li>
              <li className="skill-list-item">Sketch writing</li>
              <li className="skill-list-item">Long/Short forum improvisation</li>
              <li className="skill-list-item">Long distance running</li>
              <li className="skill-list-item">Weight-lifting</li>
              <li className="skill-list-item">Wrestling</li>
              <li className="skill-list-item">Paddle boarding</li>
              <li className="skill-list-item">care-taking animals</li>
              <li className="skill-list-item">Whistling</li>
              <li className="skill-list-item">Basic Boxing</li>
              <li className="skill-list-item">Standup</li>
            </ul>
          </div>
        </div>
    );
  }
}
