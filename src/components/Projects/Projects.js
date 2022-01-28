import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div id="projects" className="projects-section">
      <div className="projects-section__header">
        <h2 className="header__projects">Projects</h2>
        <div className="header__projects-line"></div>
      </div>
      <div className="project-section__main">
        <div className="main__projects">
          <div className="projects__item">
            <img className="item__image" src="https://i.imgur.com/oh5ao6d.png" alt="TypigTraining"/>
            <h3 className="item__title">Typing Training</h3>
            <a className="item__github" href="https://github.com/LetYourMindGo/Typing_Training">(Code on GitHub)</a>
          </div>
          <div className="projects__item">
            <img className="item__image" src="https://i.imgur.com/Jt2Hz7F.png" alt="GameHub"/>
            <a id="item1" href="https://gamehub-client.herokuapp.com/"><h3 className="item__title">GameHub</h3></a>
            <a className="item__github" href="https://github.com/LetYourMindGo/GameHub">(Code on GitHub)</a>
          </div>
          <div className="projects__item">
            <img className="item__image" src="https://i.imgur.com/6O21iCC.png" alt="TodoTypescript"/>
            <h3 className="item__title">Todo Typescript</h3>
            <a className="item__github" href="https://github.com/LetYourMindGo/TodoTypescript">(Code on GitHub)</a>
          </div>
          <div className="projects__item">
            <img className="item__image" src="https://i.imgur.com/iiRlLMs.png" alt="IgorPortfolio"/>
            <h3 className="item__title">Portfolio</h3>
            <a className="item__github" href="https://github.com/LetYourMindGo/portfolio">(Code on GitHub)</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
