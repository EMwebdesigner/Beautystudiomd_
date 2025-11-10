import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              <span className="text-primary">Beauty Studio</span> MD
            </h3>
            <p className="text-muted-foreground">
              Tu destino de belleza y bienestar. Transformando confianza, un tratamiento a la vez.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Síguenos</h4>
            <div className="flex gap-4 mb-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <p className="text-muted-foreground">
              <span className="font-medium">Teléfono:</span> +1 (555) 123-4567
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Beauty Studio MD. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <a href="#" className="hover:text-primary transition-colors">
              Términos y Condiciones
            </a>
            {" | "}
            <a href="#" className="hover:text-primary transition-colors">
              Política de Privacidad
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
