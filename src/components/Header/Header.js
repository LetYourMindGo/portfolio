import React from 'react';
import './Header.css';

const Header = () => {
  const setActive = (e) => {
    const currentActive = document.getElementsByClassName('active');
    currentActive[0].className = currentActive[0].className.replace(' active', '');
    e.target.className += ' active';
  }

  return (
    <div className="app-header">
      <h3 className="app-header__author-name">Igor Puris</h3>
      <div className="app-header__links">
        <a className="links__navigation active" href="#home" onClick={setActive}>Home</a>
        <a className="links__navigation" href="#about" onClick={setActive}>About</a>
        <a className="links__navigation" href="#projects" onClick={setActive}>Projects</a>
        <a className="links__navigation" href="#contact" onClick={setActive}>Contact</a>
      </div>
    </div>
  );
};

export default Header;
