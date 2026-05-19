import React from 'react';

const partners = [
  { name: 'St. Noa Mawaggali S.S.S', logo: '/images/partner_stnoa.png' },
  { name: 'Kyambogo University', logo: '/images/partner_kyu.png' },
  { name: 'National ICT Innovation Hub', logo: '/images/partner_nih.png' },
  { name: 'KYUCS — Kyambogo University Computing Society', logo: '/images/partner_kyucs.png' },
  { name: 'Kyambogo University Engineering Society', logo: '/images/partner_kyues.png' },
];

const Partners: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Partners
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proud to collaborate with leading institutions and innovation communities.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {partners.map((p, i) => (
            <div
              key={i}
              className="group bg-card border border-border rounded-lg p-6 flex flex-col items-center justify-center hover:border-primary/50 hover:shadow-xl transition-all duration-300"
              title={p.name}
            >
              <div className="w-24 h-24 flex items-center justify-center bg-muted rounded-lg overflow-hidden group-hover:bg-primary/10 transition-colors">
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  className="w-full h-full object-contain p-2"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 text-xs text-center text-muted-foreground line-clamp-2">
                {p.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
