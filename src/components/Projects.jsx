import React from 'react';
import { Award, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Murkie - Privacy Info AI Cleanser",
      description: "An application that strips personal information off documents",
      tech: ["Python", "Electron", "PowerShell"],
      features: [
        "Machine learning models for stripping PPI",
        "Saftey Risk Reports",
        "Web scrapping for user data"
      ],
      role: "Full-Stack Developer (Team of 4)",
      image: "🤖",
      github: "https://github.com/nicoleamaral37/Murkie",
    },
        {
      title: "Music Heat Map ",
      description: "A full-stack mobile application that tracks users music listening habbits and plots heatmap data",
      tech: ["React", "Node.js", "AndroidSDK", "TypeScript"],
      features: [
        "Utilizes Spotify API to track music",
        "Interactive Google API Map and visualizations",
        "Social features for sharing personal heat maps"
      ],
      role: "Front/Back End Developer (Team of 4)",
      image: "🗺️",
      github: "https://github.com/luciuskarki/MusicHeatMap",
  
    },
    {
      title: "Arduino Remote Control Car",
      description: "A remote control car controlled through bluetooth on a mobile device",
      tech: ["C++", "Arduino"],
      features: [
        "Bluetooth control",
        "Speed controller",
      ],
      role: "Solo Developer",
      image: "🏎️",
      github: "https://github.com/sarahchen/codereview-bot",
      demo: "https://codereview-bot-demo.com"
    },
    {
      title: "MoreThanSnacks Website - ARG",
      description: "A HTML/CSS website project created for an Alternate Reality Game ",
      tech: ["React", "Firebase", "Socket.io", "Material-UI", "Node.js"],
      features: [
        "Interactible and dynamic website",
        "Real-time story telling",
        "Custom made sprites"
      ],
      role: "Lead Developer (Team of 3)",
      image: "📚",
      github: "https://github.com/Solarific/MoreThanSnacks",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          <Award size={32} />
          Featured Projects
        </h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  <h4>Technologies:</h4>
                  <div className="tech-tags">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-role">
                  <strong>Role:</strong> {project.role}
                </div>

                <div className="project-links">
                  <a href={project.github} className="project-link">
                    <Github size={16} />
                    View Code
                  </a>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;