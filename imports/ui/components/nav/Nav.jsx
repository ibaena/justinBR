import React, { Component } from 'react';

// Nav component
export default class Nav extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){
    let triggerMenu= false;
    $('.nav-items').on('click', function() {
      triggerMenu = !triggerMenu;

      if(triggerMenu) {
        $('.nav-wrapper').css({
          'width':'100%',
          'transition':'all .4s ease-in-out',
          'opacity':'1',
          'visibility':'visible'
        });
        $('.hvr-box').css({
          'visibility':'hidden',
          'opacity':'0',
          'transition':'all .3s ease-in-out'
        });
      }else {
        $('.nav-wrapper').css({
          'width':'0%',
          'transition':'all .4s ease-in-out',
          'opacity':'0',
          'visibility':'hidden'
        });
        $('.hvr-box').css({
          'visibility':'visible',
          'opacity':'1',
          'transition':'all .3s ease-in-out'
        });
      }
    })
  }


  render() {
    return (
      <div id="nav" className="container-fluid">
        <div className="branding">
          JUSTIN SCHILLING.
        </div>
        <div className="nav-items">
          Nav Items
        </div>
        <nav className="nav-wrapper">
          <div className="col-md-12 col-sm-12">
            NAV
          </div>
        </nav>
      </div>
    );
  }
}
