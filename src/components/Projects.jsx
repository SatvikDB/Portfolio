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
        <h2 className="section-title">Work Experience</h2>
        <p className="projects-intro">
          I'm currently looking to join a cross-functional team that values improving 
          people's lives through accessible technology and innovative AI solutions.
        </p>
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
