import React from 'react';

interface InsightCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

export default function InsightCard({ icon, title, description, image }: InsightCardProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#7A4C2C] dark:text-[#B9BA76] mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        <button className="text-[#A56B3C] dark:text-[#B9BA76] hover:text-[#7A4C2C] dark:hover:text-[#807F10] font-medium">
          Learn More →
        </button>
      </div>
    </div>
  );
}