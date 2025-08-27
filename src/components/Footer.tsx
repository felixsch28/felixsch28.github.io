import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (sectionId: string) => {
    // If we're on the home page, just scroll to section
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home and then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <button 
            onClick={() => navigate('/')}
            className="text-2xl font-bold text-primary mb-4 hover:text-primary-hover transition-colors duration-200"
          >
            Portfolio
          </button>
          
          {/* Description */}
          <p className="text-background/80 mb-8 max-w-md">
            Kreative Lösungen für Web Design, Development und Fotografie. 
            Lassen Sie uns gemeinsam etwas Großartiges schaffen.
          </p>

          {/* Quick Links */}
          <nav className="flex flex-wrap gap-8 mb-8">
            {[
              { label: 'Über mich', id: 'about' },
              { label: 'Services', id: 'services' },
              { label: 'Portfolio', id: 'portfolio' },
              { label: 'Kontakt', id: 'contact' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigation(link.id)}
                className="text-background/80 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Back to Top Button */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-background/20 text-background hover:bg-background hover:text-foreground mb-8"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Nach oben
          </Button>

          {/* Copyright */}
          <div className="border-t border-background/20 pt-8 w-full">
            <p className="text-background/60 text-sm">
              © {currentYear} Portfolio. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;