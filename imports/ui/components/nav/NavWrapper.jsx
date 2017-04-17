import React, { Component } from 'react';



// Nav component
export default class NavWrapper extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }
  componentDidMount(){

  }


  render() {
    return (
        <nav className="nav-wrapper">
          <div className="col-md-12 col-sm-12">
            NAV
          </div>
        </nav>
    );
  }
}
