import { Code2, Database, Layout, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Layout,
      skills: ["HTML", "CSS", "JavaScript", "React.js"],
      color: "text-blue-400"
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: ["Python", "MySQL", "PHP"],
      color: "text-green-400"
    },
    {
      title: "Programming",
      icon: Code2,
      skills: ["Java", "Python", "JavaScript"],
      color: "text-purple-400"
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      skills: ["Git", "VS Code", "Responsive Design", "UI/UX Design"],
      color: "text-orange-400"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          <p className="text-muted-foreground mt-4 text-lg">Technologies and tools I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`p-4 bg-primary/10 rounded-xl ${category.color}`}>
                    <Icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
