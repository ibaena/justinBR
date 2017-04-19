import React, { Component } from 'react';
import {TweenMax, Power2, TimelineLite} from "gsap";
import Scrollbar from 'smooth-scrollbar';

import White from '../section/White.jsx';
import Black from '../section/Black.jsx';
import Nav from '../nav/Nav.jsx';
import ImageSection from '../imageSection/ImageSection.jsx';


// TvFrame component
export default class Video extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  scrollBarInstance() {
    var scrollbar = Scrollbar.init(document.querySelector('.home-page'),{
     'speed': '2.2',
     'overscrollEffect':'bounce',
     'damping':'.05'
   });

    scrollbar.addListener(function() {
      let scrollPos = true;
      let whiteSection = scrollbar.isVisible(document.querySelector('.white-section'));
      let blackSection = scrollbar.isVisible(document.querySelector('.black-section'));
      let imageSection = scrollbar.isVisible(document.querySelector('.image-section'));

      let turnBlack = 900;
      let btmNav = 30;
      let currentPos = scrollbar.scrollTop;

        if(btmNav < currentPos) {
          $('#btm-left-video').css({
            'left':'1em',
            'opacity':'0',
            'visibility':'hidden',
            'transition':'all .3s ease-in-out'
          });
          $('#btm-right-video').css({
            'right':'1em',
            'opacity':'0',
            'visibility':'hidden',
            'transition':'all .3s ease-in-out'
          });
        }else{
          $('#btm-left-video').css({
            'left':'4em',
            'opacity':'1',
            'visibility':'visible',
            'transition':'all .3s ease-in-out'
          });
          $('#btm-right-video').css({
            'right':'4em',
            'opacity':'1',
            'visibility':'visible',
            'transition':'all .3s ease-in-out'
          });
        }

      if(turnBlack < currentPos) {
        $('#menu-btn i').css({
          'color':'black',
          'transition':'all .3s ease-in-out'
        });
        $('#sidebar-btn i').css({
          'color':'black',
          'transition':'all .3s ease-in-out'
        });
        $('.branding').css({
          'color':'black',
          'transition':'all .3s ease-in-out'
        });
      }else {
        $('#menu-btn i').css({
          'color':'white',
          'transition':'all .3s ease-in-out'
        });
        $('#sidebar-btn i').css({
          'color':'white',
          'transition':'all .3s ease-in-out'
        });
        $('.branding').css({
          'color':'white',
          'transition':'all .3s ease-in-out'
        });
      }

      switch(scrollPos) {
        case whiteSection:

        break;
        case blackSection:

        break;
        case imageSection:
          $('.odd-ani').css({
            'right':'0',
            'transition':'all .3s ease-in',
            'opacity':'1',
            'visibility':'visible'
          });
          $('.even-ani').css({
            'left':'0',
            'transition':'all .3s ease-in',
            'opacity':'1',
            'visibility':'visible'
          });

        break;

      }

    });
  }
  componentDidMount(){
    this.scrollBarInstance();

    setTimeout(function() {
      $('#home-video').get(0).play()
    }, 300)

      setTimeout(function() {
        $('.video-overlay').css({
          'background': 'rgba(0, 0, 0, .2)',
          'transition':'all 2s ease-in-out'
        })
      },3000);


}


  render() {
    return (
      <div id="home-page" className="home-page" >

        <div className="fullscreen-bg" >

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
        <ImageSection />
        <Black />

      </div>
    );
  }
}
