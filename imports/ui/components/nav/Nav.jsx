import React, { Component } from 'react';
import {TweenMax, Power2, TimelineLite} from "gsap";

import Icons from './Icons.jsx';
import NavWrapper from './NavWrapper.jsx';

// Nav component
export default class Nav extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){
    let triggerMenu= false;
    $('#menu-btn').on('click', function() {

      triggerMenu = !triggerMenu;

      if(triggerMenu) {
        $('.nav-wrapper').css({
          'width':'100%',
          'transition':'all .4s ease-in-out',
          'opacity':'1',
          'visibility':'visible'
        });
        $('.fade-out').css({
          'visibility':'hidden',
          'opacity':'0',
          'transition':'all .3s ease-in-out'
        });
          $('#home-page').toggleClass('home-page overflow-hide');
          $('.rotate-menu').css({
            'transform': 'rotate(90deg)',
            'transition': 'all .3s ease-in-out'
          });
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
            setTimeout(function() {
              TweenMax.staggerTo(".menu-list-item", .3, {opacity:1, top:0, ease: Quart.easeInOut}, 0.4);
            }, 300);

      }else {
        $('.nav-wrapper').css({
          'width':'0%',
          'transition':'all .4s ease-in-out',
          'opacity':'0',
          'visibility':'hidden'
        });
        $('.fade-out').css({
          'visibility':'visible',
          'opacity':'1',
          'transition':'all .3s ease-in-out'
        });
        $('#home-page').toggleClass('overflow-hide home-page');
        $('.rotate-menu').css({
          'transform': 'rotate(0deg)',
          'transition': 'all .3s ease-in-out'
        });
        TweenMax.staggerTo(".menu-list-item", .1, {opacity:0, top:'2em', ease: Quart.easeInOut}, 0.1);

      }
    })
    $('.menu-link').on('click', function() {
      $('.nav-wrapper').css({
        'width':'0%',
        'transition':'all .4s ease-in-out',
        'opacity':'0',
        'visibility':'hidden'
      });
      $('.fade-out').css({
        'visibility':'visible',
        'opacity':'1',
        'transition':'all .3s ease-in-out'
      });
      $('#home-page').toggleClass('overflow-hide home-page');
      $('.rotate-menu').css({
        'transform': 'rotate(0deg)',
        'transition': 'all .3s ease-in-out'
      });
      TweenMax.staggerTo(".menu-list-item", .1, {opacity:0, top:'2em', ease: Quart.easeInOut}, 0.1);
    });
  }


  render() {
    return (
      <div id="nav" className="container-fluid">
      <Icons />
      </div>
    );
  }
}
