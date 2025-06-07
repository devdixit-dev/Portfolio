
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce API",
      description: "A comprehensive REST API for an e-commerce platform with user authentication, product management, and order processing.",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT"],
      githubUrl: "https://github.com",
      liveUrl: null
    },
    {
      title: "Task Management System",
      description: "Backend system for a task management application with real-time updates and team collaboration features.",
      technologies: ["Node.js", "Socket.io", "PostgreSQL", "Redis"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Weather API Service",
      description: "Microservice that aggregates weather data from multiple sources with caching and rate limiting.",
      technologies: ["Python", "FastAPI", "Redis", "Docker"],
      githubUrl: "https://github.com",
      liveUrl: null
    },
    {
      title: "Authentication Service",
      description: "Secure authentication microservice with OAuth integration, password encryption, and session management.",
      technologies: ["Node.js", "Express.js", "JWT", "bcrypt"],
      githubUrl: "https://github.com",
      liveUrl: null
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of the backend projects I've worked on to demonstrate 
            my skills in server-side development and API design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="glass-card p-6 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                  className="flex-1"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                {project.liveUrl && (
                  <Button 
                    size="sm"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="flex-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-2xl mx-auto hover-lift">
            <h3 className="text-2xl font-bold text-primary mb-4">More Projects Coming Soon!</h3>
            <p className="text-muted-foreground mb-6">
              I'm constantly working on new projects to expand my skills and explore different technologies. 
              Check back regularly or follow my GitHub for updates.
            </p>
            <Button 
              variant="outline"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              Follow on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
