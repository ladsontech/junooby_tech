
import React from 'react';

const LocationServices = () => {
  const locations = [
    {
      city: "Kampala",
      services: ["Web Development", "Mobile Apps", "CCTV Installation", "Solar Systems"],
      description: "Professional tech services in Uganda's capital city"
    },
    {
      city: "Entebbe", 
      services: ["Website Design", "Security Systems", "Digital Marketing"],
      description: "Quality technology solutions for businesses in Entebbe"
    },
    {
      city: "Jinja",
      services: ["E-commerce Development", "Camera Installation", "SEO Services"], 
      description: "Comprehensive tech support for Jinja businesses"
    },
    {
      city: "Mbarara",
      services: ["Web Hosting", "Mobile App Development", "Solar Installation"],
      description: "Advanced technology services in Western Uganda"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            Serving Tech Needs Across Uganda
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From Kampala to rural areas, we provide professional web development, mobile app development, 
            CCTV installation, and solar systems across Uganda with local expertise and global standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {locations.map((location, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {location.city}
              </h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                {location.description}
              </p>
              <div className="space-y-2">
                {location.services.map((service, idx) => (
                  <div key={idx} className="flex items-center text-gray-700 text-sm md:text-base">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 lg:mt-16 text-center">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Complete Tech Solutions for Uganda
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg">
              Whether you need <strong>web development in Kampala</strong>, <strong>mobile app development in Uganda</strong>, 
              <strong>CCTV camera installation</strong>, or <strong>solar system installation</strong>, 
              Junooby Digital Craft delivers professional technology solutions with local understanding and international quality standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationServices;
