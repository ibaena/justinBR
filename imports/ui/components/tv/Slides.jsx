import React, { Component } from 'react';
import {TweenMax, Power2, TimelineLite} from "gsap";

// TvFrame component
export default class Slides extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){
    this.clickFullScreen();
    

  }

  clickFullScreen() {
    let fireFullScreen = false;
    $('.single-slides').on('click', function() {
      fireFullScreen = !fireFullScreen;
      let currentSel = $(this);
      let currentId = this.id;

      //TweenMax.to(currentSel, .4, {width:'0%', ease:Cubic.easeInOut}, .1);

      if(fireFullScreen) {
        $('#tv-frame').animate({scrollLeft: $('#tv-frame').offset().left}, 800);
        currentSel.css({
          'position': 'absolute',
          'top': '50%',
          'left': '50%',
          'transform': 'translate(-50%, -50%)',
          'height': '100%',
          'width': '100%',
          'padding': '0',
          'margin': '0',
          'transition': 'all .6s ease-in-out',
          'z-index':'10',
        })
        setTimeout(function() {
          $('#slide-wrapper').css({
            'position':'fixed',
          })
        },400)
      } else {
        $('#slide-wrapper').css({
          'position':'inherit'
        })
        switch (currentId) {
          case 'slide-1':
          currentSel.css({
            'position': 'absolute',
            'top': '50%',
            'left': '0',
            'transform': 'translate(0%, -50%)',
            'height': '400px',
            'width': '600px',
            'padding': '0',
            'margin': '0',
            'transition': 'all .6s ease-in-out',
          })
          setTimeout(function() {
            currentSel.css({
              'z-index':'0',
            })
          },600)

            break;
            case 'slide-2':
            currentSel.css({
              'position': 'absolute',
              'top': '50%',
              'left': '40%',
              'transform': 'translate(0%, -50%)',
              'height': '400px',
              'width': '600px',
              'padding': '0',
              'margin': '0',
              'transition': 'all .6s ease-in-out',
            })
            setTimeout(function() {
              currentSel.css({
                'z-index':'0',
              })
            },600)
              break;
              case 'slide-3':
              currentSel.css({
                'position': 'absolute',
                'top': '50%',
                'left': '80%',
                'transform': 'translate(0%, -50%)',
                'height': '400px',
                'width': '600px',
                'padding': '0',
                'margin': '0',
                'transition': 'all .6s ease-in-out',
              })
              setTimeout(function() {
                currentSel.css({
                  'z-index':'0',
                })
              },600)
                break;
                case 'slide-4':
                currentSel.css({
                  'position': 'absolute',
                  'top': '50%',
                  'left': '120%',
                  'transform': 'translate(0%, -50%)',
                  'height': '400px',
                  'width': '600px',
                  'padding': '0',
                  'margin': '0',
                  'transition': 'all .6s ease-in-out',
                })
                setTimeout(function() {
                  currentSel.css({
                    'z-index':'0',
                    'transition':'all .4s ease-in-out'
                  })
                },600)
                  break;
          default:

        }

      }

    })
  }

  slideObj() {
    return [
      {_id:1,},
      {_id:2,},
      {_id:3,},
      {_id:4,},
    ]
  }
  renderSlides() {
    return this.slideObj().map((item) => (
      <div className="single-slides col-md-4 col-sm-12" id={"slide-"+item._id} key={item._id}>{item._id}</div>
    ))
  }


  render() {
    return (
      <div id="slide-wrapper" className="">
          {this.renderSlides()}
      </div>
    );
  }
}
