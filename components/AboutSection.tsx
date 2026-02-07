import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, UserCheck, FileText } from 'lucide-react';

const AboutSection: React.FC = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    }),
  };

  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" variants={cardVariants} custom={0}>
          <motion.h2
            className="text-3xl font-bold text-brand-blue"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            نبذة عن الجمعية الشرعية
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-brand-gold mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
            {/* Card 1: What is it */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-md border-t-4 border-brand-blue text-center group hover:-translate-y-2 transition-transform duration-300"
              custom={0}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            >
                <motion.div
                  className="w-16 h-16 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                >
                    <FileText size={32} />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">ماهية الجمعية</h3>
                <p className="text-gray-600 leading-relaxed">
                    جمعية شرعية تعاونية للعاملين بالكتاب والسنة.
                    <br />
                    <span className="font-bold text-brand-red block mt-2">رحمة الناس ونفعهم</span>
                </p>
            </motion.div>

            {/* Card 2: Leader */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-md border-t-4 border-brand-gold text-center group hover:-translate-y-2 transition-transform duration-300"
              custom={1}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            >
                <motion.div
                  className="w-16 h-16 bg-amber-50 text-brand-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-gold group-hover:text-white transition-colors"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                >
                    <UserCheck size={32} />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">الأمين العام</h3>
                <p className="text-gray-600 font-bold text-lg">
                    الدكتور/
                    <br />
                   محمد حامد الفيومي
                </p>
            </motion.div>

            {/* Card 3: Vision */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-md border-t-4 border-brand-blue text-center group hover:-translate-y-2 transition-transform duration-300"
              custom={2}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            >
                <motion.div
                  className="w-16 h-16 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                >
                    <Eye size={32} />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">الرؤية</h3>
                <p className="text-gray-600 leading-relaxed">
                    المساهمة الفاعلة في القضاء على مشاكل:
                    <br />
                    <span className="font-bold text-gray-800">الجهل والفقر والمرض</span>
                </p>
            </motion.div>

            {/* Card 4: Mission */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-md border-t-4 border-brand-gold text-center group hover:-translate-y-2 transition-transform duration-300"
              custom={3}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            >
                <motion.div
                  className="w-16 h-16 bg-amber-50 text-brand-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-gold group-hover:text-white transition-colors"
                  whileHover={{ scale: 1.15, rotate: 10 }}
                >
                    <Target size={32} />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">الرسالة</h3>
                <p className="text-gray-600 text-lg font-bold">
                    إحياء السنة وتماتة البدعة
                </p>
            </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;