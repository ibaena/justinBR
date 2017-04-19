import React, { Component } from 'react';



// Nav component
export default class NavWrapper extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){
    let d = new Date();
    let currYear = d.getFullYear();
    $('#year').html(currYear);
  }
  menuItems() {
    return [
      {_id:1, name:'Home', src:'/'},
      {_id:2, name:'About', src:'/about'},
      {_id:3, name:'Contact', src:'/contact'},
    ]
  }
  renderMenu() {
    return this.menuItems().map((item) => (
      <li className='menu-list-item' key={item._id}>
        <a href={item.src} className="menu-link">{item.name}</a>
      </li>
    ))
  }


  render() {
    return (
        <nav className="nav-wrapper">
          <div className="col-md-12 col-sm-12">
            <ul className="menu-list">
              {this.renderMenu()}
            </ul>
          </div>
          <div id="copyright">
            <p>© Copyright <span id="year"></span> Justin C Schilling. All Rights Reserved</p>
          </div>
        </nav>
    );
  }
}
