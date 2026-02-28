import './Hero.css';

const Hero = () => {
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
