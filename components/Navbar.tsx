import React, { useState } from 'react';
import { Menu, X, Facebook, Twitter, Youtube, Instagram, Heart } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import logo from './assets/logo.png.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50 font-sans">
      {/* Top Bar */}
      <div className="bg-brand-blue text-white py-2.5 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="font-medium">والله في عَوْن العبد ما كان العبد في عَوْن أخيه</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/alsharyiaashmoun" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors p-1">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-brand-gold transition-colors p-1">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-brand-gold transition-colors p-1">
              <Youtube size={18} />
            </a>
            <a href="#" className="hover:text-brand-gold transition-colors p-1">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 cursor-pointer hover:opacity-90 transition-opacity">
            <img
              src={logo}
              alt="شعار الجمعية الشرعية"
              className="w-20 h-20 md:w-24 md:h-24 object-contain shrink-0 mix-blend-multiply"
            />
            <div className="hidden sm:flex flex-col">
              <h1 className="text-xl md:text-2xl font-bold text-brand-blue leading-tight">
                الجمعية الشرعية
              </h1>
              <span className="text-xs md:text-sm text-gray-600 font-medium mt-1">
                لتعاون العاملين بالكتاب والسنة
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden xl:flex items-center gap-2">
            {NAV_ITEMS.slice(0, 7).map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="px-4 py-2.5 text-gray-700 font-semibold hover:text-brand-blue hover:bg-gray-50 rounded-lg transition-all duration-200 text-base"
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/donate" 
              className="mr-2 bg-brand-red text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-amber-700 transition-all duration-200 shadow-md hover:shadow-lg font-bold text-base"
            >
              <Heart size={18} fill="currentColor" />
              <span>تبرع الآن</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 py-4 absolute w-full shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col space-y-2 px-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand-blue rounded-lg font-medium transition-colors border-b border-gray-50 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3">
              <button 
                onClick={() => { navigate('/donate'); setIsOpen(false); }} 
                className="w-full bg-brand-red text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-amber-700 transition-colors shadow-md font-bold"
              >
                <Heart size={18} fill="currentColor" />
                تبرع الآن
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;