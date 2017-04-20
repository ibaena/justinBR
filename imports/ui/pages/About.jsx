import React, { Component } from 'react';
import Scrollbar from 'smooth-scrollbar';


import NavWrapper from '../../ui/components/nav/NavWrapper.jsx';
import Nav from '../../ui/components/nav/Nav.jsx';
import AboutWhite from '../../ui/components/about-section/AboutWhite.jsx';
import Sidebar from '../../ui/components/sidebar/Sidebar.jsx';

export const About = () =>

<div>
  <div id="about" className="desktop-sites container-fluid"  >
    <Nav />
    <NavWrapper />
    <Sidebar />

  </div>
</div>
