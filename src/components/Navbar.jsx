import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import GithubIcon from './GithubIcon';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo">AM</a>
        
        {/* Desktop Nav */}
        <div className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
          <div className="social-links">
            <a href="https://github.com/abhi07mehta" target="_blank" rel="noopener noreferrer"><GithubIcon size={20} /></a>
            <a href="mailto:abhishek10mehta@gmail.com"><Mail size={20} /></a>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={() => setMobileMenuOpen(false)}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
