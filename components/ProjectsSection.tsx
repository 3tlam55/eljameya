import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectsSection: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('الكل');

  // Extract unique categories from projects
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(PROJECTS.map(p => p.category)));
    return ['الكل', ...uniqueCategories];
  }, []);

  // Filter projects based on selection
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'الكل') return PROJECTS;
    return PROJECTS.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-brand-blue mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            من مشاريع الجمعية الشرعية
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            نسعى لتقديم خدمات شاملة تغطي كافة جوانب الحياة للمحتاجين
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all border ${activeCategory === cat
                ? 'bg-brand-blue text-white border-brand-blue shadow-lg'
                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-brand-blue/50'
                }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.05 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid with AnimatePresence for smooth transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((item, index) => (
              <motion.div
                key={item.id}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => navigate(`/project/${item.id}`)}
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Category Badge */}
                  <span className="absolute top-4 right-4 text-xs font-bold bg-white/95 text-brand-blue px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm z-10">
                    {item.category}
                  </span>

                  {/* Hover Overlay with Content */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/95 to-brand-blue/80 flex flex-col items-center justify-center p-6 text-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.h3
                      className="text-2xl font-bold text-white mb-3"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      {item.title}
                    </motion.h3>

                    <motion.p
                      className="text-white/90 text-sm leading-relaxed mb-4"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                    >
                      <strong>{item.excerpt}</strong>
                    </motion.p>

                    <motion.div
                      className="w-16 h-1 bg-brand-gold rounded-full"
                      initial={{ width: 0, opacity: 0 }}
                      whileHover={{ width: 64, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12 text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            لا توجد مشاريع متاحة في هذا التصنيف حالياً.
          </motion.div>
        )}

        {/* More Projects List */}
        <motion.div
          className="mt-16 bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="text-xl font-bold text-brand-blue mb-6 border-b pb-4">مشاريع وخدمات أخرى</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700 font-medium">
            {[
              "غسل وتكفين الموتى", "خدمات جائحة كورونا", "الوجبات المطهوة والجافة",
              "إعادة تدوير المعادن", "المشاريع الصغيرة", "المساهمة في الإيجارات",
              "سداد دين الغارمين", "تركيب الأبواب والشبابيك",
              "الأبحاث الأكاديمية", "توصيل المياه والكهرباء", "الدورات التدريبية المهنية"
            ].map((p, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 hover:text-brand-blue cursor-default transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-2 h-2 bg-brand-gold rounded-full shrink-0"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                />
                {p}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.button
            onClick={() => navigate('/project/1')}
            className="bg-brand-blue hover:bg-green-900 text-white px-8 py-3 rounded-lg font-bold transition-colors inline-flex items-center gap-2 shadow-lg relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2, boxShadow: '0 20px 40px rgba(0, 82, 73, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">تفاصيل أكثر عن المشاريع</span>
            <motion.div
              animate={{ x: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowLeft size={20} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;