import React, { Component } from 'react';
import Scrollbar from 'smooth-scrollbar';


import NavWrapper from '../../ui/components/nav/NavWrapper.jsx';
import Nav from '../../ui/components/nav/Nav.jsx';
import AboutWhite from '../../ui/components/about-section/AboutWhite.jsx';
import AboutImage from '../../ui/components/about-section/AboutImage.jsx';
import AboutSlider from '../../ui/components/about-section/AboutSlider.jsx';
import Sidebar from '../../ui/components/sidebar/Sidebar.jsx';
import Header from '../../ui/components/header/Header.jsx';

export const About = () =>

<div>
  <div id="about" className="desktop-sites"  >
    <Nav />
    <NavWrapper />
    <Sidebar />
    <Header />
    <div id="b-header">
    <AboutWhite />
    </div>
    <div className="gray-bg-container container">
      <AboutImage />
    </div>
      <AboutSlider />
  </div>
</div>
