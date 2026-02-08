import React, { useState } from 'react';
import { Menu, X, Search, Facebook, Twitter, Youtube, Instagram, Heart } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import logo from './assets/logo.png.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50 font-sans">
      {/* Top Bar */}
      <div className="bg-brand-blue text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span>والله في عَوْن العبد ما كان العبد في عَوْن أخيه</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-brand-gold transition-colors"><Facebook size={16} /></a>
            <a href="#" className="hover:text-brand-gold transition-colors"><Twitter size={16} /></a>
            <a href="#" className="hover:text-brand-gold transition-colors"><Youtube size={16} /></a>
            <a href="#" className="hover:text-brand-gold transition-colors"><Instagram size={16} /></a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
            <img
              src={logo}
              alt="شعار الجمعية الشرعية"
              className="w-24 h-24 object-contain shrink-0 mix-blend-multiply"
            />
            <div className="hidden sm:flex flex-col">
              <h1 className="text-xl md:text-2xl font-bold text-brand-blue leading-none">الجمعية الشرعية</h1>
              <span className="text-xs text-gray-600 font-semibold tracking-wider mt-1">لتعاون العاملين بالكتاب والسنة</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden xl:flex items-center gap-2">
            {NAV_ITEMS.slice(0, 7).map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="px-3 py-2 text-gray-700 font-semibold hover:text-brand-blue hover:bg-green-50 rounded-md transition-colors text-base"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/donate" className="mr-2 bg-brand-red text-white px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-amber-700 transition-colors shadow-sm font-bold text-base">
              <Heart size={16} fill="currentColor" />
              <span>تبرع الآن</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden text-gray-700 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 py-4 absolute w-full shadow-lg z-50 h-[80vh] overflow-y-auto">
          <div className="flex flex-col space-y-2 px-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-brand-blue rounded-md font-medium border-b border-gray-50 last:border-0 text-base"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <button onClick={() => { navigate('/donate'); setIsOpen(false); }} className="w-full bg-brand-red text-white py-3 rounded-lg flex items-center justify-center gap-2 font-bold">
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