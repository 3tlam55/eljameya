import React from 'react';
import { IMPACT_STATS } from '../constants';
import { Truck, Pill, Heart, Droplets } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Truck: <Truck size={32} />,
  Droplets: <Droplets size={32} />,
  Pill: <Pill size={32} />,
  Heart: <Heart size={32} />,
};

const ImpactSection: React.FC = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-50 -z-10"></div>
      
      <div className="container mx-auto px-4 text-center">
        <div className="mb-12">
            <span className="text-brand-blue font-bold text-lg">مخطوطة 1</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mt-2 font-serif">
                قطرات الخير
            </h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto mt-4 rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                نتشرف بتزايد المحتاجين الذين نخدمهم يوميًّا، ونحن بحاجة لمزيد من النفقات حتى لا ينقطع عنهم المدد.. وإليكم بعض الخدمات الشهرية الثابتة:
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {IMPACT_STATS.map((stat, idx) => (
                <div key={idx} className="p-8 bg-gray-50 rounded-2xl hover:bg-brand-blue hover:text-white transition-all duration-300 group shadow-lg border border-gray-100">
                    <div className="w-16 h-16 bg-white text-brand-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform">
                        {iconMap[stat.iconName]}
                    </div>
                    <div className="text-4xl font-bold text-brand-red mb-2 group-hover:text-brand-gold">{stat.number}</div>
                    <div className="font-medium text-lg">{stat.label}</div>
                </div>
            ))}
        </div>
        
        <p className="mt-12 text-gray-500 italic">
            بالإضافة إلى وجبات مطهوة يوميّاً للمسنين، والمزيد…
        </p>
      </div>
    </section>
  );
};

export default ImpactSection;