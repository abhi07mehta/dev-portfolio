import React from 'react';
import { ArrowRight, Github, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">Available for new opportunities</div>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Abhishek Mehta</span>
          </h1>
          <h2 className="hero-subtitle">
            Full-Stack Developer building scalable web applications.
          </h2>
          <p className="hero-description">
            With over 4 years of experience, I specialize in React, Node.js, and MongoDB. 
            I've built enterprise solutions for clients like Lloyds, Iron Mountain, and DP World.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
          
          <div className="hero-social">
            <a href="https://github.com/abhi07mehta" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={22} />
            </a>
            <a href="mailto:abhishek10mehta@gmail.com" aria-label="Email">
              <Mail size={22} />
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
          <div className="glass-card main-card">
            <div className="code-header">
              <div className="dot close"></div>
              <div className="dot minimize"></div>
              <div className="dot expand"></div>
            </div>
            <pre className="code-body">
              <code>
<span className="keyword">const</span> <span className="entity">developer</span> = {'{'}
  <span className="property">name</span>: <span className="string">'Abhishek Mehta'</span>,
  <span className="property">role</span>: <span className="string">'Full-Stack Developer'</span>,
  <span className="property">tech</span>: [<span className="string">'React'</span>, <span className="string">'Node.js'</span>, <span className="string">'MongoDB'</span>],
  <span className="property">experience</span>: <span className="number">4</span> + <span className="string">' years'</span>,
  <span className="property">passion</span>: <span className="string">'Building scalable web apps 🚀'</span>
{'}'};
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
