
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Mind Canvas Blog App",
      description: "A simple Blog App with REST API, user authentication, blog management",
      technologies: ["EJS", "Node.js", "Express.js", "MongoDB"],
      githubUrl: "https://github.com/devdixit-dev/Mind-Canvas",
      liveUrl: "https://mind-canvas-blog-app.onrender.com/"
    },
    {
      title: "SIP Calculator",
      description: "A calculator with Monthly and Lumpsum",
      technologies: ["Frontend Project", "React JS"],
      githubUrl: "https://github.com/devdixit-dev/SIP-Calculator",
      liveUrl: "https://monthly-sip-calculator.vercel.app/"
    },
    {
      title: "Money Nest Andro-web App",
      description: "Application that manage your spendings with android-web view. Easy to use and mobile first design",
      technologies: ["EJS", "Node.js", "Express.js", "MongoDB"],
      githubUrl: "https://github.com/devdixit-dev/Money-Nest-Web-App",
      liveUrl: "https://money-nest-web-app.onrender.com/"
    },
    {
      title: "MERN Authentication Project",
      description: "Secure authentication microservice with session management.",
      technologies: ["Node.js", "Express.js", "React.js", "MongoDB"],
      githubUrl: "https://github.com/devdixit-dev/MERN-Auth-w-React",
      liveUrl: null
    },
    {
      title: "Portfolio",
      description: "React based portfolio website",
      technologies: ["React.js", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/devdixit-dev/Portfolio",
      liveUrl: "https://devdixit-portfolio.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <div className=''>
            <h2 className="h-20 text-4xl md:text-5xl font-bold gradient-text">Projects</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of the projects I've worked on to demonstrate 
            my skills in server-side development, API design and Frontend skills also.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="glass-card p-6 hover-lift rounded-sm"
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
          <div className="glass-card p-8 max-w-2xl mx-auto hover-lift rounded-sm">
            <h3 className="text-2xl font-bold text-primary mb-4">More Projects Coming Soon!</h3>
            <p className="text-muted-foreground mb-6">
              I'm constantly working on new projects to expand my skills and explore different technologies. 
              Check back regularly or follow my GitHub for updates.
            </p>
            <Button 
              variant="outline"
              onClick={() => window.open('https://github.com/devdixit-dev', '_blank')}
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
