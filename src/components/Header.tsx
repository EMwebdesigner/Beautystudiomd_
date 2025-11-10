import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import logoImage from "@/assets/logo-af-brow.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src={logoImage} alt="AF Brow Studio" className="h-12 w-auto rounded-full object-contain" />
            <span className="text-xl font-bold text-foreground">Beauty Studio MD</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection("gallery")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Galería
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
            <Button 
              variant="cta" 
              size="default"
              onClick={() => window.open("https://agendapro.com", "_blank")}
            >
              Agendar mi Cita Online
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection("gallery")}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Galería
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Contacto
              </button>
              <Button 
                variant="cta" 
                size="default"
                onClick={() => window.open("https://agendapro.com", "_blank")}
                className="w-full"
              >
                Agendar mi Cita Online
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
