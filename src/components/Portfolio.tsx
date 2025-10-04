import React from 'react';
import { ExternalLink, Smartphone } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  logo: string;
  link: string;
  category: 'website' | 'app' | 'both';
}

const projects: Project[] = [
  {
    name: 'Flamia',
    description: 'Gas delivery ecommerce platform',
    logo: '/images/flamia_logo.png',
    link: 'https://www.flamia.store',
    category: 'both',
  },
  {
    name: 'eSale Uganda',
    description: 'Electronics ecommerce marketplace',
    logo: '/images/esaleuganda_logo.png',
    link: 'https://www.esaleuganda.com',
    category: 'both',
  },
  {
    name: 'Gavi Gadgets UG',
    description: 'Electronics, phones and gadgets store',
    logo: '/images/gavigadgets_logo.png',
    link: 'https://www.gavigadgets.ug',
    category: 'both',
  },
  {
    name: 'Bocasif',
    description: 'Non-profit organization for boy child',
    logo: '/images/bocasif_logo.png',
    link: 'https://bosfug.org',
    category: 'website',
  },
  {
    name: 'Hostel Connect',
    description: 'Online hostel booking platform in Uganda',
    logo: '/images/hostelconnect _logo.png',
    link: 'https://www.hostelconnect.online',
    category: 'website',
  },
  {
    name: 'Haga Water Limited',
    description: 'Professional plumbing services',
    logo: '/images/hagawaterlimited_logo.png',
    link: 'https://hagawaterlimited.com',
    category: 'website',
  },
  {
    name: 'API Health Products',
    description: 'Premium bee products supplier',
    logo: '/images/apihealth_products_logo.png',
    link: 'https://apihealthproducts.com',
    category: 'website',
  },
  {
    name: 'GD Clothing',
    description: 'Fashion and apparel store',
    logo: '/images/gdclothing_logo.png',
    link: 'https://www.gdclothing.com',
    category: 'website',
  },
  {
    name: 'Mosa Adonai',
    description: 'Business services platform',
    logo: '/images/mosa_adonai _logo.png',
    link: '#',
    category: 'website',
  },
  {
    name: 'Noble Home Experts',
    description: 'Home improvement services',
    logo: '/images/noblehomeexperts_logo.png',
    link: '#',
    category: 'website',
  },
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Portfolio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by leading businesses across Uganda. See what we've built for our clients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-card border border-border rounded-lg p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 hover:border-primary/50"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 flex items-center justify-center bg-muted rounded-lg overflow-hidden group-hover:bg-primary/10 transition-colors">
                  <img
                    src={project.logo}
                    alt={`${project.name} logo`}
                    className="w-full h-full object-contain p-2"
                    onError={(e) => {
                      e.currentTarget.src = '/images/junooby_icon.png';
                    }}
                  />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="flex gap-2 text-xs">
                  {(project.category === 'website' || project.category === 'both') && (
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <ExternalLink className="w-3 h-3" />
                      <span>Web</span>
                    </div>
                  )}
                  {(project.category === 'app' || project.category === 'both') && (
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Smartphone className="w-3 h-3" />
                      <span>App</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
