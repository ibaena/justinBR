import React, { Component } from 'react';
import Scrollbar from 'smooth-scrollbar';

import NavWrapper from '../../ui/components/nav/NavWrapper.jsx';
import Nav from '../../ui/components/nav/Nav.jsx';
import Video from '../../ui/components/video/Video.jsx';
import Sidebar from '../../ui/components/sidebar/Sidebar.jsx';


export const Home = () =>


<div>
  <div id="home" className="desktop-sites container-fluid"  >
    <Nav />
    <NavWrapper />
    <Sidebar />
    <Video />
  </div>
</div>
