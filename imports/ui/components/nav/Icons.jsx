import React, { Component } from 'react';



// Nav component
export default class Icons extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){

  }


  render() {
    return (
      <div id="nav-items" className="container-fluid">
      <div className="video-items col-sm-12 ">
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
        <div id="btm-left-video" className="fade-out">
        <p>
          <i className="fa fa-headphones" aria-hidden="true"></i>
          <b> Watching:</b> <span className="grey-text"> Justin Schilling 2017 Reel</span>
        </p>
        </div>
        <div id="btm-right-video" className="fade-out">
          <p>
            <i className="fa fa-arrow-down" aria-hidden="true"></i>
            <b>Scroll</b> <span className="grey-text">to continue</span>
          </p>
        </div>
      </div>
      </div>
    );
  }
}
