import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink, Calendar, Clock, User, Quote } from 'lucide-react';
import { getProjectById, type Project } from '@/data/projects';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (id) {
      const foundProject = getProjectById(id);
      if (foundProject) {
        setProject(foundProject);
      } else {
        // Redirect to 404 or back to portfolio if project not found
        navigate('/');
      }
    }
  }, [id, navigate]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Projekt wird geladen...</h1>
        </div>
      </div>
    );
  }

  const goBack = () => {
    navigate('/', { replace: true });
    // Scroll to portfolio section after navigation
    setTimeout(() => {
      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 bg-hero-gradient">
          <div className="container mx-auto px-6">
            <Button
              onClick={goBack}
              variant="outline"
              className="mb-8 hover:bg-accent"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zum Portfolio
            </Button>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className="bg-primary-light text-primary">
                    {project.category === 'web' ? 'Web Design' : 'Fotografie'}
                  </Badge>
                  <span className="text-muted-foreground">{project.year}</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  {project.title}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {project.fullDescription}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Kunde</div>
                      <div className="font-medium text-foreground">{project.client}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Dauer</div>
                      <div className="font-medium text-foreground">{project.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm text-muted-foreground">Jahr</div>
                      <div className="font-medium text-foreground">{project.year}</div>
                    </div>
                  </div>
                </div>

                {project.link && (
                  <Button className="bg-primary hover:bg-primary-hover shadow-soft hover:shadow-hover">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Projekt ansehen
                  </Button>
                )}
              </div>

              <div className="relative">
                <img
                  src={project.images[selectedImage]}
                  alt={project.title}
                  className="w-full h-auto rounded-2xl shadow-hover"
                />
                
                {/* Image Thumbnails */}
                {project.images.length > 1 && (
                  <div className="flex gap-2 mt-4 overflow-x-auto">
                    {project.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          selectedImage === index
                            ? 'border-primary shadow-soft'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${project.title} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-border">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-semibold text-foreground mb-4">
                        Herausforderung
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.challenge}
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-border">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-semibold text-foreground mb-4">
                        Lösung
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.solution}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Features */}
                {project.features && (
                  <Card className="border-border">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-semibold text-foreground mb-6">
                        Features & Highlights
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {project.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Testimonial */}
                {project.testimonial && (
                  <Card className="bg-primary-light border-primary-light">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <blockquote className="text-lg text-primary mb-4 leading-relaxed">
                            "{project.testimonial.text}"
                          </blockquote>
                          <cite className="text-primary/80 font-medium">
                            {project.testimonial.author}
                            <br />
                            <span className="text-sm text-primary/60">
                              {project.testimonial.position}
                            </span>
                          </cite>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Technologies */}
                {project.technologies && (
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-foreground mb-4">
                        Technologien
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <Badge key={index} variant="secondary" className="bg-accent text-accent-foreground">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Tags */}
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-4">
                      Tags
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="border-border">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Contact CTA */}
                <Card className="bg-hero-gradient border-border">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold text-foreground mb-2">
                      Ähnliches Projekt geplant?
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Lassen Sie uns über Ihr nächstes Projekt sprechen.
                    </p>
                    <Button
                      onClick={() => {
                        navigate('/');
                        setTimeout(() => {
                          const contactSection = document.getElementById('contact');
                          if (contactSection) {
                            contactSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 100);
                      }}
                      className="w-full bg-primary hover:bg-primary-hover"
                    >
                      Kontakt aufnehmen
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;