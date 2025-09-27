import React from 'react';
import { Code } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "C++", proficiency: 100 },
        { name: "Python", proficiency: 100 },
        { name: "Java", proficiency: 80 },
        { name: "JavaScript", proficiency: 75 },
        { name: "TypeScript", proficiency: 75 },
        { name: "SQL", proficiency: 70 }
      ]
    },
    
    {
      category: "Development Tools",
      skills: [
        { name: "Git/GitHub", proficiency: 100 },
        { name: "VS Code", proficiency: 100 },
        { name: "VS Community", proficiency: 100 },
        { name: "JB Rider ", proficiency: 90 },
        { name: "Figma", proficiency: 30 },
      ]
    },
    {
      category: "Web Tech & Databases",
      skills: [
        { name: "Node.js", proficiency: 100 },
        { name: "HTML5/CSS3", proficiency: 95 },
        { name: "React", proficiency: 90 },
        { name: "MySQL", proficiency: 90 },
        { name: "PostgreSQL", proficiency: 40 },
        { name: "Firebase", proficiency: 25 },
      ]
    },

  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">
          <Code size={32} />
          Technical Skills
        </h2>
        
        <div className="skills-grid">
          {skillCategories.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category-title">{skillGroup.category}</h3>
              <div className="skills-list">
                {skillGroup.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.proficiency}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;