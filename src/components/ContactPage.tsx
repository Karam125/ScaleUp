import { React } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export const ContactPage = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert(language === 'ar' ? 'تم إرسال رسالتك بنجاح!' : 'Your message has been sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t('emailUs'),
      value: 'info@scaleupagency.com',
      link: 'mailto:info@scaleupagency.com',
    },
    {
      icon: Phone,
      title: t('callUs'),
      value: '+966 12 345 6789',
      link: 'tel:+966123456789',
    },
    {
      icon: MapPin,
      title: language === 'ar' ? 'موقعنا' : 'Our Location',
      value: language === 'ar' ? 'القاهرة، مصر' : 'Cairo, Egypt',
      link: '#',
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#', color: 'hover:text-blue-600' },
    { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:text-pink-600' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-700' },
    { icon: MessageCircle, label: 'TikTok', href: '#', color: 'hover:text-gray-800' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="mb-6 bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
            {t('contactTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'ar'
              ? 'نحن هنا لمساعدتك. تواصل معنا وسنكون سعداء بالرد على استفساراتك'
              : "We're here to help. Reach out to us and we'll be happy to answer your questions"}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 border-0 shadow-xl">
              <h2 className="mb-6">
                {language === 'ar' ? 'أرسل لنا رسالة' : 'Send us a message'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-700">
                    {t('name')}
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={language === 'ar' ? 'أدخل اسمك' : 'Enter your name'}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">
                    {t('email')}
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">
                    {t('message')}
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={language === 'ar' ? 'اكتب رسالتك هنا' : 'Write your message here'}
                    className="w-full min-h-[150px]"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-900 to-purple-600 hover:from-blue-800 hover:to-purple-500"
                >
                  {t('send')}
                  <Send className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="p-8 border-0 shadow-xl">
              <h2 className="mb-6">{t('getInTouch')}</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 hover:text-purple-600 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{info.title}</p>
                      <p>{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </Card>

            {/* Social Media */}
            <Card className="p-8 border-0 shadow-xl">
              <h3 className="mb-6">{t('followUs')}</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center transition-all ${social.color} hover:scale-110`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </Card>

            {/* Map */}
            <Card className="p-0 border-0 shadow-xl overflow-hidden">
              <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <MapPin className="w-16 h-16 text-purple-600" />
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
