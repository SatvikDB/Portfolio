import { useState } from 'react';
import StarBorder from './StarBorder';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          Satvik DB
        </div>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a onClick={() => scrollToSection('hero')} className="nav-link">Home</a>
          <a onClick={() => scrollToSection('about')} className="nav-link">About</a>
          <a onClick={() => scrollToSection('projects')} className="nav-link">Work</a>
          <a onClick={() => scrollToSection('projects-list')} className="nav-link">Projects</a>
          <a onClick={() => scrollToSection('contact')} className="nav-link">Contact</a>
          <StarBorder
              as="a"
              href="/SatvikDB_Resume.pdf"
              download="SatvikDB_Resume.pdf"
              color="#8a2be2"
              speed="4s"
              thickness={2}
              className="nav-resume-star"
            >
              Resume
            </StarBorder>
        </div>

        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
