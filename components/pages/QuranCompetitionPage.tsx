import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Trophy, Calendar, Users, Search, Award, Star } from 'lucide-react';

// Import sponsor logos
import sponsor1 from '../assets/1.png';
import sponsor2 from '../assets/2.png';
import sponsor3 from '../assets/3.png';
import sponsor4 from '../assets/4.png';
import sponsor5 from '../assets/5.png';

const sponsors = [
    { id: 1, image: sponsor1, name: 'الراعي الأول' },
    { id: 2, image: sponsor2, name: 'الراعي الثاني' },
    { id: 3, image: sponsor3, name: 'الراعي الثالث' },
    { id: 4, image: sponsor4, name: 'الراعي الرابع' },
    { id: 5, image: sponsor5, name: 'الراعي الخامس' },
];

const QuranCompetitionPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <motion.div
                        className="flex justify-center mb-6"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <BookOpen className="text-brand-blue" size={80} />
                    </motion.div>
                    <h1 className="text-5xl font-bold text-brand-blue mb-4">مسابقة القرآن الكريم</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        مسابقة سنوية لحفظ وتجويد القرآن الكريم - نحو جيل قرآني متميز
                    </p>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mt-4 rounded-full" />
                </motion.div>

                {/* Hero Banner */}
                <motion.div
                    className="max-w-5xl mx-auto bg-gradient-to-br from-brand-blue to-green-900 text-white rounded-2xl p-12 mb-16 shadow-2xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="text-center">
                        <motion.div
                            className="inline-block bg-brand-gold px-6 py-2 rounded-full text-sm font-bold mb-4"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            التسجيل مفتوح الآن
                        </motion.div>
                        <h2 className="text-4xl font-bold mb-4">الدورة الخامسة عشرة - 2026</h2>
                        <p className="text-blue-100 text-lg mb-6">
                            انضم إلى آلاف المتسابقين في رحلة روحانية مع كتاب الله
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 mt-8">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                <Calendar className="mx-auto mb-2" size={32} />
                                <p className="font-bold">تاريخ البدء</p>
                                <p className="text-blue-100">1 مارس 2026</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                <Users className="mx-auto mb-2" size={32} />
                                <p className="font-bold">المشاركون</p>
                                <p className="text-blue-100">أكثر من 5000 متسابق</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                <Trophy className="mx-auto mb-2" size={32} />
                                <p className="font-bold">الجوائز</p>
                                <p className="text-blue-100">500,000 جنيه</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Competition Details */}
                <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
                    <motion.div
                        className="bg-white rounded-2xl shadow-xl p-8"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
                                <BookOpen className="text-white" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-blue">فئات المسابقة</h3>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Star className="text-brand-gold shrink-0 mt-1" size={20} />
                                <div>
                                    <p className="font-bold text-gray-900">حفظ القرآن الكريم كاملاً</p>
                                    <p className="text-gray-600 text-sm">30 جزء - الجائزة: 100,000 جنيه</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Star className="text-brand-gold shrink-0 mt-1" size={20} />
                                <div>
                                    <p className="font-bold text-gray-900">حفظ 20 جزء</p>
                                    <p className="text-gray-600 text-sm">الجائزة: 50,000 جنيه</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Star className="text-brand-gold shrink-0 mt-1" size={20} />
                                <div>
                                    <p className="font-bold text-gray-900">حفظ 10 أجزاء</p>
                                    <p className="text-gray-600 text-sm">الجائزة: 30,000 جنيه</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Star className="text-brand-gold shrink-0 mt-1" size={20} />
                                <div>
                                    <p className="font-bold text-gray-900">حفظ 5 أجزاء</p>
                                    <p className="text-gray-600 text-sm">الجائزة: 20,000 جنيه</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-2xl shadow-xl p-8"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                                <Award className="text-white" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-blue">شروط المشاركة</h3>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                                <p className="text-gray-700">العمر من 7 إلى 70 سنة</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                                <p className="text-gray-700">التسجيل عبر الموقع الإلكتروني</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                                <p className="text-gray-700">اجتياز الاختبار التمهيدي</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                                <p className="text-gray-700">الالتزام بأحكام التجويد</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                                <p className="text-gray-700">حضور جميع مراحل التصفيات</p>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Sponsors Section */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-brand-blue text-center mb-8">
                        رعاة المسابقة
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                        {sponsors.map((sponsor, index) => (
                            <motion.div
                                key={sponsor.id}
                                className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center hover:shadow-2xl transition-all"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.05 }}
                            >
                                <img
                                    src={sponsor.image}
                                    alt={sponsor.name}
                                    className="max-w-full max-h-24 object-contain"
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    className="text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                >
                    <div className="bg-gradient-to-r from-brand-blue to-green-900 text-white rounded-2xl p-12 shadow-2xl">
                        <h3 className="text-3xl font-bold mb-4">ابحث عن نتيجتك</h3>
                        <p className="text-blue-100 mb-8 text-lg">
                            تم الإعلان عن نتائج المرحلة الأولى - ابحث عن نتيجتك الآن
                        </p>
                        <motion.button
                            onClick={() => navigate('/competition-results')}
                            className="bg-brand-gold hover:bg-amber-600 text-white px-12 py-4 rounded-full font-bold text-xl transition-all shadow-xl flex items-center justify-center gap-3 mx-auto relative overflow-hidden group"
                            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(217, 119, 6, 0.4)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: '100%' }}
                                transition={{ duration: 0.6 }}
                            />
                            <Search size={24} />
                            <span className="relative z-10">البحث عن النتائج</span>
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default QuranCompetitionPage;
