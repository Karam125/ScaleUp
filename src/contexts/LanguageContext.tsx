import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    contact: 'Contact',
    getQuote: 'Get a Quote',
    
    // Hero
    heroTitle: 'We Scale Your Business to the Next Level',
    heroSubtext: 'Scale Up is a full-service marketing, media, and tech company helping brands grow through creativity, strategy, and technology.',
    ctaButton: "Let's Work Together",
    
    // Services
    servicesTitle: 'Our Services',
    marketingDept: 'Marketing Department',
    marketingDesc: 'Comprehensive digital marketing solutions to elevate your brand and drive measurable growth.',
    programmingDept: 'Programming Department',
    programmingDesc: 'Custom software development and cutting-edge tech solutions tailored to your business needs.',
    mediaDept: 'Media Department',
    mediaDesc: 'Professional video production, photography, and creative content that brings your vision to life.',
    learnMore: 'Learn More',
    
    // Marketing Services
    digitalMarketing: 'Digital Marketing',
    socialMediaMgmt: 'Social Media Management',
    mediaBuying: 'Media Buying (Facebook, Instagram, Google Ads, TikTok)',
    marketingStrategy: 'Marketing Strategy & Campaign Planning',
    branding: 'Branding & Market Research',
    
    // Programming Services
    webDev: 'Website Development',
    appDev: 'Mobile App Development (Android & iOS)',
    customSoftware: 'Web Applications & Custom Software',
    uiuxDesign: 'UI/UX Design',
    techSupport: 'Technical Support & Maintenance',
    
    // Media Services
    videoProduction: 'Video Production & Editing',
    photography: 'Professional Photography',
    voiceOver: 'Voice Over Services',
    creativeDirection: 'Creative Direction & Content Creation',
    
    // About
    whoWeAre: 'Who We Are',
    aboutText: 'Scale Up is a multidisciplinary marketing and creative company dedicated to helping businesses achieve sustainable growth. Our team combines expertise in marketing strategy, programming, and media production to deliver impactful, data-driven results.',
    ourMission: 'Our Mission',
    missionText: 'To empower businesses with innovative marketing, technology, and media solutions that drive sustainable growth and meaningful impact.',
    ourVision: 'Our Vision',
    visionText: 'To be the leading agency in the MENA region, recognized for transforming brands through creativity, strategy, and technology.',
    
    // Contact
    contactTitle: "Let's Scale Up Together!",
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send Message',
    getInTouch: 'Get In Touch',
    callUs: 'Call Us',
    emailUs: 'Email Us',
    followUs: 'Follow Us',
    
    // Footer
    quickLinks: 'Quick Links',
    copyright: '© 2025 Scale Up. All rights reserved.',
    
    // CTA
    readyToScale: 'Ready to scale up your brand? Contact us today!',
    
    // Testimonials
    testimonials: 'What Our Clients Say',
  },
  ar: {
    // Header
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'الخدمات',
    contact: 'تواصل معنا',
    getQuote: 'احصل على عرض سعر',
    
    // Hero
    heroTitle: 'نحن نرتقي بأعمالك إلى المستوى التالي',
    heroSubtext: 'شركة Scale Up هي وكالة متكاملة للتسويق والإعلام والتقنية تساعد العلامات التجارية على النمو من خلال الإبداع والاستراتيجية والتكنولوجيا.',
    ctaButton: 'ابدأ معنا الآن',
    
    // Services
    servicesTitle: 'خدماتنا',
    marketingDept: 'قسم التسويق',
    marketingDesc: 'حلول تسويقية رقمية شاملة لتعزيز علامتك التجارية وتحقيق نمو ملموس.',
    programmingDept: 'قسم البرمجة',
    programmingDesc: 'تطوير برمجيات مخصصة وحلول تقنية متطورة مصممة خصيصاً لاحتياجات عملك.',
    mediaDept: 'قسم الميديا',
    mediaDesc: 'إنتاج فيديو احترافي، تصوير فوتوغرافي، ومحتوى إبداعي يحول رؤيتك إلى واقع.',
    learnMore: 'اعرف المزيد',
    
    // Marketing Services
    digitalMarketing: 'التسويق الرقمي',
    socialMediaMgmt: 'إدارة وسائل التواصل الاجتماعي',
    mediaBuying: 'شراء الإعلانات (Facebook, Instagram, Google Ads, TikTok)',
    marketingStrategy: 'التخطيط الاستراتيجي للحملات',
    branding: 'بناء الهوية والبحوث السوقية',
    
    // Programming Services
    webDev: 'تطوير المواقع الإلكترونية',
    appDev: 'تطوير تطبيقات الموبايل (Android & iOS)',
    customSoftware: 'البرمجيات المخصصة وتطبيقات الويب',
    uiuxDesign: 'تصميم واجهات وتجربة المستخدم',
    techSupport: 'الدعم الفني والصيانة',
    
    // Media Services
    videoProduction: 'إنتاج الفيديو والمونتاج',
    photography: 'التصوير الاحترافي',
    voiceOver: 'خدمات التعليق الصوتي',
    creativeDirection: 'الإخراج الإبداعي وصناعة المحتوى',
    
    // About
    whoWeAre: 'من نحن',
    aboutText: 'تُعد شركة Scale Up وكالة تسويق وإبداع متعددة التخصصات، تهدف إلى مساعدة الشركات على تحقيق نمو مستدام من خلال الجمع بين خبراتنا في الاستراتيجيات التسويقية والبرمجة والإنتاج الإعلامي لتقديم نتائج فعالة مبنية على البيانات.',
    ourMission: 'رسالتنا',
    missionText: 'تمكين الشركات من خلال حلول تسويقية وتقنية وإعلامية مبتكرة تحقق نمواً مستداماً وتأثيراً ملموساً.',
    ourVision: 'رؤيتنا',
    visionText: 'أن نكون الوكالة الرائدة في منطقة الشرق الأوسط وشمال أفريقيا، معروفين بتحويل العلامات التجارية من خلال الإبداع والاستراتيجية والتكنولوجيا.',
    
    // Contact
    contactTitle: 'دعنا نرتقي بعلامتك معاً!',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    message: 'الرسالة',
    send: 'إرسال',
    getInTouch: 'تواصل معنا',
    callUs: 'اتصل بنا',
    emailUs: 'راسلنا',
    followUs: 'تابعنا',
    
    // Footer
    quickLinks: 'روابط سريعة',
    copyright: '© 2025 شركة سكيل أب. جميع الحقوق محفوظة.',
    
    // CTA
    readyToScale: 'جاهز تنمّي علامتك التجارية؟ تواصل معنا اليوم!',
    
    // Testimonials
    testimonials: 'آراء عملائنا',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={language === 'ar' ? 'font-arabic' : 'font-english'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
