import React from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail size={32} />,
      title: "Email",
      info: "jan.ruiz@mymail.champlain.edu",
      link: "mailto:jan.ruiz@mymail.champlain.edu",
      linkText: "Send Email"
    },
    {
      icon: <Linkedin size={32} />,
      title: "LinkedIn",
      info: "/in/jan-ruiz",
      link: "https://www.linkedin.com/in/jan-ruiz",
      linkText: "Connect"
    },
    {
      icon: <Github size={32} />,
      title: "GitHub",
      info: "/Solarific",
      link: "https://www.linkedin.com/in/jan-ruiz",
      linkText: "View Code"
    },
    {
      icon: <MapPin size={32} />,
      title: "Location",
      info: "Burlington, Vermont",
      link: "https://www.google.com/maps/place/Burlington,+VT/@44.501203,-73.3548528,11z/data=!4m6!3m5!1s0x4cca7a55b69b55e5:0xc35fe519720e498e!8m2!3d44.4758825!4d-73.212072!16zL20vMGhweXY?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D",
      linkText: "Open to relocation"
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="contact-description">
          I'm always excited to discuss new opportunities, collaborate on interesting projects, 
          or simply chat about technology and innovation. Feel free to reach out!
        </p>
        
        <div className="contact-grid">
          {contactMethods.map((method, index) => (
            <div key={index} className="contact-card">
              {method.icon}
              <h3>{method.title}</h3>
              <p>{method.info}</p>
              {method.link ? (
                <a href={method.link}>{method.linkText}</a>
              ) : (
                <span>{method.linkText}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;