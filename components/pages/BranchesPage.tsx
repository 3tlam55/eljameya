import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, Navigation } from 'lucide-react';

interface Branch {
    id: number;
    name: string;
    address: string;
    phone: string;
    workingHours: string;
    email: string;
    governorate: string;
}

const BranchesPage: React.FC = () => {
    const branches: Branch[] = [
        {
            id: 1,
            name: 'المقر الرئيسي',
            address: '25 شارع الجلاء، وسط البلد، القاهرة',
            phone: '02-25749876',
            workingHours: 'السبت - الخميس: 9 صباحاً - 5 مساءً',
            email: 'main@sharia.org.eg',
            governorate: 'القاهرة',
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
                        <MapPin className="text-brand-blue" size={64} />
                    </div>
                    <h1 className="text-5xl font-bold text-brand-blue mb-4">فروعنا</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        نحن موجودون في جميع أنحاء مصر لخدمتك
                    </p>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mt-4 rounded-full" />
                </motion.div>

                {/* Map Placeholder */}
                <motion.div
                    className="max-w-6xl mx-auto mb-16 bg-white rounded-2xl shadow-xl overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="bg-gradient-to-br from-brand-blue to-green-900 h-96 flex items-center justify-center text-white">
                        <div className="text-center">
                            <Navigation size={64} className="mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-2">خريطة الفروع التفاعلية</h3>
                            <p className="text-blue-100">اختر أقرب فرع إليك على الخريطة</p>
                        </div>
                    </div>
                </motion.div>

                {/* Branches Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {branches.map((branch, index) => (
                        <motion.div
                            key={branch.id}
                            className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-br from-brand-blue to-green-900 text-white p-4 rounded-xl mb-4">
                                <h3 className="text-xl font-bold mb-1">{branch.name}</h3>
                                <p className="text-blue-100 text-sm">{branch.governorate}</p>
                            </div>

                            {/* Details */}
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <MapPin className="text-brand-blue shrink-0 mt-1" size={20} />
                                    <p className="text-gray-700 text-sm">{branch.address}</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Phone className="text-brand-gold shrink-0" size={20} />
                                    <a href={`tel:${branch.phone}`} className="text-gray-700 text-sm hover:text-brand-blue">
                                        {branch.phone}
                                    </a>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Clock className="text-green-600 shrink-0 mt-1" size={20} />
                                    <p className="text-gray-700 text-sm">{branch.workingHours}</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Mail className="text-brand-red shrink-0" size={20} />
                                    <a href={`mailto:${branch.email}`} className="text-gray-700 text-sm hover:text-brand-blue">
                                        {branch.email}
                                    </a>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-6 grid grid-cols-2 gap-3">
                                <motion.button
                                    className="bg-brand-blue text-white py-2 rounded-lg font-bold hover:bg-green-900 transition-colors text-sm"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    اتصل الآن
                                </motion.button>
                                <motion.button
                                    className="bg-brand-gold text-white py-2 rounded-lg font-bold hover:bg-amber-700 transition-colors text-sm"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    الموقع
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats */}
                <motion.div
                    className="mt-20 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <MapPin className="text-brand-blue mx-auto mb-3" size={40} />
                        <h3 className="text-3xl font-bold text-brand-blue mb-2">500+</h3>
                        <p className="text-gray-600">فرع ومؤسسة</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <Navigation className="text-brand-gold mx-auto mb-3" size={40} />
                        <h3 className="text-3xl font-bold text-brand-gold mb-2">27</h3>
                        <p className="text-gray-600">محافظة</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <Phone className="text-green-600 mx-auto mb-3" size={40} />
                        <h3 className="text-3xl font-bold text-green-600 mb-2">24/7</h3>
                        <p className="text-gray-600">خدمة عملاء</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BranchesPage;
