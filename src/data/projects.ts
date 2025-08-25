import webProject from '@/assets/web-project.jpg';
import photoProject from '@/assets/photo-project.jpg';

export interface Project {
  id: string;
  title: string;
  category: 'web' | 'photo';
  image: string;
  description: string;
  tags: string[];
  link?: string;
  // Extended details for project page
  fullDescription: string;
  challenge: string;
  solution: string;
  technologies?: string[];
  duration: string;
  client: string;
  year: string;
  images: string[];
  features?: string[];
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    category: 'web',
    image: webProject,
    description: 'Moderne E-Commerce-Lösung mit React und Stripe-Integration',
    tags: ['React', 'TypeScript', 'Stripe'],
    link: '#',
    fullDescription: 'Eine vollständig responsive E-Commerce-Plattform, die für einen mittelständischen Einzelhändler entwickelt wurde. Die Plattform bietet eine intuitive Benutzeroberfläche, sichere Zahlungsabwicklung und ein umfassendes Admin-Dashboard.',
    challenge: 'Der Kunde benötigte eine schnelle, sichere und benutzerfreundliche Online-Shopping-Lösung, die mit dem bestehenden Warenwirtschaftssystem integriert werden konnte.',
    solution: 'Entwicklung einer modernen React-Anwendung mit TypeScript für Typsicherheit, Integration von Stripe für sichere Zahlungen und einem maßgeschneiderten Admin-Bereich für die Produktverwaltung.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'Node.js', 'MongoDB'],
    duration: '3 Monate',
    client: 'Fashion Boutique Berlin',
    year: '2024',
    images: [webProject, webProject, webProject],
    features: [
      'Responsive Design für alle Geräte',
      'Sichere Stripe-Zahlungsintegration',
      'Produktfilterung und -suche',
      'Benutzerkonten und Bestellhistorie',
      'Admin-Dashboard für Produktverwaltung',
      'SEO-optimierte Produktseiten'
    ],
    testimonial: {
      text: 'Die neue E-Commerce-Plattform hat unsere Online-Verkäufe um 150% gesteigert. Die Benutzerfreundlichkeit ist außergewöhnlich.',
      author: 'Maria Schmidt',
      position: 'Geschäftsführerin, Fashion Boutique Berlin'
    }
  },
  {
    id: 'wedding-photography',
    title: 'Hochzeitsfotografie',
    category: 'photo',
    image: photoProject,
    description: 'Emotionale Hochzeitsreportage in natürlichem Stil',
    tags: ['Portrait', 'Event', 'Natur'],
    link: '#',
    fullDescription: 'Eine ganztägige Hochzeitsreportage im natürlichen, dokumentarischen Stil. Von den Vorbereitungen bis zur Party wurden alle emotionalen Momente eingefangen.',
    challenge: 'Das Brautpaar wünschte sich authentische, emotionale Bilder ohne gestellte Posen, die die einzigartige Atmosphäre ihres besonderen Tages widerspiegeln.',
    solution: 'Unauffällige Dokumentation mit Fokus auf Emotionen und spontane Momente, kombiniert mit stilvollen Paarporträts in der goldenen Stunde.',
    duration: '1 Tag + Nachbearbeitung',
    client: 'Anna & Michael Müller',
    year: '2024',
    images: [photoProject, photoProject, photoProject, photoProject],
    features: [
      'Ganztägige Begleitung (12 Stunden)',
      'Über 500 bearbeitete Bilder',
      'Online-Galerie für Familie und Freunde',
      'Hochauflösende Druckdateien',
      'Emotionale Schwarz-Weiß-Serie',
      'Persönliches Fotobuch als Geschenk'
    ],
    testimonial: {
      text: 'Die Fotos sind einfach perfekt! Sie haben jeden emotionalen Moment unserer Hochzeit eingefangen. Wir sind unglaublich dankbar.',
      author: 'Anna Müller',
      position: 'Braut'
    }
  },
  {
    id: 'corporate-website',
    title: 'Corporate Website',
    category: 'web',
    image: webProject,
    description: 'Professionelle Unternehmenswebsite mit CMS',
    tags: ['Next.js', 'Sanity', 'SEO'],
    link: '#',
    fullDescription: 'Eine vollständig maßgeschneiderte Unternehmenswebsite für eine Beratungsfirma mit integriertem Content Management System und erweiterten SEO-Funktionen.',
    challenge: 'Das Unternehmen benötigte eine professionelle Web-Präsenz, die ihre Expertise vermittelt und gleichzeitig einfach zu verwalten ist.',
    solution: 'Entwicklung einer modernen Next.js-Website mit Sanity CMS für einfache Inhalts-verwaltung und umfassender SEO-Optimierung.',
    technologies: ['Next.js', 'Sanity CMS', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    duration: '2 Monate',
    client: 'Consulting Partners GmbH',
    year: '2024',
    images: [webProject, webProject, webProject],
    features: [
      'Server-side Rendering für beste SEO',
      'Headless CMS für einfache Verwaltung',
      'Mehrsprachigkeit (DE/EN)',
      'Blog-System für Thought Leadership',
      'Kontaktformular mit CRM-Integration',
      'Performance-Score von 98/100'
    ],
    testimonial: {
      text: 'Unsere neue Website spiegelt perfekt wider, wofür wir stehen. Die Anfragen haben sich seit dem Launch verdreifacht.',
      author: 'Dr. Thomas Weber',
      position: 'Geschäftsführer, Consulting Partners GmbH'
    }
  },
  {
    id: 'business-portraits',
    title: 'Business Portraits',
    category: 'photo',
    image: photoProject,
    description: 'Professionelle Businessporträts für LinkedIn',
    tags: ['Business', 'Portrait', 'Studio'],
    link: '#',
    fullDescription: 'Eine Serie professioneller Businessporträts für ein Führungsteam, optimiert für LinkedIn und andere Geschäftszwecke.',
    challenge: 'Das Unternehmen benötigte einheitliche, professionelle Porträts für ihr gesamtes Führungsteam, die Kompetenz und Vertrauen ausstrahlen.',
    solution: 'Studio-Shooting mit einheitlicher Beleuchtung und Nachbearbeitung für konsistente Ergebnisse aller Teammitglieder.',
    duration: '1 Tag Studio + Nachbearbeitung',
    client: 'TechStart GmbH',
    year: '2024',
    images: [photoProject, photoProject, photoProject],
    features: [
      'Studio-Shooting mit professioneller Beleuchtung',
      'Einheitlicher Look für das gesamte Team',
      'Verschiedene Formate (LinkedIn, Website, Print)',
      'Express-Nachbearbeitung binnen 48h',
      'Persönliche Styling-Beratung',
      'Unbegrenzte kleine Retuschen'
    ],
    testimonial: {
      text: 'Die neuen Businessporträts haben unser professionelles Auftreten deutlich verbessert. Sehr empfehlenswert!',
      author: 'Sarah Johnson',
      position: 'CEO, TechStart GmbH'
    }
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard',
    category: 'web',
    image: webProject,
    description: 'Intuitive Dashboard-Lösung mit Datenvisualisierung',
    tags: ['React', 'D3.js', 'API'],
    link: '#',
    fullDescription: 'Ein komplexes Dashboard für eine SaaS-Anwendung mit interaktiven Datenvisualisierungen und Echtzeit-Updates.',
    challenge: 'Komplexe Daten sollten intuitiv und visuell ansprechend dargestellt werden, während die Performance bei großen Datenmengen gewährleistet bleibt.',
    solution: 'Entwicklung eines React-Dashboards mit D3.js für Datenvisualisierung und optimierter API-Integration für Echtzeit-Updates.',
    technologies: ['React', 'TypeScript', 'D3.js', 'Chart.js', 'WebSocket', 'REST API'],
    duration: '4 Monate',
    client: 'DataInsights AG',
    year: '2023',
    images: [webProject, webProject, webProject],
    features: [
      'Interaktive Datenvisualisierungen',
      'Echtzeit-Updates via WebSocket',
      'Anpassbare Dashboard-Layouts',
      'Export-Funktionen (PDF, Excel)',
      'Benutzerrollen und Berechtigungen',
      'Mobile-responsive Design'
    ],
    testimonial: {
      text: 'Das Dashboard hat unsere Art zu arbeiten revolutioniert. Die Datenvisualisierung ist intuitiv und hilft bei wichtigen Entscheidungen.',
      author: 'Marcus Klein',
      position: 'CTO, DataInsights AG'
    }
  },
  {
    id: 'product-photography',
    title: 'Produktfotografie',
    category: 'photo',
    image: photoProject,
    description: 'Hochwertige Produktfotos für Online-Shop',
    tags: ['Produkt', 'Studio', 'E-Commerce'],
    link: '#',
    fullDescription: 'Umfassende Produktfotografie für einen Online-Shop mit über 200 Produkten, optimiert für E-Commerce und Marketing.',
    challenge: 'Ein Online-Shop benötigte hochwertige, konsistente Produktfotos für über 200 Artikel mit schneller Bearbeitungszeit.',
    solution: 'Effizientes Studio-Setup mit standardisiertem Workflow für konsistente Ergebnisse und automatisierte Nachbearbeitung.',
    duration: '2 Wochen Shooting + Bearbeitung',
    client: 'HomeDecor Online',
    year: '2024',
    images: [photoProject, photoProject, photoProject, photoProject],
    features: [
      'Über 200 Produkte fotografiert',
      'Einheitlicher Look und Feel',
      'Freigestellte Bilder für E-Commerce',
      'Lifestyle-Aufnahmen für Marketing',
      'Schnelle Lieferzeit durch Workflow-Optimierung',
      '360°-Produktansichten für Highlights'
    ],
    testimonial: {
      text: 'Die neuen Produktfotos haben unsere Conversion-Rate um 40% gesteigert. Absolut professionelle Arbeit!',
      author: 'Jennifer Adams',
      position: 'Marketing Manager, HomeDecor Online'
    }
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: 'web' | 'photo' | 'all'): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};