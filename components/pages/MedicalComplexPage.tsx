import React from 'react';
import { motion } from 'framer-motion';
import {
    Stethoscope, Calendar, Users, Award,
    Clock, MapPin, Phone, Mail, Heart
} from 'lucide-react';

const MedicalComplexPage: React.FC = () => {
    const departments = [
        { name: 'الباطنة', icon: <Stethoscope size={32} />, color: 'bg-blue-600' },
        { name: 'الجراحة', icon: <Heart size={32} />, color: 'bg-red-600' },
        { name: 'الأطفال', icon: <Users size={32} />, color: 'bg-pink-600' },
        { name: 'النساء والتوليد', icon: <Heart size={32} />, color: 'bg-purple-600' },
        { name: 'العيون', icon: <Stethoscope size={32} />, color: 'bg-teal-600' },
        { name: 'الأسنان', icon: <Stethoscope size={32} />, color: 'bg-green-600' },
        { name: 'العظام', icon: <Stethoscope size={32} />, color: 'bg-gray-600' },
        { name: 'القلب', icon: <Heart size={32} />, color: 'bg-brand-red' },
    ];

    const doctors = [
        {
            name: 'د. محمد أحمد',
            specialty: 'استشاري الباطنة',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=doc1',
        },
        {
            name: 'د. فاطمة علي',
            specialty: 'استشارية النساء والتوليد',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=doc2',
        },
        {
            name: 'د. أحمد حسن',
            specialty: 'استشاري الجراحة',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=doc3',
        },
        {
            name: 'د. نور السيد',
            specialty: 'استشارية الأطفال',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=doc4',
        },
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
                        <Stethoscope className="text-brand-blue" size={64} />
                    </div>
                    <h1 className="text-5xl font-bold text-brand-blue mb-4">مجمع الإصلاح الطبي</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        خدمات طبية متكاملة بأسعار رمزية أو مجانية للمحتاجين
                    </p>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mt-4 rounded-full" />
                </motion.div>

                {/* Hero Section */}
                <motion.div
                    className="max-w-5xl mx-auto bg-gradient-to-br from-brand-blue to-green-900 text-white rounded-2xl p-12 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">صرح طبي متكامل</h2>
                            <p className="text-blue-100 leading-relaxed mb-6">
                                مجمع الإصلاح الطبي يقدم خدمات طبية على أعلى مستوى من الجودة والاحترافية،
                                مع مراعاة الظروف المادية للمرضى من خلال أسعار رمزية أو علاج مجاني للحالات المستحقة.
                            </p>
                            <div className="flex gap-4">
                                <motion.button
                                    className="bg-white text-brand-blue px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    احجز موعد
                                </motion.button>
                                <motion.button
                                    className="bg-brand-gold text-white px-6 py-3 rounded-lg font-bold hover:bg-amber-700 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    اتصل بنا
                                </motion.button>
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                            <h3 className="text-xl font-bold mb-4">معلومات التواصل</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Phone size={20} />
                                    <span>02-25749876</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail size={20} />
                                    <span>medical@sharia.org.eg</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin size={20} />
                                    <span>25 شارع الجلاء، القاهرة</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock size={20} />
                                    <span>يومياً: 8 صباحاً - 10 مساءً</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Departments */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-brand-blue mb-8 text-center">الأقسام الطبية</h2>
                    <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {departments.map((dept, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className={`${dept.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                                    {dept.icon}
                                </div>
                                <h3 className="font-bold text-gray-900">{dept.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Doctors */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-brand-blue mb-8 text-center">نخبة من الأطباء</h2>
                    <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {doctors.map((doctor, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-brand-gold"
                                />
                                <h3 className="font-bold text-gray-900 mb-1">{doctor.name}</h3>
                                <p className="text-brand-blue text-sm font-semibold">{doctor.specialty}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Services */}
                <motion.div
                    className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-brand-blue mb-6">خدماتنا الطبية</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                                <span className="text-gray-700">كشف طبي شامل</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                                <span className="text-gray-700">تحاليل طبية معملية</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                                <span className="text-gray-700">أشعة تشخيصية</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                                <span className="text-gray-700">عمليات جراحية</span>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                                <span className="text-gray-700">صيدلية متكاملة</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                                <span className="text-gray-700">رعاية طبية منزلية</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                                <span className="text-gray-700">علاج طبيعي</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                                <span className="text-gray-700">طوارئ 24/7</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <Users className="text-brand-blue mx-auto mb-3" size={40} />
                        <h3 className="text-3xl font-bold text-brand-blue mb-2">10K+</h3>
                        <p className="text-gray-600">مريض شهرياً</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <Stethoscope className="text-brand-gold mx-auto mb-3" size={40} />
                        <h3 className="text-3xl font-bold text-brand-gold mb-2">50+</h3>
                        <p className="text-gray-600">طبيب متخصص</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <Award className="text-green-600 mx-auto mb-3" size={40} />
                        <h3 className="text-3xl font-bold text-green-600 mb-2">20+</h3>
                        <p className="text-gray-600">سنة خبرة</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <Calendar className="text-brand-red mx-auto mb-3" size={40} />
                        <h3 className="text-3xl font-bold text-brand-red mb-2">24/7</h3>
                        <p className="text-gray-600">خدمة مستمرة</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default MedicalComplexPage;
