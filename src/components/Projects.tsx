import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Airline Reservation & Database Management System",
      description: "A comprehensive web-based system enabling users to efficiently book and manage airline tickets with secure authentication and real-time database operations.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      features: [
        "User authentication & authorization",
        "Real-time ticket booking",
        "Database management",
        "Responsive design"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          <p className="text-muted-foreground mt-4 text-lg">Showcasing my recent work</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-foreground/80">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge 
                        key={i}
                        className="bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button className="bg-primary hover:bg-primary/90">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
