import { Heart, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} Aman Kumar. Made with</span>
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span>and passion</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/amankumar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/amankumar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors group"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:aman.kumar@example.com"
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors group"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
