import React from 'react';

const partners = [
  { name: 'St. Noa Mawaggali S.S.S', logo: '/images/partner_stnoa.png' },
  { name: 'Kyambogo University', logo: '/images/partner_kyu.png' },
  { name: 'National ICT Innovation Hub', logo: '/images/partner_nih.png' },
  { name: 'KYUCS', logo: '/images/partner_kyucs.png' },
  { name: 'Kyambogo University Engineering Society', logo: '/images/partner_kyues.png' },
];

const Partners: React.FC = () => {
  const loop = [...partners, ...partners, ...partners];

  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Partners
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proud to collaborate with leading institutions and innovation communities.
          </p>
        </div>
      </div>

      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div className="flex gap-12 md:gap-16 animate-marquee whitespace-nowrap py-4">
          {loop.map((p, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center shrink-0"
              title={p.name}
            >
              <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center">
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
