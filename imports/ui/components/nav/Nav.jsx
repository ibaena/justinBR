import React, { Component } from 'react';



// Nav component
export default class Nav extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){
    let triggerMenu= false;
    $('#menu-btn').on('click', function() {
      triggerMenu = !triggerMenu;

      if(triggerMenu) {
        $('.nav-wrapper').css({
          'width':'100%',
          'transition':'all .4s ease-in-out',
          'opacity':'1',
          'visibility':'visible'
        });
        $('.fade-out').css({
          'visibility':'hidden',
          'opacity':'0',
          'transition':'all .3s ease-in-out'
        });
          $('#home-page').toggleClass('home-page overflow-hide');
          $('.rotate-menu').css({
            'transform': 'rotate(90deg)',
            'transition': 'all .3s ease-in-out'
          })


      }else {
        $('.nav-wrapper').css({
          'width':'0%',
          'transition':'all .4s ease-in-out',
          'opacity':'0',
          'visibility':'hidden'
        });
        $('.fade-out').css({
          'visibility':'visible',
          'opacity':'1',
          'transition':'all .3s ease-in-out'
        });
        $('#home-page').toggleClass('overflow-hide home-page');
        $('.rotate-menu').css({
          'transform': 'rotate(0deg)',
          'transition': 'all .3s ease-in-out'
        })
      }
    })
  }


  render() {
    return (
      <div id="nav" className="container-fluid">
        <div className="branding">
          JUSTIN SCHILLING.
        </div>

        <div className="video-items col-sm-12 fade-out">
          <div id="btm-left-video">
          <p>
            <i className="fa fa-headphones" aria-hidden="true"></i>
            <b> Watching:</b> <span className="grey-text"> Justin Schilling 2017 Reel</span>
          </p>
          </div>
          <div id="btm-right-video">
            <p>
              <i className="fa fa-arrow-down" aria-hidden="true"></i>
              <b>Scroll</b> <span className="grey-text">to continue</span>
            </p>
          </div>
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
