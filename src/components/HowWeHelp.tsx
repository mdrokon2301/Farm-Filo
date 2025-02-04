import React from 'react';
import { Leaf, Truck, Building2, TreePine } from 'lucide-react';

function HowWeHelp() {
  const services = [
    {
      icon: <Leaf className="h-12 w-12" />,
      title: "Small Farms",
      description: "Tailored solutions for family-owned and small-scale agricultural operations",
    },
    {
      icon: <Truck className="h-12 w-12" />,
      title: "Commercial Farms",
      description: "Comprehensive systems for large-scale farming enterprises",
    },
    {
      icon: <Building2 className="h-12 w-12" />,
      title: "Agribusiness",
      description: "Enterprise solutions for agricultural processing and distribution",
    },
    {
      icon: <TreePine className="h-12 w-12" />,
      title: "Forestry",
      description: "Specialized monitoring for sustainable forest management",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#7A4C2C] dark:text-[#B9BA76] mb-4">
            How Can We Help?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tailored solutions for every agricultural sector
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center mb-6 text-[#A56B3C] dark:text-[#B9BA76]">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#7A4C2C] dark:text-[#B9BA76] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowWeHelp;