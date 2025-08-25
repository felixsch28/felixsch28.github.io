import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Camera } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-hero-gradient flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-medium mb-6">
              <Code className="w-4 h-4" />
              <span>Web Designer & Fotograf</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Kreative Lösungen für 
              <span className="text-primary block">digitale Welten</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ich verwandle Ihre Visionen in beeindruckende Websites und fange die schönsten Momente mit meiner Kamera ein. Von modernem Webdesign bis zur professionellen Fotografie.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('portfolio')}
                className="bg-primary hover:bg-primary-hover shadow-soft hover:shadow-hover transition-all duration-200 group"
              >
                Portfolio ansehen
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-border hover:bg-accent"
              >
                <Camera className="mr-2 w-5 h-5" />
                Projekt besprechen
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projekte</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Jahre Erfahrung</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Zufriedenheit</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Creative workspace with laptop and camera"
                className="w-full h-auto rounded-2xl shadow-hover animate-float"
              />
            </div>
            
            {/* Background decorations */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-accent/50 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;