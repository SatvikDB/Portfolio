import { useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-intro">
          I'm currently looking for new opportunities and collaborations. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        
        <div className="contact-grid">
          <a href="mailto:satvikdb04@gmail.com" className="contact-card">
            <h3>Email</h3>
            <p>satvikdb04@gmail.com</p>
          </a>

          <a href="tel:+919008297218" className="contact-card">
            <h3>Phone</h3>
            <p>+91 9008297218</p>
          </a>

          <a href="https://www.linkedin.com/in/satvikdb/" target="_blank" rel="noopener noreferrer" className="contact-card">
            <h3>LinkedIn</h3>
            <p>satvikdb</p>
          </a>

          <a href="https://github.com/SatvikDB" target="_blank" rel="noopener noreferrer" className="contact-card">
            <h3>GitHub</h3>
            <p>SatvikDB</p>
          </a>
        </div>

        {/* Visme contact form */}
        <div className="contact-form-wrap">
          <div
            className="visme_d"
            data-title="Business Prospect Contact Form"
            data-url="17evv6rp-business-prospect-contact-form"
            data-domain="forms"
            data-full-page="false"
            data-min-height="500px"
            data-form-id="187830"
          />
        </div>

        <div className="contact-location">
          <p>📍 Mysore, Karnataka, India</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
