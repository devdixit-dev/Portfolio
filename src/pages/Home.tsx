import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Full Stack Web Developer
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            I build scalable web applications with modern technologies.
            Specialized in React, Node.js, and MongoDB with a passion for creating
            exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="group">
              <Link to="/contact">
                Get In Touch
                <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="group">
              <a
                href="https://github.com/devdixit-dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub Profile
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <About />
      <Projects />

      {/* Why Work With Me Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Why Work With Me?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Full Stack Expertise</h3>
              <p className="text-muted-foreground">
                End-to-end development from database design to user interface,
                ensuring seamless integration across all layers.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Modern Technologies</h3>
              <p className="text-muted-foreground">
                Stay current with industry best practices using React, Node.js,
                TypeScript, and cloud technologies.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Results Focused</h3>
              <p className="text-muted-foreground">
                Deliver maintainable, scalable solutions that drive business growth
                and provide excellent user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}