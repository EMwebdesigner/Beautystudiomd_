import { Button } from "@/components/ui/button";
import { Sparkles, Eye, Heart } from "lucide-react";
import heroImage from "@/assets/hero-af-brow.jpg";
import heroImageSecondary from "@/assets/hero-spa.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          AF Brow Studio: Donde la Belleza<br />
          <span className="text-primary">se Convierte en Confianza</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Descubre tu mejor versión con nuestros tratamientos profesionales de belleza
        </p>
        
        <Button 
          variant="cta" 
          size="xl"
          onClick={() => window.open("https://agendapro.com", "_blank")}
          className="mb-16"
        >
          Agendar mi Cita Online
        </Button>

        {/* Featured Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-20">
          <div className="bg-card/90 backdrop-blur-sm p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
            <div className="mb-4 flex justify-center">
              <Sparkles className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Cejas Perfectas</h3>
            <p className="text-muted-foreground">Diseño y perfilado profesional</p>
          </div>
          
          <div className="bg-card/90 backdrop-blur-sm p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
            <div className="mb-4 flex justify-center">
              <Eye className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Pestañas de Impacto</h3>
            <p className="text-muted-foreground">Extensiones y lifting de pestañas</p>
          </div>
          
          <div className="bg-card/90 backdrop-blur-sm p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
            <div className="mb-4 flex justify-center">
              <Heart className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Cuidado Facial Exclusivo</h3>
            <p className="text-muted-foreground">Tratamientos personalizados</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
