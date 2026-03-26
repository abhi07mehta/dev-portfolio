import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

const Contact = () => {
  const [sectionRef, isVisible] = useScrollReveal(0.1);

  return (
    <section id="contact" className="contact-section">
      <div className="container" ref={sectionRef}>
        <div className={`contact-wrapper ${isVisible ? 'visible' : ''}`}>
          <div className="contact-card">
            <div className="contact-glow"></div>
            <h2 className="section-title contact-title">Get In Touch</h2>
            <p className="contact-text">
              I'm currently looking for new opportunities. Whether you have a question, a project idea, 
              or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <a href="mailto:abhishek10mehta@gmail.com" className="btn btn-primary contact-btn">
              <Mail size={20} />
              Say Hello
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
