import React, { Component } from 'react';
import Scrollbar from 'smooth-scrollbar';

// TvFrame component
export default class Header extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){
    var scrollbar = Scrollbar.init(document.querySelector('#about'),{
     'speed': '2.2',
     'overscrollEffect':'bounce',
     'damping':'.05'
   });
  }


  render() {
    return (
        <div className="col-md-12 col-sm-12 " id="about-header">

        </div>
    );
  }
}
