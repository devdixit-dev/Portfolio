import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "I Tag Financials - Company Website",
      description: "Designed and developed itagfin.com, a professional corporate website for iTagFin, showcasing the company’s financial services, solutions, and expertise. Built with a modern, responsive design, the website emphasizes brand identity, usability, and performance while ensuring a seamless experience across devices.",
      techStack: ["React", "TypeScript", "MongoDB", "Express", "Authentication", "JWT"],
      liveUrl: "https://itagfin.com/",
      codeUrl: "https://github.com/devdixit-dev/Itag-frontend"
    },
    {
      id: 2,
      name: "Career Root - Company Website (Rebuild)",
      description: "Built careerroot.in, a modern career guidance and educational platform designed to help students and professionals explore career opportunities, training programs, and skill development resources. The site features a clean, user-friendly interface with a focus on accessibility and performance.",
      techStack: ["React", "TypeScript", "Lucide-react-icon"],
      liveUrl: "https://careerroot.in/",
      codeUrl: "https://github.com/devdixit-dev/career-root-rebuild"
    },
    {
      id: 3,
      name: "Mind Canvas Blog App",
      description: "A simple yet fully functional Blog Application built with a REST API backend, featuring secure user authentication and comprehensive blog management capabilities. The app allows users to register, log in, and manage their own blogs with options to create, edit, and delete posts. It follows RESTful principles for structured API endpoints, ensuring scalability and ease of integration.",
      techStack: ["EJS", "Node.js", "MongoDB", "Express", "Authentication"],
      liveUrl: "https://mind-canvas-blog-app.onrender.com/",
      codeUrl: "https://github.com/devdixit-dev/Mind-Canvas"
    },
    {
      id: 4,
      name: "Money Nest Web App",
      description: "A mobile-first spending management application designed for simplicity and accessibility, built with an Android WebView interface for a seamless cross-platform experience. This app helps users track, manage, and analyze their daily expenses with an intuitive design that prioritizes usability on mobile devices.",
      techStack: ["EJS", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://money-nest-web-app.onrender.com/",
      codeUrl: "https://github.com/devdixit-dev/Money-Nest-Web-App"
    },
    {
      id: 5,
      name: "MERN Authentication Project",
      description: "A secure authentication microservice built with the MERN stack (MongoDB, Express.js, React.js, Node.js), designed to handle user authentication and session management efficiently. This microservice provides a modular, scalable, and reusable solution for integrating authentication into any web application.",
      techStack: ["React", "Tailwind", "MongoDB", "Express", "Node.js"],
      liveUrl: "https://github.com/devdixit-dev/MERN-Auth-w-React",
      codeUrl: "https://github.com/devdixit-dev/MERN-Auth-w-React"
    },
    {
      id: 6,
      name: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React.js and styled using Tailwind CSS, designed to showcase personal projects, skills, and experience. The website is fully responsive, optimized for performance, and features a clean, minimalistic design for a professional online presence.",
      techStack: ["React", "TypeScript", "Tailwind", "Lucide-react-icon"],
      liveUrl: "https://github.com/devdixit-dev/MERN-Auth-w-React",
      codeUrl: "https://github.com/devdixit-dev/MERN-Auth-w-React"
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            My Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of applications I've built using modern web technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="w-full flex flex-col justify-center items-center md:grid-cols-2 lg:grid-cols-1 gap-8 mb-16">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/20"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button size="sm" asChild className="flex-1">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a 
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Coming Soon */}
        <div className="text-center">
          <div className="bg-muted/50 border border-border rounded-lg p-8 max-w-md mx-auto">
            <Star className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-3">
              More Projects Coming Soon
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm constantly working on new projects and exploring innovative technologies.
            </p>
            
            <Button variant="outline" asChild className="group">
              <a 
                href="https://github.com/devdixit-dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitFork className="mr-2 h-4 w-4" />
                Follow on GitHub
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}