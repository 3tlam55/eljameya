import React, { useState, useMemo } from 'react';
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
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
             من مشاريع الجمعية الشرعية
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
             نسعى لتقديم خدمات شاملة تغطي كافة جوانب الحياة للمحتاجين
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all border ${
                activeCategory === cat
                  ? 'bg-brand-blue text-white border-brand-blue shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-brand-blue/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          {filteredProjects.map((item) => (
            <div key={item.id} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button 
                      onClick={() => navigate(`/project/${item.id}`)}
                      className="bg-white text-brand-blue px-4 py-2 rounded-full font-bold text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform hover:bg-gray-100"
                    >
                        التفاصيل
                    </button>
                </div>
                <span className="absolute top-3 right-3 text-xs font-bold bg-white/90 text-brand-blue px-2 py-1 rounded shadow-sm backdrop-blur-sm">
                    {item.category}
                </span>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-brand-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-2 mb-3 px-2">
                    {item.excerpt}
                </p>
                <div className="w-12 h-1 bg-brand-gold mx-auto rounded-full group-hover:w-24 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
            <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                لا توجد مشاريع متاحة في هذا التصنيف حالياً.
            </div>
        )}
        
        {/* More Projects List (Text Only for density) */}
        <div className="mt-16 bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-brand-blue mb-6 border-b pb-4">مشاريع وخدمات أخرى</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700 font-medium">
                {[
                    "غسل وتكفين الموتى", "خدمات جائحة كورونا", "الوجبات المطهوة والجافة", 
                    "إعادة تدوير المعادن", "المشاريع الصغيرة", "المساهمة في الإيجارات", 
                    "سداد دين الغارمين", "تركيب الأبواب والشبابيك", 
                    "الأبحاث الأكاديمية", "توصيل المياه والكهرباء", "الدورات التدريبية المهنية"
                ].map((p, i) => (
                    <div key={i} className="flex items-center gap-2 hover:text-brand-blue cursor-default transition-colors">
                        <div className="w-2 h-2 bg-brand-gold rounded-full shrink-0"></div>
                        {p}
                    </div>
                ))}
            </div>
        </div>

        <div className="mt-10 text-center">
            <button 
              onClick={() => navigate('/project/1')}
              className="bg-brand-blue hover:bg-green-900 text-white px-8 py-3 rounded-lg font-bold transition-colors inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
                تفاصيل أكثر عن المشاريع
                <ArrowLeft size={20} />
            </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;