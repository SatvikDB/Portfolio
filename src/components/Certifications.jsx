import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Academy Graduate',
      issuer: 'Amazon Web Services',
      description: 'Generative AI Foundations',
      icon: '☁️'
    },
    {
      title: 'Google Cloud Career Launchpad',
      issuer: 'Google Cloud',
      description: 'Cloud Engineer track',
      icon: '🌐'
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="certifications-container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-icon">{cert.icon}</div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-description">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
