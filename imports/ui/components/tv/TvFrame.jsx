import React, { Component } from 'react';

import Slides from './Slides.jsx';

// TvFrame component
export default class TvFrame extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){
    $(".tvScreen").mousewheel(function(event, delta) {

      this.scrollLeft -= (delta * 30);

      event.preventDefault();

    });
  }


  render() {
    return (
      <div id="tv-frame" className="container-fluid">
        <div className="col-md-10 col-sm-12 tvScreen">
          <Slides />
        </div>
        <div className="col-md-2 col-sm-12 tvControls"></div>
      </div>
    );
  }
}
