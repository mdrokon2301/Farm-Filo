import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

function Applications() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does AgriElevate improve soil health?",
      answer: "Our technology uses advanced sensors and AI to monitor soil conditions in real-time, providing detailed analysis of nutrients, moisture, and microbial activity. This data helps farmers make informed decisions about soil management.",
    },
    {
      question: "What types of farms can benefit from your solutions?",
      answer: "Our solutions are adaptable to various agricultural settings, including traditional farms, organic operations, indoor farming facilities, and large-scale commercial agriculture. We customize our technology to meet specific needs.",
    },
    {
      question: "How do you measure carbon sequestration?",
      answer: "We employ a combination of soil testing, satellite imagery, and proprietary algorithms to accurately measure and track carbon sequestration in agricultural lands over time.",
    },
    {
      question: "What ROI can farmers expect?",
      answer: "Typically, farms using our technology see a 15-30% increase in yield efficiency and a 20-40% reduction in water usage within the first year of implementation.",
    },
  ];

  const images = [
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1592989819277-a8f339840c8a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=800",
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl font-bold text-[#7A4C2C] dark:text-[#B9BA76] mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center"
                    onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
                  >
                    <span className="font-medium text-[#7A4C2C] dark:text-[#B9BA76]">
                      {faq.question}
                    </span>
                    {activeQuestion === index ? (
                      <ChevronUp className="h-5 w-5 text-[#A56B3C] dark:text-[#B9BA76]" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-[#A56B3C] dark:text-[#B9BA76]" />
                    )}
                  </button>
                  {activeQuestion === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Image Gallery */}
          <div className="relative h-[600px] overflow-hidden rounded-lg shadow-xl">
            <div className="absolute inset-0 flex flex-col">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-full flex-shrink-0 transform transition-transform duration-1000"
                  style={{
                    animation: `scroll-y ${images.length * 5}s linear infinite`,
                    animationDelay: `${index * 5}s`,
                  }}
                >
                  <img
                    src={image}
                    alt={`Agricultural application ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Applications;