import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, LogIn, Sprout } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navigation = [
    { name: 'Solutions', href: '/solutions' },
    { name: 'Innovation', href: '/innovation' },
    { name: 'Who We Help', href: '/who-we-help' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm dark:bg-gray-800/95 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Sprout className="h-8 w-8 text-[#7DA408]" />
            <span className="text-2xl font-bold text-[#7A4C2C] dark:text-[#B9BA76]">
              FarmFilo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-[#7DA408] dark:hover:text-[#B9BA76]"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => navigate('/get-started')}
              className="bg-[#7DA408] text-white px-4 py-2 rounded-lg hover:bg-[#807F10] transition-colors duration-300"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate('/login')}
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-[#7DA408] dark:hover:text-[#B9BA76]"
            >
              <LogIn className="w-5 h-5 mr-1" />
              Log In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-[#7DA408] dark:hover:text-[#B9BA76]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-[#7DA408] dark:hover:text-[#B9BA76]"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                navigate('/get-started');
                setIsOpen(false);
              }}
              className="w-full mt-2 bg-[#7DA408] text-white px-4 py-2 rounded-lg hover:bg-[#807F10] transition-colors duration-300"
            >
              Get Started
            </button>
            <button
              onClick={() => {
                navigate('/login');
                setIsOpen(false);
              }}
              className="w-full mt-2 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-[#7DA408] dark:hover:text-[#B9BA76]"
            >
              <LogIn className="w-5 h-5 mr-1" />
              Log In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}