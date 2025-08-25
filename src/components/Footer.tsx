import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: "GitHub", 
      href: "https://github.com/devdixit-dev", 
      icon: Github,
      label: "Visit GitHub Profile"
    },
    // { 
    //   name: "LinkedIn", 
    //   href: "https://linkedin.com", 
    //   icon: Linkedin,
    //   label: "Connect on LinkedIn"
    // },
    { 
      name: "Twitter", 
      href: "https://x.com/dev16_developer", 
      icon: Twitter,
      label: "Follow on Twitter"
    },
    { 
      name: "Email", 
      href: "mailto:devdixitsocial@gmail.com", 
      icon: Mail,
      label: "Send an Email"
    },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Full Stack Developer
            </h3>
            <p className="text-sm text-muted-foreground">
              Building the web, one project at a time.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-center">
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="hover:text-primary"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </p>
            <p className="text-[13px] text-muted-foreground">
              Made by Dev Dixit
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}