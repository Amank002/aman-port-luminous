import { GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-left">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Education</h3>
                <p className="text-muted-foreground">Bachelor of Engineering</p>
              </div>
            </div>
            <div className="space-y-2 text-foreground/80">
              <p className="font-semibold">Computer Software Engineering</p>
              <p>Visvesvaraya Technological University</p>
              <p>2022 - 2026</p>
              <p className="text-primary font-semibold">CGPA: 7.19</p>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-right">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Experience</h3>
                <p className="text-muted-foreground">Professional Journey</p>
              </div>
            </div>
            <div className="space-y-2 text-foreground/80">
              <p className="font-semibold">Web Developer Intern</p>
              <p className="text-primary">Cognifyz Technologies</p>
              <p>April 2025 - May 2025</p>
              <p className="text-sm mt-2">Assisted in developing responsive web applications, debugging, and integrating APIs</p>
            </div>
          </Card>
        </div>

        <div className="mt-12 max-w-4xl mx-auto animate-fade-in">
          <Card className="p-8 bg-gradient-to-br from-card to-secondary border-border">
            <p className="text-lg leading-relaxed text-foreground/90">
              I am a dedicated and results-driven professional with a passion for continuous learning and problem-solving. 
              With experience in Computer Software Engineering, I specialize in Web Development, Python, React.js, JavaScript, 
              and MySQL and thrive in dynamic, collaborative environments. I am motivated by challenges that allow me to innovate, 
              create, and deliver impactful solutions.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
