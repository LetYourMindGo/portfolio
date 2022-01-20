import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNode, faJs, faReact, faHtml5, faCss3Alt, faSass, faDocker, faGitSquare, faGithub, faAws, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import './IconGrid.css';

const IconGrid = () => {
  return (
    <div className="icon-grid">
      <div className="node"><FontAwesomeIcon icon={faNode}/></div>
      <div className="js"><FontAwesomeIcon icon={faJs}/></div>
      <div className="react"><FontAwesomeIcon icon={faReact}/></div>
      <div className="html"><FontAwesomeIcon icon={faHtml5}/></div>
      <div className="css"><FontAwesomeIcon icon={faCss3Alt}/></div>
      <div className="db"><FontAwesomeIcon icon={faDatabase}/></div>
      <div className="sass"><FontAwesomeIcon icon={faSass}/></div>
      <div className="docker"><FontAwesomeIcon icon={faDocker}/></div>
      <div className="gitsq"><FontAwesomeIcon icon={faGitSquare}/></div>
      <div className="gith"><FontAwesomeIcon icon={faGithub}/></div>
      <div className="aws"><FontAwesomeIcon icon={faAws}/></div>
      <div className="py"><FontAwesomeIcon icon={faPython}/></div>
    </div>
  );
};

export default IconGrid;
