import React, { Component } from 'react';
import Scrollbar from 'smooth-scrollbar';

import Nav from '../../ui/components/nav/Nav.jsx';
import NavWrapper from '../../ui/components/nav/NavWrapper.jsx';
import Video from '../../ui/components/video/Video.jsx';
import Sidebar from '../../ui/components/sidebar/Sidebar.jsx';





export const Home = () =>


<div>
  <div id="home" className="desktop-sites container-fluid"  >
  <div className="branding">
    JUSTIN SCHILLING.
  </div>
  <div className="nav-items">
    <div id="menu-btn">
      <i className="fa fa-superpowers rotate-menu" aria-hidden="true"></i>
    </div>
    <div id="sidebar-btn">
      <i className="fa fa-xing rotate-sidebar" aria-hidden="true"></i>
    </div>
  </div>
    <NavWrapper />
    <Sidebar />
    <Video />
  </div>
</div>
