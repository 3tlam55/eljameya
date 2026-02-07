import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'أم محمود',
    role: 'مستفيدة من برنامج الدعم',
    content: 'الجمعية الشرعية غيرت حياتنا تماماً، ساعدوني في تعليم أطفالي وفي السكن الآدمي. بارك الله فيهم وفي كل من يساعدهم.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
    rating: 5,
  },
  {
    id: 2,
    name: 'المهندس علي',
    role: 'متطوع منذ 5 سنوات',
    content: 'العمل التطوعي مع الجمعية أعطاني معنى حقيقي للحياة. رؤية الابتسامات على وجوه المحتاجين تستحق كل جهد.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2',
    rating: 5,
  },
  {
    id: 3,
    name: 'الدكتورة فاطمة',
    role: 'متخصصة طبية',
    content: 'مجمع الإصلاح الطبي يقدم خدمات طبية ممتازة برسوم رمزية. المستوى الطبي عالي جداً والفريق محترف.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3',
    rating: 5,
  },
  {
    id: 4,
    name: 'الشاب أحمد',
    role: 'استفاد من تيسير الزواج',
    content: 'دعم الجمعية لي في زفافي كان حلماً تحقق. فعلاً كانوا السند الحقيقي في أجمل أيام حياتي.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=4',
    rating: 5,
  },
  {
    id: 5,
    name: 'معلمة نور',
    role: 'مشرفة على دار التحفيظ',
    content: 'برنامج التحفيظ في الجمعية ممتاز جداً. الأطفال يتعلمون القرآن في بيئة آمنة وآدمية.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=5',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 12 },
    },
  };

  const testimonialVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.1, rotate: 5 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.section
      className="py-20 bg-gradient-to-b from-white to-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.span
            className="text-brand-blue font-bold text-lg"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            تقييمات الآخرين
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-brand-blue mt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            شهادات من المستفيدين
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-brand-gold mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <motion.p
            className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            اسمع من الناس الذين غيرت الجمعية الشرعية حياتهم
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          variants={itemVariants}
        >
          <div className="relative">
            {/* Testimonial Card */}
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-l-4 border-brand-gold"
              key={currentIndex}
              variants={testimonialVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="flex items-start gap-4 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-brand-gold"
                  />
                </motion.div>
                <div className="flex-1">
                  <motion.h3
                    className="text-xl font-bold text-gray-900"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {testimonials[currentIndex].name}
                  </motion.h3>
                  <motion.p
                    className="text-brand-blue font-semibold"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {testimonials[currentIndex].role}
                  </motion.p>
                </div>
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  <Quote className="text-brand-gold opacity-50" size={32} />
                </motion.div>
              </motion.div>

              {/* Stars */}
              <motion.div
                className="flex gap-1 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {Array.from({ length: testimonials[currentIndex].rating }).map(
                  (_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <Star
                        className="text-brand-gold fill-brand-gold"
                        size={20}
                      />
                    </motion.div>
                  )
                )}
              </motion.div>

              {/* Content */}
              <motion.p
                className="text-gray-700 text-lg leading-relaxed mb-6 italic"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                "{testimonials[currentIndex].content}"
              </motion.p>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 justify-center mt-8">
              <motion.button
                onClick={goToPrevious}
                className="p-3 rounded-full bg-brand-blue text-white hover:bg-green-900 transition-colors shadow-lg"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <ChevronRight size={24} />
              </motion.button>

              {/* Indicators */}
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-brand-blue w-8'
                        : 'bg-gray-300'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={goToNext}
                className="p-3 rounded-full bg-brand-blue text-white hover:bg-green-900 transition-colors shadow-lg"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <ChevronLeft size={24} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;
