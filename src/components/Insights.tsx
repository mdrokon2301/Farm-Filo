import React from 'react';
import { Leaf, Cloud, Sun, Wind } from 'lucide-react';
import InsightCard from './InsightCard';

export default function Insights() {
  const insights = [
    {
      icon: <Leaf className="w-6 h-6 text-[#A56B3C]" />,
      title: "Soil Health Innovation",
      description: "Advanced monitoring systems for optimal soil management",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800",
    },
    {
      icon: <Cloud className="w-6 h-6 text-[#A56B3C]" />,
      title: "Water Conservation",
      description: "Smart irrigation solutions for sustainable farming",
      image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&q=80&w=800",
    },
    {
      icon: <Sun className="w-6 h-6 text-[#A56B3C]" />,
      title: "Climate Resilience",
      description: "Strategies for adapting to changing weather patterns",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=800",
    },
    {
      icon: <Wind className="w-6 h-6 text-[#A56B3C]" />,
      title: "Carbon Monitoring",
      description: "Track and optimize carbon sequestration in soil",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#7A4C2C] dark:text-[#B9BA76] mb-4">
            Latest Insights
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover how our innovative solutions are transforming agriculture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {insights.map((insight, index) => (
            <InsightCard key={index} {...insight} />
          ))}
        </div>
      </div>
    </section>
  );
}