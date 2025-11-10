import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Mensaje enviado! Te contactaremos pronto.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para responder todas tus preguntas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Ubicación</h3>
                  <p className="text-muted-foreground">
                    Av. Principal 123, Centro<br />
                    Ciudad, Estado 12345
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Horario de Atención</h3>
                  <p className="text-muted-foreground">
                    Lunes a Viernes: 9:00 AM - 7:00 PM<br />
                    Sábados: 10:00 AM - 6:00 PM<br />
                    Domingos: Cerrado
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Teléfono</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">info@lovable-spa.com</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-card p-4 rounded-lg border border-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093715!2d144.9537353153167!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1635925294491!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nombre Completo
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  rows={5}
                />
              </div>

              <Button type="submit" variant="cta" className="w-full">
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
