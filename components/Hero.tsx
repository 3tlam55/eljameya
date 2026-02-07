import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, HandHeart, ChevronLeft } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.section
      className="relative w-full h-[650px] flex items-center justify-center bg-gray-900 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="https://picsum.photos/1920/1080?grayscale&blur=2&random=75"
          alt="Charity Impact"
          className="w-full h-full object-cover opacity-40"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-brand-blue/60 to-transparent"></div>
      </div>

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 z-10 text-center flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <motion.span
          className="bg-brand-gold text-white px-6 py-2 rounded-full text-base font-bold shadow-lg mb-2 border-2 border-white/20"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 15 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}
        >
          th75
        </motion.span>

        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-5xl drop-shadow-lg font-serif"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          " والله في عَوْن العبد ما كان العبد في عَوْن أخيه "
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-100 max-w-3xl leading-relaxed mt-4 bg-black/20 p-6 rounded-xl backdrop-blur-sm border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          العديد من الفقراء والمرضى ينتظرون الدعم والصدقات من المجتمع الذي يعيشون فيه بعد أن اجتمع عليهم هم الفقر والمرض، وها هي الفرصة لتتعرف على احتياجات العديد منهم، وتَصلُهم بخيرك وصدقاتك.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-8 w-full justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <motion.button
            className="bg-brand-red hover:bg-amber-700 text-white px-10 py-4 rounded-full font-bold text-xl transition-all shadow-xl flex items-center justify-center gap-2 border-2 border-transparent"
            whileHover={{ scale: 1.08, boxShadow: '0 20px 40px rgba(217, 119, 6, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            تبرع الآن
            <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <Heart size={24} fill="currentColor" />
            </motion.div>
          </motion.button>

          <motion.button
            className="bg-transparent hover:bg-white text-white hover:text-brand-blue px-10 py-4 rounded-full font-bold text-xl transition-all shadow-xl flex items-center justify-center gap-2 border-2 border-white"
            whileHover={{ scale: 1.08, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            whileTap={{ scale: 0.95 }}
          >
            مشاهدة الحالات
            <motion.div animate={{ x: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <ChevronLeft size={24} />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;