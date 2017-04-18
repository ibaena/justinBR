import React, { Component } from 'react';

import Icons from './Icons.jsx';
import NavWrapper from './NavWrapper.jsx';

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
          });
          $('#menu-btn i').css({
            'color':'white',
            'transition':'all .3s ease-in-out'
          });
          $('#sidebar-btn i').css({
            'color':'white',
            'transition':'all .3s ease-in-out'
          });
          $('.branding').css({
            'color':'white',
            'transition':'all .3s ease-in-out'
          });

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
        });

      }
    })
  }


  render() {
    return (
      <div id="nav" className="container-fluid">
      <Icons />
      </div>
    );
  }
}
