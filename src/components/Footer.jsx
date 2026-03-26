import React from 'react';
import { Github, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>Abhishek Mehta</h2>
          <p>Full-Stack Developer building scalable web applications.</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-social">
            <a href="https://github.com/abhi07mehta" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="mailto:abhishek10mehta@gmail.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Abhishek Mehta. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
