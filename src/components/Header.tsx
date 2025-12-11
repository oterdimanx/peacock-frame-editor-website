import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px -66%",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">&#129434;</span>
            </div>
            <span className="text-xl font-bold text-foreground">Peacock Software</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className={`transition-colors ${
                activeSection === "features" 
                  ? "text-primary font-semibold" 
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              Features
            </a>
            <a 
              href="#benefits" 
              className={`transition-colors ${
                activeSection === "benefits" 
                  ? "text-primary font-semibold" 
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              Benefits
            </a>
            <a 
              href="#faq" 
              className={`transition-colors ${
                activeSection === "faq" 
                  ? "text-primary font-semibold" 
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              Faq
            </a>
            <a 
              href="#contact" 
              className={`transition-colors ${
                activeSection === "contact" 
                  ? "text-primary font-semibold" 
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-border">
            <a
              href="#features"
              className={`block transition-colors ${
                activeSection === "features" 
                  ? "text-primary font-semibold" 
                  : "text-foreground/80 hover:text-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#benefits"
              className={`block transition-colors ${
                activeSection === "benefits" 
                  ? "text-primary font-semibold" 
                  : "text-foreground/80 hover:text-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a
              href="#pricing"
              className={`block transition-colors ${
                activeSection === "pricing" 
                  ? "text-primary font-semibold" 
                  : "text-foreground/80 hover:text-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#contact"
              className={`block transition-colors ${
                activeSection === "contact" 
                  ? "text-primary font-semibold" 
                  : "text-foreground/80 hover:text-foreground"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="w-full">Get Started</Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
