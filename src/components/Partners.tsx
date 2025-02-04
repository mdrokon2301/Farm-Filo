import React from 'react';

export default function Partners() {
  const partners = [
    { name: "AgriTech Solutions", logo: "https://placehold.co/200x100/A56B3C/ffffff?text=AgriTech" },
    { name: "FarmWise", logo: "https://placehold.co/200x100/7A4C2C/ffffff?text=FarmWise" },
    { name: "GreenGrow", logo: "https://placehold.co/200x100/807F10/ffffff?text=GreenGrow" },
    { name: "SoilTech", logo: "https://placehold.co/200x100/7DA408/ffffff?text=SoilTech" },
    { name: "EcoFarm", logo: "https://placehold.co/200x100/B9BA76/333333?text=EcoFarm" },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#7A4C2C] dark:text-[#B9BA76] mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join the growing network of agricultural innovators
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 w-auto rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}