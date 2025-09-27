import React from 'react';
import { ChevronDown } from 'lucide-react';

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <p>© 2025 Jan Ruiz. Built with React and CSS</p>
            <p>Designed with fluidity and performance in mind.</p>
          </div>
          <div className="footer-nav">
            <button onClick={() => scrollToSection('about')} className="back-to-top">
              Back to Top
              <ChevronDown size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;