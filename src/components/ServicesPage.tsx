import { useLanguage } from '../contexts/LanguageContext';
import { Card } from './ui/card';
import { motion } from 'motion/react';
import { 
  TrendingUp,
  Share2,
  Target,
  BarChart,
  Sparkles,
  Code,
  Smartphone,
  Layout,
  Palette,
  Wrench,
  Video,
  Camera,
  Mic,
  Lightbulb
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const ServicesPage = () => {
  const { t } = useLanguage();

  const departments = [
    {
      title: t('marketingDept'),
      description: t('marketingDesc'),
      image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDF8fHx8MTc2MTg4NjAyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-blue-500 to-blue-600',
      services: [
        { icon: TrendingUp, text: t('digitalMarketing') },
        { icon: Share2, text: t('socialMediaMgmt') },
        { icon: Target, text: t('mediaBuying') },
        { icon: BarChart, text: t('marketingStrategy') },
        { icon: Sparkles, text: t('branding') },
      ],
    },
    {
      title: t('programmingDept'),
      description: t('programmingDesc'),
      image: 'https://images.unsplash.com/photo-1565229284535-2cbbe3049123?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGluZ3xlbnwxfHx8fDE3NjE4MzU2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-purple-500 to-purple-600',
      services: [
        { icon: Code, text: t('webDev') },
        { icon: Smartphone, text: t('appDev') },
        { icon: Layout, text: t('customSoftware') },
        { icon: Palette, text: t('uiuxDesign') },
        { icon: Wrench, text: t('techSupport') },
      ],
    },
    {
      title: t('mediaDept'),
      description: t('mediaDesc'),
      image: 'https://images.unsplash.com/photo-1673767297196-ce9739933932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBzdHVkaW98ZW58MXx8fHwxNzYxODczNzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-pink-500 to-pink-600',
      services: [
        { icon: Video, text: t('videoProduction') },
        { icon: Camera, text: t('photography') },
        { icon: Mic, text: t('voiceOver') },
        { icon: Lightbulb, text: t('creativeDirection') },
      ],
    },
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
            {t('servicesTitle')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('language') === 'ar' 
              ? 'نقدم مجموعة شاملة من الخدمات المصممة لتحقيق نمو علامتك التجارية'
              : 'We offer a comprehensive suite of services designed to drive your brand growth'}
          </p>
        </motion.div>

        {/* Departments */}
        <div className="space-y-20">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden border-0 shadow-xl">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-80 md:h-auto ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <ImageWithFallback
                      src={dept.image}
                      alt={dept.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${dept.gradient} opacity-20`}></div>
                  </div>

                  {/* Content */}
                  <div className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${dept.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                      {index === 0 && <TrendingUp className="w-8 h-8 text-white" />}
                      {index === 1 && <Code className="w-8 h-8 text-white" />}
                      {index === 2 && <Video className="w-8 h-8 text-white" />}
                    </div>
                    
                    <h2 className="mb-4">{dept.title}</h2>
                    <p className="text-gray-600 mb-8 text-lg">
                      {dept.description}
                    </p>

                    <div className="space-y-4">
                      {dept.services.map((service, idx) => (
                        <motion.div
                          key={service.text}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className={`w-10 h-10 bg-gradient-to-br ${dept.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <service.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-gray-700">{service.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <Card className="p-12 bg-gradient-to-r from-blue-900 to-purple-900 text-white border-0">
            <h2 className="mb-4 text-white">
              {t('language') === 'ar' 
                ? 'هل أنت مستعد للبدء؟'
                : 'Ready to Get Started?'}
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              {t('language') === 'ar'
                ? 'دعنا نناقش كيف يمكننا مساعدتك في تحقيق أهدافك'
                : "Let's discuss how we can help you achieve your goals"}
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
