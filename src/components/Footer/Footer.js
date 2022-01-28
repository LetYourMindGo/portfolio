import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithubSquare, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-section__icons">
        <a className="icons__item" href="https://www.linkedin.com/in/igor-puris/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
        <a className="icons__item" href="https://github.com/LetYourMindGo" target="_blank"><FontAwesomeIcon icon={faGithubSquare}/></a>
        <a className="icons__item" href="https://t.me/Let_your_mind_go" target="_blank"><FontAwesomeIcon icon={faTelegramPlane}/></a>
      </div>
      <p className="footer-section__copyright">&copy; Igor Puris</p>
    </div>
  );
};

export default Footer;
