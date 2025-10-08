import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "amankum43850@gmail.com",
      href: "mailto:amankum43850@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8051093538",
      href: "tel:+918051093538"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/aman-kumar-7b37b7340",
      href: "https://www.linkedin.com/in/aman-kumar-7b37b7340"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Amank002",
      href: "https://github.com/Amank002"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          <p className="text-muted-foreground mt-4 text-lg">Let's discuss your project</p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-8 bg-card border-border animate-fade-in-left">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-background border-border min-h-[150px]"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-right">
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group hover:transform hover:translate-x-2 transition-all"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{info.label}</p>
                        <p className="text-muted-foreground group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary/20 to-accent/10 border-primary/30">
              <h3 className="text-xl font-bold mb-4">Available for Opportunities</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm currently open to new opportunities, freelance projects, and collaborations. 
                Feel free to reach out if you'd like to work together!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
