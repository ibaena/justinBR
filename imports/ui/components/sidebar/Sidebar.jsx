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
          'width':'400px'
        });
        $('.rotate-sidebar').css({
          'transform': 'rotate(90deg)',
          'transition': 'all .3s ease-in-out'
        });
      }else {
        $('.sidebar-section').css({
          'visibility':'hidden',
          'transition':'all .3s ease-in-out',
          'width':'1px'
        });
        $('.rotate-sidebar').css({
          'transform': 'rotate(0deg)',
          'transition': 'all .3s ease-in-out'
        });

      }
    })
  }

  ytVids() {
    return [
      {_id:1, src:'https://www.youtube.com/embed/nz73OSS9h1I'},
      {_id:2, src:'https://www.youtube.com/embed/e1GSwjLoieM'},
      {_id:3, src:'https://www.youtube.com/embed/OPqSt51kimA'},
      {_id:4, src:'https://www.youtube.com/embed/feufY7NFbPo'},
    ]
  }
  renderVids() {
    return this.ytVids().map((item) => (
      <div className="col-sm-12 media-item" key={item._id}>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={item.src}></iframe>
        </div>
      </div>
    ))
  }

  render() {
    return (
        <div className=" sidebar-section" >
          <div className="container no-padding">
            {this.renderVids()}
          </div>
        </div>
    );
  }
}
