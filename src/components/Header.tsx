import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo.jpg';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Header = ({ currentPage, onNavigate }: HeaderProps) => {
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', label: t('home') },
    { key: 'about', label: t('about') },
    { key: 'services', label: t('services') },
    { key: 'contact', label: t('contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-purple-600 rounded-lg flex items-center justify-center">
              <img src={logo} className="text-white" style={{borderRadius:'12px'}}></img>
            </div>
            <span className="bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
              Scale Up
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={`transition-colors hover:text-purple-600 ${
                  currentPage === item.key ? 'text-purple-600' : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-md border border-gray-300 hover:border-purple-600 transition-colors"
            >
              {language === 'en' ? 'العربية' : 'EN'}
            </button>

            {/* CTA Button */}
            <Button 
              onClick={() => onNavigate('contact')}
              className="hidden md:block bg-gradient-to-r from-blue-900 to-purple-600 hover:from-blue-800 hover:to-purple-500"
            >
              {t('getQuote')}
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  onNavigate(item.key);
                  setMobileMenuOpen(false);
                }}
                className={`text-left transition-colors hover:text-purple-600 ${
                  currentPage === item.key ? 'text-purple-600' : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className="bg-gradient-to-r from-blue-900 to-purple-600 hover:from-blue-800 hover:to-purple-500"
            >
              {t('getQuote')}
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};
