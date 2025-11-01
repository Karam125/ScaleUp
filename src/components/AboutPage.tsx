import { useLanguage } from '../contexts/LanguageContext';
import { Card } from './ui/card';
import { motion } from 'motion/react';
import { Target, Eye, TrendingUp, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const AboutPage = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      titleEn: 'Innovation',
      titleAr: 'الابتكار',
      descEn: 'We constantly push boundaries to deliver creative solutions.',
      descAr: 'نسعى باستمرار لتجاوز الحدود لتقديم حلول إبداعية.',
    },
    {
      icon: Users,
      titleEn: 'Client-Focused',
      titleAr: 'تركيز على العميل',
      descEn: 'Your success is our priority. We work as an extension of your team.',
      descAr: 'نجاحك هو أولويتنا. نعمل كامتداد لفريقك.',
    },
    {
      icon: TrendingUp,
      titleEn: 'Results-Driven',
      titleAr: 'النتائج أولاً',
      descEn: 'Data-driven strategies that deliver measurable growth and impact.',
      descAr: 'استراتيجيات قائمة على البيانات تحقق نمواً وتأثيراً ملموساً.',
    },
    {
      icon: Eye,
      titleEn: 'Transparency',
      titleAr: 'الشفافية',
      descEn: 'Clear communication and honest reporting throughout every project.',
      descAr: 'تواصل واضح وتقارير شفافة طوال كل مشروع.',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="mb-6 bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
            {t('whoWeAre')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('aboutText')}
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758691737535-57edd2a11d73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MTg5MjQxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="About Us"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 h-full bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="mb-4">{t('ourMission')}</h2>
              <p className="text-gray-600 text-lg">
                {t('missionText')}
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 h-full bg-gradient-to-br from-purple-50 to-pink-50 border-0">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="mb-4">{t('ourVision')}</h2>
              <p className="text-gray-600 text-lg">
                {t('visionText')}
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-center mb-12 bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
            {t('language') === 'ar' ? 'قيمنا' : 'Our Values'}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.titleEn}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow border-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mb-2">
                    {t('language') === 'ar' ? value.titleAr : value.titleEn}
                  </h3>
                  <p className="text-gray-600">
                    {t('language') === 'ar' ? value.descAr : value.descEn}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
