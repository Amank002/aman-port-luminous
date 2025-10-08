import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <div className="space-y-6 animate-fade-in-left">
          <div className="inline-block">
            <span className="text-primary font-medium text-lg">Hello, I'm</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold">
            Aman Kumar
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Web Developer | UI/UX Designer | Problem Solver
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
            I am a dedicated and results-driven professional with a passion for continuous learning and problem-solving. 
            With experience in Computer Software Engineering, I specialize in creating innovative web solutions.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>

        {/* Right content - Profile photo */}
        <div className="flex justify-center lg:justify-end animate-fade-in-right">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30 animate-glow-pulse"></div>
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
              <img 
                src={profilePhoto} 
                alt="Aman Kumar" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
