import React from 'react';
import { ExternalLink } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Projects.css';

const Projects = () => {
  const [sectionRef, isVisible] = useScrollReveal(0.1);

  const projects = [
    {
      title: 'job-net',
      description: 'A full-stack, modular job portal application featuring complete user authentication, dynamic job posting, and robust architecture.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/abhi07mehta/job-net',
      featured: true
    },
    {
      title: 'netflix-gpt',
      description: 'Netflix-inspired movie application with GPT-powered search capabilities, integrating TMDB API for real-time movie data.',
      tech: ['React', 'Redux', 'TMDB API', 'OpenAI'],
      github: 'https://github.com/abhi07mehta/netflix-gpt',
      featured: true
    },
    {
      title: 'devTinder-web',
      description: 'Developer matching platform allowing users to swipe to connect with other developers based on their tech stack.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/abhi07mehta/devTinder-web',
      featured: false
    },
    {
      title: 'The-Cake-Shop',
      description: 'Full-featured cake ordering web application with responsive UI, cart management, and seamless checkout flow.',
      tech: ['React', 'CSS3', 'Node.js'],
      github: 'https://github.com/abhi07mehta/The-Cake-Shop',
      featured: false
    },
    {
      title: 'mqtt_iot',
      description: 'IoT messaging backend system using the MQTT protocol designed for real-time and efficient device communication.',
      tech: ['Node.js', 'MQTT', 'IoT'],
      github: 'https://github.com/abhi07mehta/mqtt_iot',
      featured: false
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container" ref={sectionRef}>
        <div className={`projects-wrapper ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Featured Projects</h2>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                className={`project-card ${project.featured ? 'featured' : ''}`} 
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-content">
                  <div className="project-top">
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <GithubIcon size={20} />
                      </a>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>
                  
                  <div className="project-tech">
                    {project.tech.map((techItem, i) => (
                      <span key={i} className="tech-badge">{techItem}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="more-projects">
            <a href="https://github.com/abhi07mehta" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <GithubIcon size={18} />
              View Full Archive on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
