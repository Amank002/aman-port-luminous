import { Award, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Certificates = () => {
  const certificates = [
    {
      title: "AI Tools Workshop",
      issuer: "Be10x",
      date: "April 2025",
      description: "Comprehensive training on modern AI tools and their practical applications in development.",
    },
    {
      title: "Python Programming",
      issuer: "Udemy",
      date: "2024",
      description: "Completed comprehensive Python programming course covering fundamentals, data structures, and advanced concepts.",
    },
    {
      title: "Microsoft Azure AI Essentials: Workload and Machine Learning on Azure",
      issuer: "LinkedIn",
      date: "2024",
      description: "Professional certification in Azure AI services, machine learning workloads, and cloud-based AI solutions.",
    }
  ];

  return (
    <section id="certificates" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Certificates & Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          <p className="text-muted-foreground mt-4 text-lg">Professional development and learning</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                    <p className="text-primary font-semibold">{cert.issuer}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{cert.date}</span>
                </div>
              </div>
            </Card>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Certificates;
