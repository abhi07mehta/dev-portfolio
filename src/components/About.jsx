import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid">
          <div className="about-content">
            <p className="about-text">
              I am a driven software engineer with over <strong>4 years of experience</strong> 
              delivering end-to-end full-stack solutions. My passion lies in crafting highly 
              scalable, reliable, and user-centric web applications.
            </p>
            <p className="about-text">
              Throughout my journey—from <strong>YASH Technologies</strong> to <strong>TCS</strong> and <strong>Intech</strong>—I have helped enterprise clients 
              like <em>Lloyds</em>, <em>DP World</em>, and <em>Iron Mountain</em> digitalize their workflows 
              and scale their systems efficiently. My expertise bridges intuitive frontends with robust backend architectures.
            </p>
            
            <div className="skills-container">
              <h3 className="skills-title">Core Technology Stack</h3>
              <div className="skills-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">JavaScript / ES6+</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">Redux</span>
                <span className="skill-tag">Git & GitHub</span>
                <span className="skill-tag">Responsive Design</span>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-box">
              <h4 className="stat-number">4+</h4>
              <p className="stat-label">Years of Experience</p>
            </div>
            <div className="stat-box">
              <h4 className="stat-number">3</h4>
              <p className="stat-label">Enterprise Roles</p>
            </div>
            <div className="stat-box">
              <h4 className="stat-number">2+</h4>
              <p className="stat-label">TCS Excellence Awards</p>
            </div>
            <div className="stat-box">
              <h4 className="stat-number">10+</h4>
              <p className="stat-label">Scalable Apps Built</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
