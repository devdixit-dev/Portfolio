import { 
  Code, 
  Database, 
  Globe, 
  Server, 
  Smartphone,
  Terminal,
  GitBranch,
  Package
} from "lucide-react";

export default function About() {
  const techSkills = [
    { name: "JavaScript", icon: Code },
    { name: "TypeScript", icon: Code },
    { name: "React", icon: Smartphone },
    { name: "Node.js", icon: Server },
    { name: "Express", icon: Server },
    { name: "MongoDB", icon: Database },
    { name: "Git", icon: GitBranch },
    { name: "Docker", icon: Package },
    { name: "Postman", icon: Globe },
    { name: "VS Code", icon: Terminal },
    { name: "Redis", icon: Database },
    { name: "Linux", icon: Terminal },
    { name: "Figma", icon: Smartphone },
    { name: "REST API", icon: Globe },
    { name: "JWT", icon: Server },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        {/* Journey and Skills Side by Side */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* My Journey */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">My Journey</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                My journey as a developer began with curiosity about how websites work. 
                What started as a hobby quickly evolved into a passion for creating 
                meaningful digital experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over the years, I've honed my skills across the full stack, from 
                crafting intuitive user interfaces to architecting robust backend systems. 
                I believe in writing clean, maintainable code and staying current with 
                industry best practices.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, I focus on building scalable web applications that solve real 
                problems and deliver exceptional user experiences. Every project is an 
                opportunity to learn something new and push the boundaries of what's possible.
              </p>
            </div>
          </div>

          {/* Skills & Experience */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Skills & Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Frontend Development</h3>
                <p className="text-muted-foreground">
                  Creating responsive, accessible user interfaces with React, TypeScript, 
                  and modern CSS frameworks.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Backend Development</h3>
                <p className="text-muted-foreground">
                  Building robust APIs and server-side applications using Node.js, 
                  Express, and various database technologies.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">DevOps & Tools</h3>
                <p className="text-muted-foreground">
                  Experienced with Git workflows, Docker containerization, 
                  and modern development tooling.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Technologies I Work With
            </h2>
            <p className="text-muted-foreground">
              A comprehensive toolkit for modern web development
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {techSkills.map((skill) => (
              <div 
                key={skill.name}
                className="flex flex-col items-center p-6 bg-card border border-border rounded-lg hover:shadow-md transition-all duration-200 hover:border-primary/20"
              >
                <skill.icon className="h-8 w-8 text-primary mb-3" />
                <span className="text-sm font-medium text-foreground text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}