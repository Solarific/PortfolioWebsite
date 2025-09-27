import React from 'react';
import { Mail, Linkedin, Github, Download, User, Target, Code, Award, Heart } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  const skills = ['C++', 'C#', 'Python', 'Machine Learning', 'React', 'Node.js', 'MySQL', 'Git'];
  
  const goals = [
    {
      icon: <Code size={24} />,
      title: "Full-Stack Development",
      description: "Master both frontend and backend technologies to build complete applications"
    },
    {
      icon: <Award size={24} />,
      title: "AI & Machine Learning",
      description: "Contribute to the advancement of AI technologies and ethical AI development"
    },
    {
      icon: <Heart size={24} />,
      title: "Social Impact",
      description: "Use technology to create solutions that positively impact communities"
    }
  ];

  return (
    <section id="about" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-image-container">
            <div className="hero-image">
              <User size={120} />
            </div>
            <div className="social-links">
              <a href="mailto:jan.ruiz@mymail.champlain.edu" className="social-link">
                <Mail size={24} />
              </a>
              <a href="https://www.linkedin.com/in/jan-ruiz" className="social-link">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/Solarific" className="social-link">
                <Github size={24} />
              </a>
            </div>
          </div>
          
          <div className="hero-text">
            <h1 className="hero-name">Jan Ruiz</h1>
            <p className="hero-subtitle">Computer Science Student / Software Engineer</p>
            
            <div className="hero-description">
              <p>
                I'm a Computer Science Major at Champlain College with a deep fascination for building 
                innovative software solutions that solve real-world problems. My journey in technology began at a young age, where I
                took apart devices and learned the intricacies within them. This later branched into my love for hardware and programming.   
              </p>
              <p>
                What drives me is the intersection of creativity and logic that programming offers. I am no artist when handed
                a canvas and paint, I do not have the gift to see things in my mind. However, hand me a keyboard, and the world of
                coding allows me to express myself in a different manner. Coding is an artform. 
              </p>
              <p>
                When I'm not coding, you'll find me biking, climbing, or just enjoying the outdoors. I interact
                with my local community and keep myself busy when not at work or school.
              </p>
            </div>

            <div className="skills-preview">
              <h3>Quick Skills Overview</h3>
              <div className="skills-tags">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="hero-buttons">
              <a 
                href="/Jan_Ruiz_Resume.pdf" 
                download="Jan_Ruiz_Resume.pdf"
                className="btn-primary"
                style={{textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem'}}
              >
                <Download size={20} />
                Download Resume
              </a>
              <button 
                onClick={() => scrollToSection('projects')}
                className="btn-secondary"
              >
                View Projects
              </button>
            </div>
          </div>
        </div>

        <div className="career-goals">
          <h3 className="goals-title">
            <Target size={24} />
            Career Goals & Aspirations
          </h3>
          <div className="goals-grid">
            {goals.map((goal, index) => (
              <div key={index} className="goal-item">
                <div className="goal-icon">
                  {goal.icon}
                </div>
                <h4>{goal.title}</h4>
                <p>{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;