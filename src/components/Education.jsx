import React from 'react';
import { GraduationCap, BookOpen, Star } from 'lucide-react';

const Education = () => {
  const courses = [
    'Data Structures and Algorithms',
    'Object-Oriented Programming',
    'Database Systems',
    'Netowork Programming',
    'Machine Learning',
    'Data Mining',
    'Information Assurance',
    'Networking Fundamentals',
    'Linux/Unix Programming',
    'Data Visualization '
  ];

  const achievements = [
    { text: "Double Minor (Data Scinece, Cyber Security)", type: "scholarship" },
    { text: "Dean's List (5 semesters)", type: "dean" },
    { text: "Presidents List (2 semesters)", type: "honor" },
    
  ];

  const certifications = [
    "IS-1300 Introduction to Continuity of Operations (2024)",
    "IS-906 Workplace Security Awareness (2024)",
    "IS-915 Protecting Critical Infrastructure Against Internal Threats (2024)"
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">
          <GraduationCap size={32} />
          Education
        </h2>
        
        <div className="education-content">
          <div className="education-card">
            <div className="education-header">
              <div className="education-info">
                <h3>Bachelor of Science in Computer Science</h3>
                <p className="university">Champlain College</p>
                <p className="graduation">Expected Graduation: May 2026</p>
              </div>
              <div className="gpa-badge">
                GPA: 3.8/4.0
              </div>
            </div>
            
            <div className="achievements">
              <h4>Academic Achievements</h4>
              <div className="achievement-tags">
                {achievements.map((achievement, index) => (
                  <span key={index} className={`achievement-tag ${achievement.type}`}>
                    {achievement.text}
                  </span>
                ))}
              </div>
            </div>

            <div className="coursework">
              <h4>Relevant Coursework</h4>
              <div className="courses-grid">
                {courses.map((course, index) => (
                  <div key={index} className="course-item">
                    <BookOpen size={16} />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="certifications">
              <h4>Certifications</h4>
              <div className="cert-list">
                {certifications.map((cert, index) => (
                  <div key={index} className="cert-item">
                    <Star size={16} />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;