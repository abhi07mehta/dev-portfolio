import React from 'react';
import { Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-content glass-panel">
          <h2 className="section-title text-center">Get In Touch</h2>
          <p className="contact-text">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, 
            or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <a href="mailto:abhishek10mehta@gmail.com" className="btn btn-primary contact-btn">
            <Mail size={20} /> Say Hello
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
