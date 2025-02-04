import React from 'react';
import { Users, Sprout, BarChart, Globe, Shield } from 'lucide-react';

function TrustPlatform() {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      value: "10,000+",
      label: "Farmers Served",
    },
    {
      icon: <Sprout className="h-8 w-8" />,
      value: "1M+",
      label: "Acres Monitored",
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      value: "30%",
      label: "Yield Increase",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      value: "500K",
      label: "CO₂ Tons Reduced",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      value: "99.9%",
      label: "Uptime",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#7A4C2C] dark:text-[#B9BA76] mb-4">
            A Platform You Can Trust
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Empowering sustainable agriculture through proven results and reliable technology
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4 text-[#A56B3C] dark:text-[#B9BA76]">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-[#7A4C2C] dark:text-[#B9BA76] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustPlatform;