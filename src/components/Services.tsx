import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const servicesData = [
  {
    category: "Cejas",
    items: [
      { name: "Diseño y Perfilado de Cejas", duration: "30 min", price: "$25.00" },
      { name: "Microblading", duration: "2 hrs", price: "$250.00" },
      { name: "Laminado de Cejas", duration: "45 min", price: "$45.00" },
    ]
  },
  {
    category: "Pestañas",
    items: [
      { name: "Extensiones de Pestañas Clásicas", duration: "1.5 hrs", price: "$80.00" },
      { name: "Extensiones de Pestañas Volumen", duration: "2 hrs", price: "$120.00" },
      { name: "Lifting de Pestañas", duration: "1 hr", price: "$60.00" },
      { name: "Tinte de Pestañas", duration: "20 min", price: "$20.00" },
    ]
  },
  {
    category: "Faciales",
    items: [
      { name: "Limpieza Facial Profunda", duration: "1 hr", price: "$70.00" },
      { name: "Tratamiento Anti-Edad", duration: "1.5 hrs", price: "$120.00" },
      { name: "Hidratación Intensiva", duration: "1 hr", price: "$85.00" },
      { name: "Peeling Químico", duration: "1 hr", price: "$95.00" },
    ]
  },
  {
    category: "Depilación",
    items: [
      { name: "Depilación Facial", duration: "15 min", price: "$15.00" },
      { name: "Depilación de Cejas", duration: "10 min", price: "$12.00" },
      { name: "Depilación Corporal (área pequeña)", duration: "20 min", price: "$25.00" },
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestra Carta de Bienestar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Servicios profesionales diseñados para resaltar tu belleza natural
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {servicesData.map((category, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-xl font-semibold text-foreground hover:text-primary">
                  {category.category}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-4">
                    {category.items.map((service, serviceIdx) => (
                      <div 
                        key={serviceIdx}
                        className="flex justify-between items-center py-3 border-b border-border last:border-0"
                      >
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{service.name}</p>
                          <p className="text-sm text-muted-foreground">{service.duration}</p>
                        </div>
                        <div className="text-lg font-semibold text-primary">
                          {service.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Services;
