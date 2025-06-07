
import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Mail } from 'lucide-react';

const HomeSection: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="container mx-auto text-center">
        <div className="fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Backend</span>
            <br />
            <span className="text-foreground">Developer</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Passionate about building robust, scalable server-side applications and APIs. 
            Ready to contribute to innovative projects with clean, efficient code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => window.open('mailto:devdixitsocial@gmail.com', '_blank')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-3"
              onClick={() => window.open('https://github.com/devdixit-dev', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              View GitHub
            </Button>
          </div>
        </div>
        
        <div className="mt-16 glass-card p-8 max-w-4xl mx-auto hover-lift">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">Node.js</h3>
              <p className="text-muted-foreground">Server-side JavaScript</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">Database</h3>
              <p className="text-muted-foreground">MongoDB</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">APIs</h3>
              <p className="text-muted-foreground">RESTful</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
