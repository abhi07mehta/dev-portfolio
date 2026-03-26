import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import GithubIcon from './GithubIcon';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Track active section
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="logo">
          <span className="logo-text">AM</span>
          <span className="logo-dot">.</span>
        </a>
        
        {/* Desktop Nav */}
        <div className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className={activeSection === link.id ? 'active' : ''}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="social-links">
            <a href="https://github.com/abhi07mehta" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon size={18} /></a>
            <a href="mailto:abhishek10mehta@gmail.com" aria-label="Email"><Mail size={18} /></a>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-links">
          {navLinks.map((link, index) => (
            <li key={link.name} style={{ animationDelay: `${index * 0.1}s` }}>
              <a href={link.href} onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-social">
          <a href="https://github.com/abhi07mehta" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon size={22} /></a>
          <a href="mailto:abhishek10mehta@gmail.com" aria-label="Email"><Mail size={22} /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
