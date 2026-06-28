import LiquidEther from './LiquidEther';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      {/* LiquidEther fluid simulation background */}
      <div className="hero-liquid-bg">
        <LiquidEther
          colors={['#5227FF', '#8a2be2', '#FF9FFC', '#B497CF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">Satvik DB</h1>
          <h2 className="hero-role">
            Software Engineering Student | Full-Stack Developer | AI Enthusiast
          </h2>
          <p className="hero-tagline">
            Building scalable applications that blend modern web technologies with intelligent systems.
          </p>
          <p className="hero-description">
            I enjoy creating products that solve real-world problems using MERN, AI integration, 
            and real-time technologies. Whether it's a hackathon prototype or a full-stack 
            application, I love turning ideas into experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
