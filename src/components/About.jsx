import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

const About = () => {
  const [sectionRef, isVisible] = useScrollReveal(0.1);

  const skills = [
    'React', 'Node.js', 'MongoDB', 'JavaScript / ES6+',
    'Express.js', 'Redux', 'REST APIs', 'Git & GitHub',
    'TypeScript', 'Responsive Design'
  ];

  const stats = [
    { number: '4+', label: 'Years of Experience' },
    { number: '3', label: 'Enterprise Roles' },
    { number: '2+', label: 'TCS Excellence Awards' },
    { number: '10+', label: 'Scalable Apps Built' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container" ref={sectionRef}>
        <div className={`about-wrapper ${isVisible ? 'visible' : ''}`}>
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
                  {skills.map((skill, index) => (
                    <span 
                      className="skill-tag" 
                      key={skill}
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div 
                  className="stat-box" 
                  key={index}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="stat-number">{stat.number}</h4>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
