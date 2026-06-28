import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'AEGIS',
      subtitle: 'Military Intelligence System',
      description: 'AI-powered military target and equipment detection platform with real-time threat assessment. Features YOLO11-based object detection, intelligence dashboard with analytics, and custom model training pipeline for defense applications.',
      tech: ['YOLO11', 'PyTorch', 'OpenCV', 'Flask', 'Python'],
      github: 'https://github.com/SatvikDB/AEGIS',
      image: '/images/aegis.png',
      isMobile: false,
      icon: '🎯'
    },
    {
      title: 'ClassVisionAI',
      subtitle: 'Smart Classroom Monitor',
      description: 'Real-time student attention and behavior analysis system with comprehensive analytics. Integrates multiple AI models including YOLO, DeepFace, and MediaPipe for emotion detection, attention tracking, and session management.',
      tech: ['FastAPI', 'TensorFlow', 'YOLOv8', 'DeepFace', 'MediaPipe'],
      github: 'https://github.com/SatvikDB/ClassVisionAI',
      image: '/images/classvision.png',
      isMobile: false,
      icon: '📚'
    },
    {
      title: 'KrishiKatalyst',
      subtitle: 'Plant Disease Detection App',
      description: 'Flutter-based mobile application to assist farmers with crop health identification and agricultural guidance. Uses ML-powered image recognition with Firebase integration for real-time data and cloud storage.',
      tech: ['Flutter', 'Firebase', 'TensorFlow Lite', 'Dart'],
      github: 'https://github.com/SatvikDB',
      images: ['/images/krishikatalyst1.jpeg', '/images/krishikatalyst2.jpeg'],
      isMobile: true,
      icon: '🌱'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        {/* ── Work Experience ── */}
        <div className="work-experience-section">
          <h2 className="section-title">Work Experience</h2>
          <div className="experience-card">
            <div className="experience-header">
              <div className="experience-logo-wrap">
                <img
                  src="/images/logos/zetacoding-logo.png"
                  alt="Zetacoding Innovative Solutions"
                  className="company-logo"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="experience-info">
                <h4>Software Development Intern</h4>
                <p className="company-name">Zetacoding Innovative Solutions</p>
                <p className="experience-project">
                  Worked on <span className="highlight">Million Huts</span> — a SaaS platform
                </p>
                <p className="experience-description">
                  Collaborated with developers to build and improve real-world software solutions,
                  gaining exposure to professional development workflows, writing maintainable code,
                  solving practical engineering challenges, and delivering features for a production application.
                </p>
                <a
                  href="https://millionhuts.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-link-btn"
                >
                  Visit Million Huts ↗
                </a>
              </div>
              <div className="experience-meta">
                <span className="duration">Feb 2026 – Apr 2026</span>
                <span className="exp-type">Internship</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Projects ── */}
        <h2 id="projects-list" className="section-title projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
