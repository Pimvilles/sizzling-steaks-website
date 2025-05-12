
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and Description */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4 text-sns-gold">Steaks & Shakes</h2>
            <p className="text-gray-300 mb-4">
              The Best Burger In The Vaal. We serve delicious burgers, shakes, and more.
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sns-gold">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sns-gold">
                <Instagram size={24} />
              </a>
              <a href="https://wa.me/27797907083" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sns-gold">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sns-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-sns-orange">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-sns-orange">About Us</Link></li>
              <li><Link to="/menu" className="text-gray-300 hover:text-sns-orange">Our Menu</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-sns-orange">Gallery</Link></li>
              <li><Link to="/deals" className="text-gray-300 hover:text-sns-orange">Online Deals</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-sns-orange">Contact</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sns-gold">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>120 General Hertzog Road</p>
              <p>Three Rivers, Vereeniging</p>
              <p>
                <a href="tel:0797907083" className="hover:text-sns-orange">
                  WhatsApp: 079 790 7083
                </a>
              </p>
            </address>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2 text-sns-gold">Opening Hours</h4>
              <p className="text-gray-300">Mon-Sun: 10:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Steaks & Shakes. All Rights Reserved.
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-4 text-sm">
            <Link to="/terms" className="text-gray-400 hover:text-sns-gold mb-2 md:mb-0">Terms & Conditions</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-sns-gold mb-2 md:mb-0">Privacy Policy</Link>
            <a 
              href="https://www.kwenamai.co.za" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-sns-gold"
            >
              Powered by Kwena Moloto A.I Solutions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
