import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function GetStarted() {
  const plans = [
    {
      name: "Basic",
      price: "$99",
      period: "per month",
      features: [
        "Soil health monitoring",
        "Basic weather insights",
        "5 sensor connections",
        "Weekly reports",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$199",
      period: "per month",
      features: [
        "Everything in Basic",
        "Advanced analytics",
        "20 sensor connections",
        "Daily reports",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      features: [
        "Everything in Professional",
        "Unlimited sensors",
        "Custom integrations",
        "24/7 support",
        "Dedicated account manager",
        "On-site training"
      ]
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-[#7A4C2C]/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#7A4C2C] dark:text-[#B9BA76] mb-6">
              Get Started with AgriElevate
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your agricultural needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 ${
                  plan.popular ? 'ring-2 ring-[#7DA408] transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-[#7DA408] text-white px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#7A4C2C] dark:text-[#B9BA76] mb-4">
                    {plan.name}
                  </h3>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-[#7A4C2C] dark:text-[#B9BA76]">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 ml-2">
                      /{plan.period}
                    </span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-[#7DA408] mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-[#7DA408] text-white py-3 rounded-lg hover:bg-[#807F10] transition-colors duration-300">
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}