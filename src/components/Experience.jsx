import React from 'react';
import { Briefcase, Award } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Full-Stack Developer',
      company: 'YASH Technologies',
      period: 'Recent',
      description: 'Building modern and scalable enterprise web applications using React and Node.js. Coordinating with cross-functional teams to deliver high-quality software.'
    },
    {
      role: 'System Engineer',
      company: 'Tata Consultancy Services (TCS)',
      period: 'Previous',
      description: 'Worked on critical digital transformation projects for global clients including Lloyds, Iron Mountain, and DP World. Optimized database queries and scaled frontend architecture.',
      highlight: 'Awarded multiple awards for technical excellence and project delivery.'
    },
    {
      role: 'Software Developer',
      company: 'Intech',
      period: 'Early Career',
      description: 'Started professional journey developing core software modules. Expanded expertise in frontend frameworks and RESTful API integration.'
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-marker"></div>
              <div className="timeline-content glass-panel">
                <div className="timeline-header">
                  <div className="role-company">
                    <h3>{exp.role}</h3>
                    <h4><Briefcase size={16} /> {exp.company}</h4>
                  </div>
                  <span className="period">{exp.period}</span>
                </div>
                <p className="description">{exp.description}</p>
                {exp.highlight && (
                  <div className="highlight-box">
                    <Award size={18} />
                    <span>{exp.highlight}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
