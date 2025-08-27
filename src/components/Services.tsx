import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive websites that grow your business',
      icon: '💻'
    },
    {
      title: 'Mobile Apps',
      description: 'iOS and Android apps with seamless user experiences',
      icon: '📱'
    },
    {
      title: 'Ecommerce',
      description: 'Online stores that convert and scale reliably',
      icon: '🛒'
    },
    {
      title: 'Digital Marketing',
      description: 'SEO and growth campaigns that drive results',
      icon: '🚀'
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Compact, efficient solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="space-card rounded-xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border hover:border-primary/30"
            >
              <div className="text-3xl md:text-4xl mb-3">{service.icon}</div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground">{service.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
