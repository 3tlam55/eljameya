import React from 'react';
import { motion } from 'framer-motion';
import { IMPACT_STATS } from '../constants';
import { Truck, Pill, Heart, Droplets } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';

const iconMap: Record<string, React.ReactNode> = {
  Truck: <Truck size={32} />,
  Droplets: <Droplets size={32} />,
  Pill: <Pill size={32} />,
  Heart: <Heart size={32} />,
};

const StatCard: React.FC<{ stat: any; index: number }> = ({ stat, index }) => {
  // Extract number from string like "500+" or "10K+"
  const numericValue = parseInt(stat.number.replace(/[^0-9]/g, '')) || 0;
  const suffix = stat.number.replace(/[0-9]/g, '');

  const { count, ref } = useCountUp({
    end: numericValue,
    duration: 2000,
    decimals: 0
  });

  return (
    <motion.div
      ref={ref}
      className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl hover:from-brand-blue hover:to-green-900 hover:text-white transition-all duration-500 group shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-brand-gold/0 via-brand-gold/10 to-brand-gold/0"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.8 }}
      />

      <motion.div
        className="w-16 h-16 bg-white text-brand-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        {iconMap[stat.iconName]}
      </motion.div>

      <motion.div
        className="text-4xl font-bold text-brand-red mb-2 group-hover:text-brand-gold relative z-10"
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
      >
        {count}{suffix}
      </motion.div>

      <div className="font-medium text-lg relative z-10">{stat.label}</div>

      {/* Pulse effect */}
      <motion.div
        className="absolute inset-0 border-2 border-brand-gold rounded-2xl opacity-0 group-hover:opacity-100"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
    </motion.div>
  );
};

const ImpactSection: React.FC = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-50 -z-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 -z-10"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-4 text-center">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="text-brand-blue font-bold text-lg inline-block"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            مخطوطة 1
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-brand-blue mt-2 font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            قطرات الخير
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-brand-gold mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />

          <motion.p
            className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            نتشرف بتزايد المحتاجين الذين نخدمهم يوميًّا، ونحن بحاجة لمزيد من النفقات حتى لا ينقطع عنهم المدد.. وإليكم بعض الخدمات الشهرية الثابتة:
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {IMPACT_STATS.map((stat, idx) => (
            <StatCard key={idx} stat={stat} index={idx} />
          ))}
        </div>

        <motion.p
          className="mt-12 text-gray-500 italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          بالإضافة إلى وجبات مطهوة يوميّاً للمسنين، والمزيد…
        </motion.p>
      </div>
    </section>
  );
};

export default ImpactSection;