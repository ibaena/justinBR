import React, { Component } from 'react';
import {TweenMax, Power2, TimelineLite} from "gsap";

// TvFrame component
export default class Black extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){

  }


  render() {
    return (
        <div className="col-md-12 col-sm-12 black-section" id="black">
          <h1>Black</h1>
        </div>
    );
  }
}
