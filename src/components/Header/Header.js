import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="app-header">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <h3>Igor Puris</h3>
    </div>
  );
};

export default Header;
