import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const Gallery = () => {
  const images = [
    { src: gallery1, alt: "Transformación de cejas - Antes y Después" },
    { src: gallery2, alt: "Extensiones de pestañas - Resultado profesional" },
    { src: gallery3, alt: "Tratamiento facial - Piel radiante" },
    { src: gallery4, alt: "Masaje facial relajante" },
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Portafolio: Nuestro Trabajo Habla por Sí Solo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resultados reales de nuestros tratamientos profesionales
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {images.map((image, idx) => (
            <div 
              key={idx}
              className="group relative aspect-square overflow-hidden rounded-lg border border-border hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-background text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
