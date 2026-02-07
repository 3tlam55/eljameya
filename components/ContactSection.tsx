import React from 'react';
import { Send, Heart } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-red font-bold uppercase tracking-wider">تواصل معنا</span>
          <h2 className="text-4xl font-bold text-brand-blue mt-2">نسعد باستقبال تبرعاتكم واستفساراتكم</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            فريق العمل متاح للرد على أسئلتكم حول المشاريع الخيرية وكيفية وصول المساعدات لمستحقيها.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Map Placeholder */}
          <div className="w-full lg:w-1/2 min-h-[400px] bg-gray-200 relative group">
             <img 
                src="https://picsum.photos/800/800?random=110" 
                alt="Charity Location" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
             />
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-lg shadow-lg">
                     <p className="font-bold text-brand-blue flex items-center gap-2">
                        المقر الرئيسي للجمعية
                     </p>
                 </div>
             </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-1/2 p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-sm">الاسم</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" placeholder="الاسم الكريم" />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-sm">رقم الهاتف</label>
                  <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" placeholder="01xxxxxxxxx" />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-bold mb-2 text-sm">نوع الاستفسار</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all">
                    <option>الاستفسار عن كفالة يتيم</option>
                    <option>التبرع لصدقة جارية</option>
                    <option>طلب مساعدة</option>
                    <option>تطوع</option>
                    <option>آخر</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2 text-sm">الرسالة</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" placeholder="تفاصيل الرسالة..."></textarea>
              </div>

              <button type="button" className="w-full bg-brand-blue hover:bg-green-900 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg">
                <Send size={20} />
                إرسال
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;