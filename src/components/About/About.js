import React from 'react';
// import SkillGrid from '../SkillGrid/SkillGrid.js'
import './About.css';

const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="about-section__header">
        <h2 className="header__about">About</h2>
        <div className="header__about-line"></div>
      </div>
      <div className="about-section__main">
        <div className="main__info">
          <h3 className="info__header">Who am I?</h3>
          <img className="info__photo" src="https://i.imgur.com/m8gOqWu.jpeg" alt="IgorPuris" />
          <p className="info__text">Full stack developer with a great passion for programming. Fast learner who is confident working under stress in a high-paced environment. A team player always contributing with energy and motivation to goals achievement. Good at paying attention to details and using analytical approach combined with excellent time management and prioritisation skills to solve complex problems.</p>
        </div>
        <div className="main__skills">
          <h3 className="skills__header">My skills:</h3>
          <div className="skills__levels">
            <div className="levels__bar ">
              <div className="bar__fill" style={{ width: "80%" }} >
                <div className="bar__skill">JavaScript</div>
              </div>
              <div className="bar__procent">80%</div>
            </div>
            <div className="levels__bar ">
              <div className="bar__fill" style={{ width: "65%" }} >
                <div className="bar__skill">Node.js</div>
              </div>
              <div className="bar__procent">65%</div>
            </div>
            <div className="levels__bar ">
              <div className="bar__fill" style={{ width: "75%" }} >
                <div className="bar__skill">React</div>
              </div>
              <div className="bar__procent">75%</div>
            </div>
            <div className="levels__bar ">
              <div className="bar__fill" style={{ width: "60%" }} >
                <div className="bar__skill">MongoDB/PostgreSQL</div>
              </div>
              <div className="bar__procent">60%</div>
            </div>
            <div className="levels__bar ">
              <div className="bar__fill" style={{ width: "85%" }} >
                <div className="bar__skill">HTML</div>
              </div>
              <div className="bar__procent">85%</div>
            </div>
            <div className="levels__bar ">
              <div className="bar__fill" style={{ width: "85%" }} >
                <div className="bar__skill">CSS</div>
              </div>
              <div className="bar__procent">85%</div>
            </div>
            <div className="levels__bar ">
              <div className="bar__fill" style={{ width: "70%" }} >
                <div className="bar__skill">TypeScript</div>
              </div>
              <div className="bar__procent">70%</div>
            </div>
            <div className="levels__bar ">
              <div className="bar__fill" style={{ width: "50%" }} >
                <div className="bar__skill">Python</div>
              </div>
              <div className="bar__procent">50%</div>
            </div>
            <div className="levels__bar ">
              <div className="bar__fill" style={{ width: "60%" }} >
                <div className="bar__skill">WebSockets</div>
              </div>
              <div className="bar__procent">60%</div>
            </div>
            <div className="levels__bar ">
              <div className="bar__fill" style={{ width: "65%" }} >
                <div className="bar__skill">REST</div>
              </div>
              <div className="bar__procent">65%</div>
            </div>
            <div className="levels__bar ">
              <div className="bar__fill" style={{ width: "65%" }} >
                <div className="bar__skill">Git+GitHub</div>
              </div>
              <div className="bar__procent">65%</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
