import React from 'react';
import { Mail, Heart } from 'lucide-react';
import GithubIcon from './GithubIcon';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            AM<span className="footer-logo-dot">.</span>
          </a>
          <p>Full-Stack Developer building scalable web applications.</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-nav">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-social">
            <a href="https://github.com/abhi07mehta" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href="mailto:abhishek10mehta@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Abhishek Mehta. Built with{' '}
          <Heart size={14} className="heart-icon" /> & React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
