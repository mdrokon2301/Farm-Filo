import React from 'react';
import { ArrowRight, Cpu, Database, LineChart } from 'lucide-react';

function Technology() {
  const features = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Modular",
      description: "Customizable solutions that adapt to your specific agricultural needs",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Scalable",
      description: "Grow your implementation from a single field to entire operations",
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Flexible",
      description: "Integrate with existing systems and adapt to changing requirements",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#7A4C2C] dark:text-[#B9BA76] mb-4">
            Technology for Sustainable Agriculture
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Advanced solutions designed for modern farming challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-[#A56B3C] dark:text-[#B9BA76] mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#7A4C2C] dark:text-[#B9BA76] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center space-x-2 bg-[#A56B3C] hover:bg-[#7A4C2C] text-white px-8 py-3 rounded-md transition duration-300">
            <span>Discover Our Technology</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Technology;