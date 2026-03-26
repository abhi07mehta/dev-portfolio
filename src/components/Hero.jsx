import React from 'react';
import { ArrowRight, Mail, Download } from 'lucide-react';
import GithubIcon from './GithubIcon';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Background effects */}
      <div className="hero-bg-effects">
        <div className="gradient-orb orb-violet"></div>
        <div className="gradient-orb orb-cyan"></div>
        <div className="gradient-orb orb-pink"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for new opportunities
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Abhishek Mehta</span>
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
              <GithubIcon size={20} />
            </a>
            <a href="mailto:abhishek10mehta@gmail.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="code-window">
            <div className="code-header">
              <div className="window-controls">
                <span className="dot close"></span>
                <span className="dot minimize"></span>
                <span className="dot expand"></span>
              </div>
              <span className="file-name">developer.js</span>
            </div>
            <pre className="code-body">
              <code>
<span className="keyword">const</span> <span className="entity">developer</span> = {'{'}{'\n'}
  <span className="property">name</span>: <span className="string">'Abhishek Mehta'</span>,{'\n'}
  <span className="property">role</span>: <span className="string">'Full-Stack Developer'</span>,{'\n'}
  <span className="property">tech</span>: [<span className="string">'React'</span>, <span className="string">'Node.js'</span>, <span className="string">'MongoDB'</span>],{'\n'}
  <span className="property">experience</span>: <span className="number">4</span> + <span className="string">' years'</span>,{'\n'}
  <span className="property">passion</span>: <span className="string">'Building scalable apps 🚀'</span>{'\n'}
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
