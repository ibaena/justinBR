import React, { Component } from 'react';
import {TweenMax, Power2, TimelineLite} from "gsap";
import Scrollbar from 'smooth-scrollbar';


// TvFrame component
export default class Sidebar extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  sideScrollbar(){
      var sidebarScroll = Scrollbar.init(document.querySelector('.no-padding'),{
       'speed': '2.2',
       'overscrollEffect':'bounce',
       'damping':'.05'
     });
  }
  componentDidMount(){

    let triggerSidebar= false;
    $('#sidebar-btn').on('click', function() {
      triggerSidebar = !triggerSidebar;

      if(triggerSidebar) {

        $('.sidebar-section').css({
          'visibility':'visible',
          'transition':'all .3s ease-in-out',
          'width':'430px',
          'background':'black'
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
        $('#menu-btn i').css({
          'color':'white',
          'transition':'all .3s ease-in-out'
        });
        $('#sidebar-btn i').css({
          'color':'white',
          'transition':'all .3s ease-in-out'
        });

      }
    })
  }

  ytVids() {
    return [
      {_id:1, src:'https://www.youtube.com/embed/nz73OSS9h1I?modestbranding=1&autohide=1&showinfo=0&controls=0'},
      {_id:2, src:'https://www.youtube.com/embed/e1GSwjLoieM?modestbranding=1&autohide=1&showinfo=0&controls=0'},
      {_id:3, src:'https://www.youtube.com/embed/OPqSt51kimA?modestbranding=1&autohide=1&showinfo=0&controls=0'},
      {_id:4, src:'https://www.youtube.com/embed/feufY7NFbPo?modestbranding=1&autohide=1&showinfo=0&controls=0'},
    ]
  }
  renderVids() {
    return this.ytVids().map((item) => (
      <div className="col-sm-12 media-item" key={item._id}>
        <div className="">
          <iframe className="cs-iframe" src={item.src} allowTransparency="true" style={{background: '#ffffff' }}></iframe>
        </div>
      </div>
    ))
  }

  render() {
    return (
        <div className=" sidebar-section" >
          <div className="container no-padding">
          <div className="col-sm-12 media-item">
            <h2 className="sidebar-header center-text">MEDIA</h2>
          </div>
            {this.renderVids()}
          </div>
        </div>
    );
  }
}
