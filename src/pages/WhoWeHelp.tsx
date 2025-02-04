import React from 'react';
import { Users, Building, TreePine, Warehouse } from 'lucide-react';

export default function WhoWeHelp() {
  const sectors = [
    {
      icon: <Users className="w-16 h-16" />,
      title: "Small Farmers",
      description: "Supporting local farmers with accessible technology solutions",
      benefits: ["Affordable solutions", "Easy implementation", "Local support"]
    },
    {
      icon: <Building className="w-16 h-16" />,
      title: "Commercial Farms",
      description: "Enterprise-scale solutions for large agricultural operations",
      benefits: ["Scalable systems", "Advanced analytics", "Custom integration"]
    },
    {
      icon: <TreePine className="w-16 h-16" />,
      title: "Forestry",
      description: "Sustainable forest management and monitoring solutions",
      benefits: ["Ecosystem tracking", "Conservation tools", "Growth monitoring"]
    },
    {
      icon: <Warehouse className="w-16 h-16" />,
      title: "Agribusiness",
      description: "Comprehensive solutions for agricultural businesses",
      benefits: ["Supply chain optimization", "Quality control", "Market insights"]
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-[#7DA408]/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#7A4C2C] dark:text-[#B9BA76] mb-6">
              Who We Help
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tailored agricultural solutions for every sector of the farming industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-[#A56B3C] dark:text-[#B9BA76] mb-6">
                  {sector.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#7A4C2C] dark:text-[#B9BA76] mb-4">
                  {sector.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {sector.description}
                </p>
                <ul className="space-y-3">
                  {sector.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-[#A56B3C] dark:bg-[#B9BA76] rounded-full mr-3"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}