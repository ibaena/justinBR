import React, { Component } from 'react';
import {TweenMax, Power2, TimelineLite} from "gsap";

// TvFrame component
export default class ImageSection extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){

  }
  films(){
    return [
      {_id:1, name:'Secrets That We Keep', src_lg:'/images/films/secrets-lg.png', src_sma:'/images/films/secrets.jpg', imdb:'http://www.imdb.com/title/tt5870858/?ref_=nm_knf_t1', class:'odd-ani' },
      {_id:2, name:'Terms and Conditions May Apply', src_lg:'/images/films/terms-lg.png', src_sma:'/images/films/terms.jpg', imdb:'http://www.imdb.com/title/tt6683654/?ref_=nm_knf_t2', class:'even-ani' },
      {_id:3, name:'The Gatherer', src_lg:'/images/films/gatherer-lg.png', src_sma:'/images/films/gatherer.jpg', imdb:'http://www.imdb.com/title/tt6197440/?ref_=nm_knf_t4', class:'odd-ani' },
      {_id:4, name:'True Crimes with Aphrodite Jones', src_lg:'/images/films/crimes-lg.png', src_sma:'/images/films/crimes.jpg', imdb:'http://www.imdb.com/title/tt1492627/?ref_=nm_flmg_act_4', class:'even-ani' },
    ]
  }
  renderFilms() {
    return this.films().map((item) => (
      <div className={"col-md-6 col-sm-12 single-img-wrapper " + item.class} key={item._id}>
        <div className="movie-overlay">
          <h1 className="overlay-title">{item.name}</h1>
          <a href={item.imdb} className="film-links" target="_blank">
            <i className="fa fa-imdb fa-5x" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    ))
  }


  render() {
    return (
        <div className="col-md-12 col-sm-12 image-section">
        <div className="col-md-12 col-sm-12">
          <h1 className="image-section-title">Featured In.</h1>
        </div>
          <div className="col-md-10 col-md-offset-1 col-sm-12">
            {this.renderFilms()}
          </div>
        </div>
    );
  }
}
