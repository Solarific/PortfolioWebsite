import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "The Leahy Center",
      period: "May 2025 - Ongoing",
      location: "Burlington, VT",
      description: "Developing a tool that allows for data extraction from devices",
      achievements: [
        "Made several compression type systems for extracted files",
        "Made user interaction morre dynamic",
        "Implemented ease-of-use features to tool"
      ],
      technologies: ["C#", "XAML", "MVVM","Git"]
    },
    {
      title: "Lead Maker Technician",
      company: "The Generator",
      period: "January 2025 - Present",
      location: "Burlington, VT",
      description: "Assist in the use of several manifacturing devices ",
      achievements: [
        "Learned and experimented 3D printers and laser cutters",
      ],
      technologies: ["Prusa Slicer", "Adobe Illustrator", "Blender", "Vinyl Cutter"]
    },

  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">
          <Briefcase size={32} />
          Experience
        </h2>
        
        <div className="experience-list">
          {experiences.map((job, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <div className="experience-info">
                  <h3 className="job-title">{job.title}</h3>
                  <p className="company">{job.company}</p>
                  <p className="location">{job.location}</p>
                </div>
                <div className="experience-meta">
                  <span className="period">{job.period}</span>
                </div>
              </div>
              <p className="job-description">{job.description}</p>
              
              <div className="achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  {job.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="job-technologies">
                <h4>Technologies Used:</h4>
                <div className="tech-tags">
                  {job.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;