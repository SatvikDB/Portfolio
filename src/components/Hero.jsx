import './Hero.css';

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">Satvik DB</h1>
          <h2 className="hero-role">
            A Software Engineering Student who builds intelligent systems...
          </h2>
          <p className="hero-tagline">
            Because if the code doesn't solve real problems, what else can?
          </p>
          <p className="hero-description">
            I'm a self-taught AI/ML developer, functioning in the field for 2+ years now. 
            I make meaningful and impactful digital products that create an equilibrium 
            between user needs and technological innovation.
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </button>
            <a 
              href="/resume/Satvik_DB_Resume.pdf" 
              download="Satvik_DB_Resume.pdf"
              className="btn btn-secondary"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
