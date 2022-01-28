import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNode, faJs, faReact, faHtml5, faCss3Alt, faSass, faDocker, faGitSquare, faGithub, faAws, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import './IconGrid.css';

const IconGrid = () => {
  return (
    <div className="icon-grid">
      <div className="icon-grid__node"><FontAwesomeIcon icon={faNode}/></div>
      <div className="icon-grid__js"><FontAwesomeIcon icon={faJs}/></div>
      <div className="icon-grid__react"><FontAwesomeIcon icon={faReact}/></div>
      <div className="icon-grid__html"><FontAwesomeIcon icon={faHtml5}/></div>
      <div className="icon-grid__css"><FontAwesomeIcon icon={faCss3Alt}/></div>
      <div className="icon-grid__db"><FontAwesomeIcon icon={faDatabase}/></div>
      <div className="icon-grid__sass"><FontAwesomeIcon icon={faSass}/></div>
      <div className="icon-grid__docker"><FontAwesomeIcon icon={faDocker}/></div>
      <div className="icon-grid__gitsq"><FontAwesomeIcon icon={faGitSquare}/></div>
      <div className="icon-grid__gith"><FontAwesomeIcon icon={faGithub}/></div>
      <div className="icon-grid__aws"><FontAwesomeIcon icon={faAws}/></div>
      <div className="icon-grid__py"><FontAwesomeIcon icon={faPython}/></div>
    </div>
  );
};

export default IconGrid;
