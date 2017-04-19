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
      {_id:1, name:'Secrets That We Keep', src_lg:'/images/films/secrets-lg.png', src_sma:'/images/films/secrets.jpg', imdb:'http://www.imdb.com/title/tt5870858/?ref_=nm_knf_t1' },
      {_id:2, name:'Terms and Conditions May Apply', src_lg:'/images/films/terms-lg.png', src_sma:'/images/films/terms.jpg', imdb:'http://www.imdb.com/title/tt6683654/?ref_=nm_knf_t2' },
      {_id:3, name:'The Gatherer', src_lg:'/images/films/gatherer-lg.png', src_sma:'/images/films/gatherer.jpg', imdb:'http://www.imdb.com/title/tt6197440/?ref_=nm_knf_t4' },
      {_id:4, name:'True Crimes with Aphrodite Jones', src_lg:'/images/films/crimes-lg.png', src_sma:'/images/films/crimes.jpg', imdb:'http://www.imdb.com/title/tt1492627/?ref_=nm_flmg_act_4' },
    ]
  }
  renderFilms() {
    return this.films().map((item) => (
      <div className="col-md-6 col-sm-12 single-img-wrapper" key={item._id}>
        <div className="movie-overlay">
          <h1 className="overlay-title">{item.name}</h1>
          <a href={item.imdb} className="film-links" target="_blank">IMDB This</a>
        </div>
      </div>
    ))
  }


  render() {
    return (
        <div className="col-md-12 col-sm-12 image-section">
          <div className="col-md-12 col-sm-12">
            {this.renderFilms()}
          </div>
        </div>
    );
  }
}
