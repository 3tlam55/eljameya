import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Heart, Clock, TrendingUp } from 'lucide-react';

interface UrgentCase {
    id: number;
    name: string;
    age: number;
    condition: string;
    description: string;
    required: number;
    collected: number;
    daysLeft: number;
    image: string;
}

const urgentCases: UrgentCase[] = [
    {
        id: 1,
        name: 'الطفلة نور',
        age: 7,
        condition: 'عملية قلب مفتوح',
        description: 'طفلة تحتاج لعملية قلب مفتوح عاجلة لإنقاذ حياتها. الأسرة غير قادرة على تحمل التكاليف.',
        required: 150000,
        collected: 95000,
        daysLeft: 5,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=noor',
    },
    {
        id: 2,
        name: 'الحاج محمود',
        age: 65,
        condition: 'غسيل كلوي',
        description: 'مريض يحتاج لجلسات غسيل كلوي دورية. لا يوجد دخل ثابت للأسرة.',
        required: 30000,
        collected: 18000,
        daysLeft: 10,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mahmoud',
    },
    {
        id: 3,
        name: 'الشاب أحمد',
        age: 25,
        condition: 'حادث سيارة',
        description: 'شاب تعرض لحادث سيارة ويحتاج لعمليات جراحية متعددة وعلاج طبيعي.',
        required: 80000,
        collected: 25000,
        daysLeft: 7,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ahmed',
    },
    {
        id: 4,
        name: 'أم عبدالله',
        age: 45,
        condition: 'علاج أورام',
        description: 'سيدة تحتاج لعلاج كيماوي وإشعاعي. الأسرة فقيرة ولا تستطيع تحمل التكاليف.',
        required: 120000,
        collected: 45000,
        daysLeft: 12,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=omabdullah',
    },
    {
        id: 5,
        name: 'الطفل يوسف',
        age: 3,
        condition: 'عملية عمود فقري',
        description: 'طفل يعاني من تشوه في العمود الفقري ويحتاج لعملية جراحية عاجلة.',
        required: 200000,
        collected: 75000,
        daysLeft: 15,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=youssef',
    },
    {
        id: 6,
        name: 'السيدة فاطمة',
        age: 38,
        condition: 'زراعة كلى',
        description: 'سيدة تحتاج لعملية زراعة كلى بشكل عاجل. الوضع المادي للأسرة صعب جداً.',
        required: 250000,
        collected: 110000,
        daysLeft: 20,
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=fatma',
    },
];

const UrgentNeedsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="flex justify-center mb-4">
                        <AlertCircle className="text-brand-red" size={64} />
                    </div>
                    <h1 className="text-5xl font-bold text-brand-blue mb-4">احتياجات عاجلة</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        حالات إنسانية تحتاج لمساعدتك العاجلة - كن سبباً في إنقاذ حياة
                    </p>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mt-4 rounded-full" />
                </motion.div>

                {/* Urgent Banner */}
                <motion.div
                    className="bg-gradient-to-r from-brand-red to-red-700 text-white p-6 rounded-xl shadow-lg mb-12 max-w-4xl mx-auto"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <div className="flex items-center justify-center gap-4">
                        <AlertCircle size={32} />
                        <div className="text-center">
                            <h3 className="text-2xl font-bold">⏰ حالات تحتاج لتدخل فوري</h3>
                            <p className="text-red-100 mt-2">كل دقيقة تحسب في إنقاذ هذه الأرواح</p>
                        </div>
                    </div>
                </motion.div>

                {/* Cases Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {urgentCases.map((case_, index) => {
                        const progress = (case_.collected / case_.required) * 100;

                        return (
                            <motion.div
                                key={case_.id}
                                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {/* Image */}
                                <div className="relative h-48 bg-gradient-to-br from-brand-blue to-brand-gold p-8">
                                    <img
                                        src={case_.image}
                                        alt={case_.name}
                                        className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg"
                                    />
                                    <div className="absolute top-4 right-4 bg-brand-red text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                                        <Clock size={14} />
                                        {case_.daysLeft} يوم
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{case_.name}</h3>
                                    <p className="text-brand-blue font-semibold mb-1">{case_.age} سنة</p>
                                    <p className="text-brand-red font-bold mb-3">{case_.condition}</p>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{case_.description}</p>

                                    {/* Progress Bar */}
                                    <div className="mb-4">
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-gray-600">تم جمع</span>
                                            <span className="font-bold text-brand-blue">
                                                {progress.toFixed(0)}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                            <motion.div
                                                className="bg-gradient-to-r from-brand-gold to-brand-blue h-full rounded-full"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${progress}%` }}
                                                transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                                            />
                                        </div>
                                        <div className="flex justify-between text-sm mt-2">
                                            <span className="text-gray-600">
                                                {case_.collected.toLocaleString('ar-EG')} جنيه
                                            </span>
                                            <span className="font-bold text-gray-900">
                                                {case_.required.toLocaleString('ar-EG')} جنيه
                                            </span>
                                        </div>
                                    </div>

                                    {/* Donate Button */}
                                    <motion.button
                                        className="w-full bg-brand-red text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Heart size={18} fill="currentColor" />
                                        ساهم في العلاج
                                    </motion.button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Stats Section */}
                <motion.div
                    className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <TrendingUp className="text-brand-blue mx-auto mb-3" size={40} />
                        <h3 className="text-3xl font-bold text-brand-blue mb-2">156</h3>
                        <p className="text-gray-600">حالة تم إنقاذها هذا الشهر</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <Heart className="text-brand-red mx-auto mb-3" size={40} />
                        <h3 className="text-3xl font-bold text-brand-red mb-2">2.5M</h3>
                        <p className="text-gray-600">جنيه تم جمعها</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <AlertCircle className="text-brand-gold mx-auto mb-3" size={40} />
                        <h3 className="text-3xl font-bold text-brand-gold mb-2">23</h3>
                        <p className="text-gray-600">حالة عاجلة حالياً</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default UrgentNeedsPage;
