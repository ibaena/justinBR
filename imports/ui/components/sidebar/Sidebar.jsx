import React, { Component } from 'react';
import {TweenMax, Power2, TimelineLite} from "gsap";

// TvFrame component
export default class Sidebar extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){
    let triggerSidebar= false;
    $('#sidebar-btn').on('click', function() {
      triggerSidebar = !triggerSidebar;

      if(triggerSidebar) {

        $('.sidebar-section').css({
          'visibility':'visible',
          'transition':'all .3s ease-in-out',
          'width':'25%'
        });
        $('.rotate-sidebar').css({
          'transform': 'rotate(90deg)',
          'transition': 'all .3s ease-in-out'
        });
      }else {
        $('.sidebar-section').css({
          'visibility':'hidden',
          'transition':'all .3s ease-in-out',
          'width':'1%'
        });
        $('.rotate-sidebar').css({
          'transform': 'rotate(0deg)',
          'transition': 'all .3s ease-in-out'
        });

      }
    })
  }


  render() {
    return (
        <div className=" sidebar-section" >
          <div className="container">
            <div className="col-sm-12 media-item"></div>
            <div className="col-sm-12 media-item"></div>
            <div className="col-sm-12 media-item"></div>
            <div className="col-sm-12 media-item"></div>
          </div>
        </div>
    );
  }
}
