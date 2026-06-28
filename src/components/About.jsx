import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm an Information Science and Engineering student passionate about software engineering, 
              backend development, and AI-driven applications. My experience includes developing Flutter 
              applications, full-stack web solutions, and intelligent systems using modern technologies 
              like React, Node.js, MongoDB, TensorFlow, and Python.
            </p>
            <p className="about-description">
              I enjoy solving complex problems, learning emerging technologies, and building scalable 
              products that bridge innovation with real-world needs.
            </p>

            <div className="education">
              <h3 className="subsection-title">Education</h3>
              <div className="education-card">
                <div className="education-header">
                  <div>
                    <h4>Bachelor of Engineering - Information Science And Engineering</h4>
                    <p className="institution">Vidyavardhaka College of Engineering</p>
                  </div>
                  <div className="education-meta">
                    <span className="cgpa">CGPA: 7.5</span>
                    <span className="duration">2023 - Present</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="interests">
              <h3 className="subsection-title">Areas of Interest</h3>
              <div className="interest-tags">
                <span className="interest-tag">Artificial Intelligence</span>
                <span className="interest-tag">Computer Vision</span>
                <span className="interest-tag">Backend Systems</span>
                <span className="interest-tag">Mobile Development</span>
                <span className="interest-tag">Cryptography</span>
                <span className="interest-tag">Network Security</span>
                <span className="interest-tag">Machine Learning</span>
                <span className="interest-tag">Scalable Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
