import React from 'react';
import { Heart, ChevronLeft } from 'lucide-react';
import { LATEST_NEWS } from '../constants';

const NewsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12 border-b-2 border-gray-200 pb-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-2 relative inline-block">
              مشاريعنا الخيرية
              <span className="absolute bottom-[-18px] right-0 w-1/2 h-1 bg-brand-red rounded-full"></span>
            </h2>
            <p className="text-gray-600 mt-2">ساهم معنا في أبواب الخير المختلفة</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-1 text-brand-red font-bold hover:text-brand-blue transition-colors">
            عرض كل المشاريع <ChevronLeft size={20} />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {LATEST_NEWS.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col h-full">
              <div className="relative h-48 overflow-hidden shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-4 right-4 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  {item.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-800 mb-3 leading-snug group-hover:text-brand-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {item.excerpt}
                </p>
                <button className="w-full bg-brand-red text-white py-2 rounded-lg font-bold hover:bg-amber-700 transition-colors flex items-center justify-center gap-2 mt-auto">
                   <Heart size={16} fill="currentColor" />
                   تبرع لهذا المشروع
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <button className="bg-white border border-brand-blue text-brand-blue px-6 py-3 rounded-lg font-bold w-full">
                عرض كل المشاريع
            </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;