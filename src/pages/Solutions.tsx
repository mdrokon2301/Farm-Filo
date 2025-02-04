import React from 'react';
import { Leaf, Cloud, LineChart, Sprout } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "Soil Health Management",
      description: "Advanced soil monitoring and analysis for optimal crop growth",
      features: ["Real-time nutrient tracking", "pH level monitoring", "Moisture optimization"]
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Smart Irrigation",
      description: "Precision water management systems for efficient resource usage",
      features: ["Weather-based scheduling", "Drip irrigation control", "Water usage analytics"]
    },
    {
      icon: <LineChart className="w-12 h-12" />,
      title: "Yield Optimization",
      description: "Data-driven insights for maximizing crop yields",
      features: ["Predictive analytics", "Growth tracking", "Harvest timing"]
    },
    {
      icon: <Sprout className="w-12 h-12" />,
      title: "Carbon Tracking",
      description: "Monitor and optimize carbon sequestration in your soil",
      features: ["Carbon credit monitoring", "Sequestration tracking", "Environmental reporting"]
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-[#7A4C2C]/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#7A4C2C] dark:text-[#B9BA76] mb-6">
              Agricultural Solutions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive agricultural technology solutions designed to optimize your farming operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-[#A56B3C] dark:text-[#B9BA76] mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#7A4C2C] dark:text-[#B9BA76] mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-[#A56B3C] dark:bg-[#B9BA76] rounded-full mr-3"></span>
                      {feature}
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