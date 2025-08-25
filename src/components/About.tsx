import { Card, CardContent } from '@/components/ui/card';
import { Code, Camera, Award, Users } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'React & TypeScript', level: 95 },
    { name: 'UI/UX Design', level: 90 },
    { name: 'Portrait Fotografie', level: 88 },
    { name: 'Web Development', level: 92 },
  ];

  const achievements = [
    {
      icon: Code,
      title: '50+ Websites',
      description: 'Erfolgreiche Web-Projekte realisiert',
    },
    {
      icon: Camera,
      title: '200+ Shootings',
      description: 'Professionelle Fotoshootings durchgeführt',
    },
    {
      icon: Award,
      title: '3+ Jahre',
      description: 'Erfahrung in der Branche',
    },
    {
      icon: Users,
      title: '100% Zufriedenheit',
      description: 'Kundenzufriedenheit bei allen Projekten',
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Über mich
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Als leidenschaftlicher Web Designer und Fotograf vereinige ich technische Expertise 
              mit kreativem Gespür. Mein Ziel ist es, digitale Erlebnisse zu schaffen, die nicht 
              nur funktional sind, sondern auch visuell begeistern.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Mit über 3 Jahren Erfahrung in der Branche habe ich gelernt, dass jedes Projekt 
              einzigartig ist. Deshalb arbeite ich eng mit meinen Kunden zusammen, um maßgeschneiderte 
              Lösungen zu entwickeln, die ihre Vision zum Leben erwecken.
            </p>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Kernkompetenzen</h3>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-primary font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-border rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Achievements */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-hover transition-all duration-300 border-border">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-light rounded-2xl mb-4">
                    <achievement.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Philosophy Section */}
        <Card className="mt-16 bg-primary-light border-primary-light">
          <CardContent className="p-8 text-center">
            <blockquote className="text-2xl font-medium text-primary mb-4">
              "Großartige Websites und Fotos entstehen nicht durch Zufall - 
              sie sind das Ergebnis von Leidenschaft, Präzision und dem Verständnis für Details."
            </blockquote>
            <cite className="text-primary/80 font-medium">Meine Arbeitsphilosophie</cite>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;