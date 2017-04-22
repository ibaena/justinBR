import React, { Component } from 'react';
import {TweenMax, Power2, TimelineLite} from "gsap";

// TvFrame component
export default class AboutSlider extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  filmList() {
    return [
      {_id:1, category:'Film', title:'The Secrets that we Keep', role:'Aaron', director:'Miss Ash Productions', image:''},
      {_id:2, category:'Film', title:'The Florist', role:'Arthur Michaels', director:'Alyssa Greenwald', img:''},
      {_id:3, category:'Film', title:'The Gatherer', role:'Florist', director:'Aurore Duiguo', img:''},
      {_id:1, category:'Film', title:'The Red Corset', role:'Patrick', director:'Erica Ruez', img:''},
      {_id:1, category:'Film', title:'Delivery', role:'Imaginary Stevie', director:'Alexandra Hsie', img:''},
      {_id:1, category:'Film', title:'School\'s Out, Joints Out', role:'Ben the Stoner', director:'Shanan Leeman', img:''},
      {_id:1, category:'Film', title:'Library of Mabel Jones', role:'Horacio', director:'Max Phillips', img:''},
      {_id:1, category:'Film', title:'Beard Wars', role:'Chris', director:'David Schoner Jr.', img:''},
    ]
  }
  componentDidMount(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        parallax: true,
        speed: 600,
        mousewheelControl: true,
    });
  }


  render() {
    return (
        <div className="col-md-12 col-sm-12 about-slider-section" id="about-slider">
          <div className="swiper-container">
              <div className="parallax-bg" style={{backgroundImage:'url(images/slider/panoramic.png)'}} data-swiper-parallax="-23%"></div>
              <div className="swiper-wrapper">
                  <div className="swiper-slide">
                      <div className="title" data-swiper-parallax="-100">Slide 1</div>
                      <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
                      <div className="text" data-swiper-parallax="-300">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
                      </div>
                  </div>
                  <div className="swiper-slide">
                      <div className="title" data-swiper-parallax="-100">Slide 2</div>
                      <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
                      <div className="text" data-swiper-parallax="-300">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
                      </div>
                  </div>
                  <div className="swiper-slide">
                      <div className="title" data-swiper-parallax="-100">Slide 3</div>
                      <div className="subtitle" data-swiper-parallax="-200">Subtitle</div>
                      <div className="text" data-swiper-parallax="-300">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
                      </div>
                  </div>
              </div>
              <div className="swiper-pagination swiper-pagination-white"></div>
              <div className="swiper-button-prev swiper-button-white"></div>
              <div className="swiper-button-next swiper-button-white"></div>
          </div>

        </div>
    );
  }
}
