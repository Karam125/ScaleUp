import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Code, 
  Video, 
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
// import background from '../assets/DEVA-1630.jpg';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage = ({ onNavigate }: HomePageProps) => {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: TrendingUp,
      title: t('marketingDept'),
      description: t('marketingDesc'),
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Code,
      title: t('programmingDept'),
      description: t('programmingDesc'),
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: Video,
      title: t('mediaDept'),
      description: t('mediaDesc'),
      gradient: 'from-pink-500 to-pink-600',
    },
  ];

  const testimonials = [
    {
      name: 'Ahmed Al-Rashid',
      nameAr: 'أحمد الراشد',
      role: 'CEO, TechStart',
      roleAr: 'المدير التنفيذي، تك ستارت',
      text: 'Scale Up Agency transformed our brand presence completely. Their strategic approach to digital marketing delivered exceptional results.',
      textAr: 'شركة Scale Up غيّرت حضور علامتنا التجارية بشكل كامل. نهجهم الاستراتيجي في التسويق الرقمي حقق نتائج استثنائية.',
      rating: 5,
    },
    {
      name: 'Sarah Mohammed',
      nameAr: 'سارة محمد',
      role: 'Marketing Director, Innovate Plus',
      roleAr: 'مديرة التسويق، إنوفيت بلس',
      text: 'Professional team with deep expertise. They understand both creativity and analytics, which is rare to find.',
      textAr: 'فريق محترف يمتلك خبرة عميقة. يفهمون الإبداع والتحليلات معاً، وهو أمر نادر.',
      rating: 5,
    },
    {
      name: 'Khalid Bin Saleh',
      nameAr: 'خالد بن صالح',
      role: 'Founder, Retail Hub',
      roleAr: 'المؤسس، ريتيل هَب',
      text: 'The media production quality is outstanding. Every video they produced exceeded our expectations.',
      textAr: 'جودة الإنتاج الإعلامي متميزة. كل فيديو أنتجوه فاق توقعاتنا.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
             src="https://images.unsplash.com/photo-1542744094-f77e9f7a10b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MTg0ODU1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            // src={background}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-purple-900/95"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h1 className="mb-6 text-white">
              {t('heroTitle')}
            </h1>
            <p className="mb-8 text-xl text-gray-200 max-w-3xl mx-auto">
              {t('heroSubtext')}
            </p>
            <Button 
              onClick={() => onNavigate('contact')}
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100"
            >
              {t('ctaButton')}
              <ArrowRight className={`w-5 h-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
              {t('servicesTitle')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-8 hover:shadow-xl transition-shadow duration-300 h-full border-0">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => onNavigate('services')}
                    className="border-gray-300 hover:border-purple-600 hover:text-purple-600"
                  >
                    {t('learnMore')}
                    <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
              {t('testimonials')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-6 h-full border-0 shadow-lg">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "{language === 'ar' ? testimonial.textAr : testimonial.text}"
                  </p>
                  <div>
                    <p>{language === 'ar' ? testimonial.nameAr : testimonial.name}</p>
                    <p className="text-sm text-gray-500">
                      {language === 'ar' ? testimonial.roleAr : testimonial.role}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-white">
              {t('readyToScale')}
            </h2>
            <Button 
              onClick={() => onNavigate('contact')}
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100"
            >
              {t('ctaButton')}
              <ArrowRight className={`w-5 h-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
