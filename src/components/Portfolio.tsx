import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Code, Camera } from 'lucide-react';
import { projects, getProjectsByCategory } from '@/data/projects';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'photo'>('all');
  const navigate = useNavigate();

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  const filters: Array<{ id: 'all' | 'web' | 'photo'; label: string; icon: any }> = [
    { id: 'all', label: 'Alle Projekte', icon: null },
    { id: 'web', label: 'Web Design', icon: Code },
    { id: 'photo', label: 'Fotografie', icon: Camera },
  ];

  const filteredProjects = getProjectsByCategory(activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-accent/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Eine Auswahl meiner besten Arbeiten aus den Bereichen Web Design, 
            Development und Fotografie.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter.id)}
                className={`${
                  activeFilter === filter.id
                    ? 'bg-primary hover:bg-primary-hover text-primary-foreground'
                    : 'hover:bg-accent'
                }`}
              >
                {filter.icon && <filter.icon className="w-4 h-4 mr-2" />}
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-hover transition-all duration-300 border-border overflow-hidden animate-fade-in"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="shadow-soft"
                    onClick={() => handleProjectClick(project.id)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Details ansehen
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 cursor-pointer hover:text-primary transition-colors"
                    onClick={() => handleProjectClick(project.id)}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary-light text-primary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleProjectClick(project.id)}
                  className="hover:bg-accent"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Details ansehen
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;