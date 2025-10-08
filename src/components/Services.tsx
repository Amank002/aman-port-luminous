import { Palette, Code, Smartphone, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Front-End Web Development",
      description: "Building responsive and interactive user interfaces using modern frameworks like React.js, HTML5, CSS3, and JavaScript.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive, and user-friendly interfaces with a focus on user experience and modern design principles.",
    },
    {
      icon: Smartphone,
      title: "Responsive Web Design",
      description: "Developing websites that work seamlessly across all devices - from mobile phones to desktop computers.",
    },
    {
      icon: Globe,
      title: "Web App Development",
      description: "Building full-stack web applications with optimized performance, accessibility, and scalability in mind.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          <p className="text-muted-foreground mt-4 text-lg">What I can do for you</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-2 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-accent/10 rounded-xl w-fit group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
