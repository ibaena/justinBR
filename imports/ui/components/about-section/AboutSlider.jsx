import React, { Component } from 'react';
import {TweenMax, Power2, TimelineLite} from "gsap";

// TvFrame component
export default class AboutSlider extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        mousewheelControl: true,
        coverflow: {
            rotate: 30,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows : true
        }
    });
  }


  render() {
    return (
        <div className="col-md-12 col-sm-12 about-slider-section" id="about-slider">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide" style={{backgroundImage:'url(http://lorempixel.com/600/600/nature/1)'}}></div>
              <div className="swiper-slide" style={{backgroundImage:'url(http://lorempixel.com/600/600/nature/2)'}}></div>
              <div className="swiper-slide" style={{backgroundImage:'url(http://lorempixel.com/600/600/nature/3)'}}></div>
              <div className="swiper-slide" style={{backgroundImage:'url(http://lorempixel.com/600/600/nature/4)'}}></div>
              <div className="swiper-slide" style={{backgroundImage:'url(http://lorempixel.com/600/600/nature/5)'}}></div>
              <div className="swiper-slide" style={{backgroundImage:'url(http://lorempixel.com/600/600/nature/6)'}}></div>
              <div className="swiper-slide" style={{backgroundImage:'url(http://lorempixel.com/600/600/nature/7)'}}></div>
              <div className="swiper-slide" style={{backgroundImage:'url(http://lorempixel.com/600/600/nature/8)'}}></div>
              <div className="swiper-slide" style={{backgroundImage:'url(http://lorempixel.com/600/600/nature/9)'}}></div>
              <div className="swiper-slide" style={{backgroundImage:'url(http://lorempixel.com/600/600/nature/10)'}}></div>
            </div>
            <div className="swiper-pagination"></div>
          </div>

        </div>
    );
  }
}
