import { useLanguage } from '../contexts/LanguageContext';
import { Facebook, Instagram, Linkedin, MessageCircle, Mail, Phone } from 'lucide-react';
import logo from '../assets/logo.jpg';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer = ({ onNavigate }: FooterProps) => {
  const { t } = useLanguage();

  const navItems = [
    { key: 'home', label: t('home') },
    { key: 'about', label: t('about') },
    { key: 'services', label: t('services') },
    { key: 'contact', label: t('contact') },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: MessageCircle, label: 'TikTok', href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                {/* <span className="bg-gradient-to-br from-blue-900 to-purple-600 bg-clip-text text-transparent">SU</span> */}
                <img src={logo} className="text-white" style={{borderRadius:'12px'}}></img>
              </div>
              <span>Scale Up</span>
            </div>
            <p className="text-gray-200 mb-4">
              {t('heroSubtext')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">{t('quickLinks')}</h3>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => onNavigate(item.key)}
                  className="text-gray-200 hover:text-white transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">{t('getInTouch')}</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <a href="mailto:info@scaleupagency.com" className="text-gray-200 hover:text-white transition-colors">
                  info@scaleupagency.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <a href="tel:+966123456789" className="text-gray-200 hover:text-white transition-colors">
                  +966 12 345 6789
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <p className="mb-3">{t('followUs')}</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-gray-200">
          {t('copyright')}
        </div>
      </div>
    </footer>
  );
};
