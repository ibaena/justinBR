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
      {_id:4, category:'Film', title:'The Red Corset', role:'Patrick', director:'Erica Ruez', img:''},
      {_id:5, category:'Film', title:'Delivery', role:'Imaginary Stevie', director:'Alexandra Hsie', img:''},
      {_id:6, category:'Film', title:'School\'s Out, Joints Out', role:'Ben the Stoner', director:'Shanan Leeman', img:''},
      {_id:7, category:'Film', title:'Library of Mabel Jones', role:'Horacio', director:'Max Phillips', img:''},
      {_id:8, category:'Film', title:'Beard Wars', role:'Chris', director:'David Schoner Jr.', img:''},
    ]
  }
  theatreList() {
    return [
      {_id:1, category:'Theatre', title:'The Maltese Walter', role:'Walter', director:'Greenhouse Ensemble', image:''},
      {_id:2, category:'Theatre', title:'No Homo', role:'Dave', director:'Fearless Productions', img:''},
      {_id:3, category:'Theatre', title:'Wrong Stuff', role:'Fred', director:'Fearless Productions', img:''},
      {_id:4, category:'Theatre', title:'Little Foxes', role:'Leo Hubbard', director:'Mikes Hagins', img:''},
      {_id:5, category:'Theatre', title:'BOYS\' LIFE', role:'Jack', director:'Jeremy Robinson', img:''},
    ]
  }
  webVoiceList() {
    return [
      {_id:1, category:'Web', title:'Blue Wall', role:'Detective Bilan', director:'Sovereign Five Features', image:''},
      {_id:2, category:'Web', title:'Three Days of Glory', role:'AMC', director:'Gray-Wing Entertainmen', img:''},
      {_id:3, category:'Voice Over', title:'The Bootleggers', role:'Father Baldoni', director:'Pocket Radio Theater', img:''},
      {_id:4, category:'Voice Over', title:'John Enters Another...', role:'Dispatcher', director:'Radio!- Karl Sparks', img:''},
    ]
  }
  renderFilm() {
    return this.filmList().map((item) => (
      <tr className="subtitle" data-swiper-parallax="-200" key={item._id}>
        <td data-swiper-parallax="-200">{item.title}</td>
        <td data-swiper-parallax="-200">{item.role}</td>
        <td data-swiper-parallax="-200">{item.director}</td>
      </tr>
    ))
  }
  renderTheatre() {
    return this.theatreList().map((item) => (
      <tr className="subtitle" data-swiper-parallax="-200" key={item._id}>
        <td data-swiper-parallax="-200">{item.title}</td>
        <td data-swiper-parallax="-200">{item.role}</td>
        <td data-swiper-parallax="-200">{item.director}</td>
      </tr>
    ))
  }
  renderWebVoice() {
    return this.webVoiceList().map((item) => (
      <tr className="subtitle" data-swiper-parallax="-200" key={item._id}>
        <td data-swiper-parallax="-200">{item.title}</td>
        <td data-swiper-parallax="-200">{item.role}</td>
        <td data-swiper-parallax="-200">{item.director}</td>
      </tr>
    ))
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
          <h1 className="ab-head">Credits</h1>
          <div className="swiper-container">
              <div className="parallax-bg" style={{backgroundImage:'url(images/slider/movieSet.png)'}} data-swiper-parallax="-23%"></div>
              <div className="swiper-wrapper">
                  <div className="swiper-slide">
                      <div className="title" data-swiper-parallax="-100">Films</div>
                      <table className="info-wrapper">
                        <thead>
                          <tr>
                            <td>TITLE</td>
                            <td>ROLE</td>
                            <td>DIRECTOR</td>
                          </tr>
                        </thead>
                        <tbody>
                          {this.renderFilm()}
                        </tbody>
                      </table>
                  </div>
                  <div className="swiper-slide">
                      <div className="title" data-swiper-parallax="-100">Theatre</div>
                      <table className="info-wrapper">
                        <thead>
                          <tr>
                            <td>TITLE</td>
                            <td>ROLE</td>
                            <td>DIRECTOR</td>
                          </tr>
                        </thead>
                        <tbody>
                          {this.renderTheatre()}
                        </tbody>
                      </table>
                  </div>
                  <div className="swiper-slide">
                      <div className="title" data-swiper-parallax="-100">Web & Voice </div>
                      <table className="info-wrapper">
                        <thead>
                          <tr>
                            <td>TITLE</td>
                            <td>ROLE</td>
                            <td>DIRECTOR</td>
                          </tr>
                        </thead>
                        <tbody>
                          {this.renderWebVoice()}
                        </tbody>
                      </table>
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
