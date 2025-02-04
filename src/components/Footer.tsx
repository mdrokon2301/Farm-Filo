import React from 'react';
import { Leaf, Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="h-8 w-8 text-[#B9BA76]" />
              <span className="text-xl font-bold">FarmFilo</span>
            </div>
            <p className="text-gray-400 mb-6">
              Revolutionizing agriculture through sustainable technology and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/farmfilobd" className="text-gray-400 hover:text-[#B9BA76]">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.x.com/farmfilobd" className="text-gray-400 hover:text-[#B9BA76]">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/farmfilobd" className="text-gray-400 hover:text-[#B9BA76]">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#B9BA76]">Solutions</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#B9BA76]">Innovation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#B9BA76]">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#B9BA76]">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#B9BA76]">Soil Monitoring</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#B9BA76]">Carbon Tracking</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#B9BA76]">Yield Optimization</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#B9BA76]">Data Analytics</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#B9BA76]" />
                <span className="text-gray-400">NS Road, Kushtia Sadar, Kushtia-7000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#B9BA76]" />
                <span className="text-gray-400">+8801822-917633</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#B9BA76]" />
                <span className="text-gray-400">contact@farmfilo.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} FarmFilo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;