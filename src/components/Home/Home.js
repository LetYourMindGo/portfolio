import React from 'react';
import IconGrid from '../IconGrid/IconGrid';
import MainButton from '../MainButton/MainButton';
import './Home.css';

const Home = () => {
  return (
    <div id="home" className="home-section">
      <IconGrid />
      <div className="home-section__text">Hello, I'm <span className="text__name">Igor Puris</span>.<br/>I'm a full-stack web developer.</div>
      <MainButton />
    </div>
  );
};

export default Home;
