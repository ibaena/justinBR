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


      }else {

        $('.sidebar-section').css({
          'visibility':'hidden',
          'transition':'all .3s ease-in-out',
          'width':'0%'
        });

      }
    })
  }


  render() {
    return (
        <div className="col-md-3 col-sm-12 sidebar-section" >
          <h1>Sidebar</h1>
        </div>
    );
  }
}
