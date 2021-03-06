import React, { Component } from 'react';
import Scrollbar from 'smooth-scrollbar';


import NavWrapper from '../../ui/components/nav/NavWrapper.jsx';
import Nav from '../../ui/components/nav/Nav.jsx';
import AboutWhite from '../../ui/components/about-section/AboutWhite.jsx';
import AboutBlack from '../../ui/components/about-section/AboutBlack.jsx';
import AboutImage from '../../ui/components/about-section/AboutImage.jsx';
import AboutSlider from '../../ui/components/about-section/AboutSlider.jsx';
import Sidebar from '../../ui/components/sidebar/Sidebar.jsx';
import Header from '../../ui/components/header/Header.jsx';
import Black from '../../ui/components/section/Black.jsx';

export const About = () =>

<div>
  <div id="about" className="desktop-sites"  >
    <div id="nav-over"></div>
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
      <AboutBlack />
      <Black />
  </div>
</div>
