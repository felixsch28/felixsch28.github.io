import { Card, CardContent } from '@/components/ui/card';
import { Code2, Palette, Camera, Smartphone, Monitor, Aperture } from 'lucide-react';

const Services = () => {
  const webServices = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Moderne, responsive Websites mit React, TypeScript und den neuesten Technologien.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Benutzerfreundliche Interfaces und ansprechende Designs für optimale User Experience.',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First',
      description: 'Websites die auf allen Geräten perfekt funktionieren und aussehen.',
    },
  ];

  const photoServices = [
    {
      icon: Camera,
      title: 'Portrait Fotografie',
      description: 'Professionelle Porträts für Business, Dating oder persönliche Zwecke.',
    },
    {
      icon: Monitor,
      title: 'Event Fotografie',
      description: 'Hochzeiten, Firmenfeiern und besondere Momente perfekt eingefangen.',
    },
    {
      icon: Aperture,
      title: 'Produkt Fotografie',
      description: 'Hochwertige Produktfotos für E-Commerce und Marketing-Zwecke.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meine Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Von der ersten Idee bis zum finalen Produkt - ich biete umfassende Lösungen 
            für Web Design, Development und professionelle Fotografie.
          </p>
        </div>

        {/* Web Design & Development */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Web Design & Development</h3>
            <p className="text-muted-foreground">Digitale Lösungen die begeistern</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {webServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 border-border">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-200">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Photography */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Fotografie</h3>
            <p className="text-muted-foreground">Momente die bleiben</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {photoServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-hover transition-all duration-300 border-border">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-200">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;