import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      service: "Microblading de Cejas",
      comment: "Increíble trabajo. Mis cejas lucen naturales y perfectas. El servicio fue impecable y el resultado superó mis expectativas.",
      rating: 5,
    },
    {
      name: "Laura Martínez",
      service: "Extensiones de Pestañas",
      comment: "Profesionalismo de primer nivel. Las extensiones se ven hermosas y naturales. Definitivamente volveré.",
      rating: 5,
    },
    {
      name: "Ana Rodríguez",
      service: "Tratamiento Facial",
      comment: "El tratamiento facial fue maravilloso. Mi piel se siente renovada y radiante. Altamente recomendado.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Lo Que Dicen Nuestras Clientas
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            La satisfacción de nuestras clientas es nuestra mejor carta de presentación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.service}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
