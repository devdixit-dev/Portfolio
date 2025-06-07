
import React, { useState, useEffect } from 'react';
import TypingAnimation from '@/components/TypingAnimation';

const AboutSection: React.FC = () => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showNextLine, setShowNextLine] = useState(false);

  const resumeLines = [
    "💻 Proficient in Node.js, Express.js, and MongoDB",
    "🚀 Experience with RESTful API development",
    "📊 Database design and optimization",
    "🔧 Version control with Git and GitHub",
    "☁️ Basic knowledge of cloud platforms (AWS, Azure)",
    "📱 Understanding of microservices architecture",
    "🔒 Implementation of authentication and authorization",
    "📈 Performance optimization and monitoring"
  ];

  useEffect(() => {
    if (showNextLine && currentLineIndex < resumeLines.length - 1) {
      const timer = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
        setShowNextLine(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [showNextLine, currentLineIndex, resumeLines.length]);

  const handleLineComplete = () => {
    setShowNextLine(true);
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A dedicated fresher backend developer passionate about creating efficient, 
            scalable solutions and continuously learning new technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-8 hover-lift">
            <h3 className="text-2xl font-bold mb-6 text-primary">My Journey</h3>
            <div className="space-y-4 text-lg">
              <p className="text-muted-foreground leading-relaxed">
                As a Self-taught developer, I've dedicated myself to mastering 
                backend development technologies. My passion lies in building robust APIs, 
                optimizing database queries, and ensuring scalable architecture.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code and following best practices. 
                I'm excited to contribute to meaningful projects and grow as a developer 
                in a collaborative team environment.
              </p>
            </div>
          </div>

          <div className="glass-card p-8 hover-lift">
            <h3 className="text-2xl font-bold mb-6 text-primary">Skills & Experience</h3>
            <div className="space-y-3 font-mono text-sm">
              {resumeLines.slice(0, currentLineIndex + 1).map((line, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-accent mr-2">→</span>
                  <div className="text-foreground">
                    {index === currentLineIndex ? (
                      <TypingAnimation 
                        text={line} 
                        delay={30}
                        onComplete={handleLineComplete}
                      />
                    ) : (
                      line
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 text-center hover-lift">
            <h4 className="text-xl font-semibold text-primary mb-3">Backend Technologies</h4>
            <p className="text-muted-foreground">Node.js, Express.js, Python (beginner)</p>
          </div>
          <div className="glass-card p-6 text-center hover-lift">
            <h4 className="text-xl font-semibold text-primary mb-3">Databases</h4>
            <p className="text-muted-foreground">MongoDB</p>
          </div>
          <div className="glass-card p-6 text-center hover-lift">
            <h4 className="text-xl font-semibold text-primary mb-3">Tools & Platforms</h4>
            <p className="text-muted-foreground">Git, Docker, Postman, VS Code</p>
          </div>
          <div className="glass-card p-6 text-center hover-lift">
            <h4 className="text-xl font-semibold text-primary mb-3">OS</h4>
            <p className="text-muted-foreground">Windows, Linux</p>
          </div>
          <div className="glass-card p-6 text-center hover-lift">
            <h4 className="text-xl font-semibold text-primary mb-3">Soft Skills</h4>
            <p className="text-muted-foreground">Probelm solving, Time efficiency, Team player, Fast learner</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
