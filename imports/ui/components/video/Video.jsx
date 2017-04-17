import React, { Component } from 'react';
import {TweenMax, Power2, TimelineLite} from "gsap";
import Scrollbar from 'smooth-scrollbar';

import White from '../section/White.jsx';
import Black from '../section/Black.jsx';
import Nav from '../nav/Nav.jsx';


// TvFrame component
export default class Video extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){
Scrollbar.init(document.querySelector('.home-page'),{
  'speed': '2.2',
});

setTimeout(function() {
  $('#home-video').get(0).play()
}, 300)
  }


  render() {
    return (
      <div id="home-page" className="home-page" >
        <Nav />
        <div className="fullscreen-bg" >
        <div className="video-items col-sm-12 fade-out">
        <div className="branding">
          JUSTIN SCHILLING.
        </div>
        <div className="nav-items">
          <div id="menu-btn">
            <i className="fa fa-superpowers rotate-menu" aria-hidden="true"></i>
          </div>
          <div id="sidebar-btn">
            <i className="fa fa-xing rotate-sidebar" aria-hidden="true"></i>
          </div>
        </div>
          <div id="btm-left-video">
          <p>
            <i className="fa fa-headphones" aria-hidden="true"></i>
            <b> Watching:</b> <span className="grey-text"> Justin Schilling 2017 Reel</span>
          </p>
          </div>
          <div id="btm-right-video">
            <p>
              <i className="fa fa-arrow-down" aria-hidden="true"></i>
              <b>Scroll</b> <span className="grey-text">to continue</span>
            </p>
          </div>
        </div>
          <div className="video-overlay">

            <div className="hvr-box fade-out">
              <h1 className="video-header-text">JS.</h1>
              <h1 className="video-header-text-small">It is a long established fact that a reader will be distracted </h1>
            </div>
          </div>

          <div className="video-wrapper">
          <video loop muted autoPlay   preload="none" className="fullscreen-bg__video embed-responsive-item" id="home-video">
            <source src="videos/demoReel.mp4" type="video/mp4" />
          </video>
          </div>
        </div>

        <White />
        <Black />

      </div>
    );
  }
}
