import React from 'react';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-aura-charcoal text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-6">
              Aura<span className="text-aura-blue">Cart</span>
            </h3>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Bringing you the future of technology today. We curate the finest selection of gadgets and electronics for the modern lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-aura-blue transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-aura-blue transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-aura-blue transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-aura-blue transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-aura-blue transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-aura-blue transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-aura-blue transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-6">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-aura-blue transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-aura-blue transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-aura-blue transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-aura-blue transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-aura-blue flex-shrink-0" />
                <span>123 Innovation Dr, Tech City, TC 94043</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-aura-blue flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-aura-blue flex-shrink-0" />
                <span>support@auracart.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} AuraCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;