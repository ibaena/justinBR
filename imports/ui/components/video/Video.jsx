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
Scrollbar.init(document.getElementById('home-page'),{
  'speed': '2.2',
});

setTimeout(function() {
  $('#home-video').get(0).play()
}, 300)
  }


  render() {
    return (
      <div id="home-page" >
        <div className="fullscreen-bg" >

          <div className="video-overlay">
            <Nav />
            <div className="hvr-box">
              <h1 className="video-header-text">JS</h1>
              <h1 className="video-header-text-small">It is a long established fact that a reader will be distracted </h1>
            </div>
          </div>

          <div className="video-wrapper">
          <video loop muted autoPlay   preload="none" className="fullscreen-bg__video embed-responsive-item" id="home-video">
            <source src="videos/demoReel-cut.mp4" type="video/mp4" />
          </video>
          </div>
        </div>

        <White />
        <Black />

      </div>
    );
  }
}
