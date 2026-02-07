import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, MapPin, Phone, Mail, ArrowUp, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 relative">
      {/* Top Button */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button 
            onClick={scrollToTop}
            className="bg-brand-red text-white p-3 rounded-full shadow-xl hover:bg-amber-700 transition-colors"
        >
            <ArrowUp size={24} />
        </button>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 border-r-4 border-brand-red pr-3">الجمعية الشرعية</h3>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
              لتعاون العاملين بالكتاب والسنة. تسعى إلى نفع الفرد والأسرة والمجتمع والقضاء على الفقر والجهل والمرض.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded hover:bg-brand-blue transition-colors"><Facebook size={20} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded hover:bg-brand-blue transition-colors"><Twitter size={20} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded hover:bg-red-600 transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-brand-gold transition-colors block border-b border-gray-800 pb-2 flex justify-between">حاسبة الزكاة <ExternalLink size={14}/></a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors block border-b border-gray-800 pb-2">التوظيف</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors block border-b border-gray-800 pb-2">مشروع كفالة اليتيم</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors block border-b border-gray-800 pb-2">المراكز الطبية</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors block border-b border-gray-800 pb-2">بنك الدم</a></li>
            </ul>
          </div>

          {/* Column 3: Projects */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">من مشاريعنا</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-brand-gold transition-colors block border-b border-gray-800 pb-2">معرض السلع الغذائية</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors block border-b border-gray-800 pb-2">مشروع رفيق النبي ﷺ</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors block border-b border-gray-800 pb-2">تيسير زواج الفتيات</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors block border-b border-gray-800 pb-2">إعادة تدوير (خردة/ملابس)</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-red shrink-0 mt-1" size={20} />
                <span>المقر الرئيسي: مصر.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-red shrink-0" size={20} />
                <span dir="ltr">19xxx (الخط الساخن)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-red shrink-0" size={20} />
                <span>contact@aljameya-alshareya.com</span>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-brand-blue/20 rounded-lg border border-brand-blue/30 text-center">
                <h4 className="text-white font-bold mb-1">رسالتنا</h4>
                <p className="text-brand-lightBlue text-sm">رحمة الناس ونفعهم</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} الجمعية الشرعية للعاملين بالكتاب والسنة. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;