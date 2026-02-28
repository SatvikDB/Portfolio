import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C/C++', 'Java', 'Python', 'Dart', 'JavaScript']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['Flutter', 'Node.js', 'Express', 'FastAPI', 'Flask', 'TensorFlow', 'PyTorch', 'OpenCV']
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'MySQL', 'SQLite', 'Firebase']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Firebase', 'Android Studio', 'Linux', 'YOLO', 'MediaPipe', 'DeepFace']
    },
    {
      title: 'Core Concepts',
      skills: ['OOP', 'DBMS', 'Operating Systems', 'Computer Networks', 'Machine Learning', 'Computer Vision', 'Deep Learning']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
