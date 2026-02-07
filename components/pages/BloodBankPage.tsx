import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Droplets, Heart, Users, TrendingUp, Phone, AlertCircle } from 'lucide-react';

const BloodBankPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        bloodType: '',
        governorate: '',
    });

    const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

    const urgentRequests = [
        { bloodType: 'O+', units: 50, hospital: 'مجمع الإصلاح الطبي', urgency: 'عاجل جداً' },
        { bloodType: 'AB-', units: 10, hospital: 'مستشفى الجمعية - الإسكندرية', urgency: 'عاجل' },
        { bloodType: 'B+', units: 30, hospital: 'مستشفى الجمعية - المنصورة', urgency: 'مطلوب' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="flex justify-center mb-4">
                        <Droplets className="text-brand-red" size={64} />
                    </div>
                    <h1 className="text-5xl font-bold text-brand-blue mb-4">بنك الدم</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        تبرعك بالدم قد ينقذ حياة إنسان - كن بطلاً اليوم
                    </p>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mt-4 rounded-full" />
                </motion.div>

                {/* Urgent Requests Banner */}
                <motion.div
                    className="max-w-5xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="bg-gradient-to-r from-brand-red to-red-700 text-white p-6 rounded-2xl shadow-xl">
                        <div className="flex items-center gap-3 mb-4">
                            <AlertCircle size={32} />
                            <h2 className="text-2xl font-bold">طلبات دم عاجلة</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                            {urgentRequests.map((request, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-3xl font-bold">{request.bloodType}</span>
                                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{request.urgency}</span>
                                    </div>
                                    <p className="text-red-100 text-sm mb-1">{request.hospital}</p>
                                    <p className="text-white font-bold">{request.units} كيس مطلوب</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Registration Form */}
                    <motion.div
                        className="bg-white rounded-2xl shadow-xl p-8"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h2 className="text-3xl font-bold text-brand-blue mb-6 flex items-center gap-3">
                            <Heart className="text-brand-red" size={32} />
                            سجل كمتبرع
                        </h2>

                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-700 font-bold mb-2">الاسم الكامل</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-blue outline-none transition-colors"
                                    placeholder="أدخل اسمك الكامل"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-bold mb-2">رقم الهاتف</label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-blue outline-none transition-colors"
                                    placeholder="01xxxxxxxxx"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-bold mb-2">فصيلة الدم</label>
                                <select
                                    value={formData.bloodType}
                                    onChange={(e) => setFormData({ ...formData, bloodType: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-blue outline-none transition-colors"
                                >
                                    <option value="">اختر فصيلة الدم</option>
                                    {bloodTypes.map((type) => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-gray-700 font-bold mb-2">المحافظة</label>
                                <input
                                    type="text"
                                    value={formData.governorate}
                                    onChange={(e) => setFormData({ ...formData, governorate: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-blue outline-none transition-colors"
                                    placeholder="أدخل محافظتك"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="w-full bg-brand-red text-white py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors shadow-lg flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Droplets size={20} />
                                سجل الآن
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Info Section */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        {/* Benefits */}
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h3 className="text-2xl font-bold text-brand-blue mb-6">فوائد التبرع بالدم</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <Heart className="text-brand-red shrink-0 mt-1" size={20} />
                                    <span className="text-gray-700">إنقاذ حياة إنسان - تبرع واحد قد ينقذ 3 أرواح</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Heart className="text-brand-red shrink-0 mt-1" size={20} />
                                    <span className="text-gray-700">تحسين صحة القلب والأوعية الدموية</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Heart className="text-brand-red shrink-0 mt-1" size={20} />
                                    <span className="text-gray-700">تجديد خلايا الدم وتنشيط الجسم</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Heart className="text-brand-red shrink-0 mt-1" size={20} />
                                    <span className="text-gray-700">فحص طبي مجاني للدم</span>
                                </li>
                            </ul>
                        </div>

                        {/* Requirements */}
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h3 className="text-2xl font-bold text-brand-blue mb-6">شروط التبرع</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                                    العمر من 18 إلى 60 سنة
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                                    الوزن أكثر من 50 كجم
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                                    صحة جيدة وخالي من الأمراض المعدية
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                                    مرور 3 أشهر على آخر تبرع
                                </li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="bg-gradient-to-br from-brand-blue to-green-900 text-white rounded-2xl shadow-xl p-8">
                            <h3 className="text-2xl font-bold mb-4">تواصل معنا</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Phone size={20} />
                                    <span>الخط الساخن: 16825</span>
                                </div>
                                <p className="text-blue-100 text-sm">
                                    متاح 24/7 لاستقبال طلبات الدم العاجلة
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats */}
                <motion.div
                    className="mt-20 grid md:grid-cols-4 gap-6 max-w-5xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <Users className="text-brand-blue mx-auto mb-3" size={40} />
                        <h3 className="text-3xl font-bold text-brand-blue mb-2">50K+</h3>
                        <p className="text-gray-600">متبرع مسجل</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <Droplets className="text-brand-red mx-auto mb-3" size={40} />
                        <h3 className="text-3xl font-bold text-brand-red mb-2">120K+</h3>
                        <p className="text-gray-600">كيس دم تم توفيره</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <Heart className="text-brand-gold mx-auto mb-3" size={40} />
                        <h3 className="text-3xl font-bold text-brand-gold mb-2">300K+</h3>
                        <p className="text-gray-600">حياة تم إنقاذها</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <TrendingUp className="text-green-600 mx-auto mb-3" size={40} />
                        <h3 className="text-3xl font-bold text-green-600 mb-2">24/7</h3>
                        <p className="text-gray-600">خدمة مستمرة</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BloodBankPage;
