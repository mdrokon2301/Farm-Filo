import React from 'react';
import { Cpu, Database, Workflow, Brain } from 'lucide-react';

export default function Innovation() {
  const innovations = [
    {
      image: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?auto=format&fit=crop&q=80&w=2000",
      title: "AI-Powered Analytics",
      description: "Machine learning algorithms that analyze crop patterns and predict optimal farming conditions",
      icon: <Brain className="w-8 h-8" />
    },
    {
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2000",
      title: "IoT Integration",
      description: "Connected devices and sensors providing real-time agricultural insights",
      icon: <Cpu className="w-8 h-8" />
    },
    {
      image: "https://images.unsplash.com/photo-1581093458791-9d15482778a1?auto=format&fit=crop&q=80&w=2000",
      title: "Blockchain Tracking",
      description: "Transparent supply chain management and crop verification",
      icon: <Database className="w-8 h-8" />
    },
    {
      image: "https://images.unsplash.com/photo-1584967918940-a7d51b064268?auto=format&fit=crop&q=80&w=2000",
      title: "Automated Workflows",
      description: "Streamlined farming processes through intelligent automation",
      icon: <Workflow className="w-8 h-8" />
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#7A4C2C] dark:text-[#B9BA76] mb-6">
              Agricultural Innovation
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Pioneering the future of farming with cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {innovations.map((innovation, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-xl"
              >
                <div className="relative h-64 w-full">
                  <img
                    src={innovation.image}
                    alt={innovation.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg text-white">
                      {innovation.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {innovation.title}
                    </h3>
                  </div>
                  <p className="text-white/90">
                    {innovation.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}