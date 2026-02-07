import React from 'react';
import { motion } from 'framer-motion';
import {
    Heart, Stethoscope, GraduationCap, Home,
    Utensils, Droplets, Users, Baby, Wrench, Recycle
} from 'lucide-react';

interface Service {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    bgColor: string;
}

const ServicesPage: React.FC = () => {
    const services: Service[] = [
        {
            id: 1,
            title: 'الخدمات الطبية',
            description: 'مجمع الإصلاح الطبي يقدم خدمات طبية متكاملة بأسعار رمزية أو مجانية للمحتاجين',
            icon: <Stethoscope size={40} />,
            color: 'text-blue-600',
            bgColor: 'bg-blue-600',
        },
        {
            id: 2,
            title: 'كفالة الأيتام',
            description: 'برنامج رفيق النبي ﷺ لكفالة الأيتام ماديًا وتعليميًا وتربويًا',
            icon: <Heart size={40} />,
            color: 'text-brand-red',
            bgColor: 'bg-brand-red',
        },
        {
            id: 3,
            title: 'التعليم والتحفيظ',
            description: 'دور تحفيظ القرآن الكريم والمدارس والمعاهد الشرعية',
            icon: <GraduationCap size={40} />,
            color: 'text-brand-blue',
            bgColor: 'bg-brand-blue',
        },
        {
            id: 4,
            title: 'الإطعام والتغذية',
            description: 'توفير وجبات يومية وشنط غذائية شهرية لآلاف الأسر المحتاجة',
            icon: <Utensils size={40} />,
            color: 'text-brand-gold',
            bgColor: 'bg-brand-gold',
        },
        {
            id: 5,
            title: 'الإسكان والترميم',
            description: 'بناء وترميم المنازل المتهالكة وتوفير سكن آدمي للأسر الفقيرة',
            icon: <Home size={40} />,
            color: 'text-green-600',
            bgColor: 'bg-green-600',
        },
        {
            id: 6,
            title: 'بنك الدم',
            description: 'قاعدة بيانات للمتبرعين بالدم لإنقاذ الحالات الحرجة والعمليات العاجلة',
            icon: <Droplets size={40} />,
            color: 'text-red-600',
            bgColor: 'bg-red-600',
        },
        {
            id: 7,
            title: 'تيسير الزواج',
            description: 'دعم الشباب المقبلين على الزواج بالأجهزة والمستلزمات الضرورية',
            icon: <Users size={40} />,
            color: 'text-pink-600',
            bgColor: 'bg-pink-600',
        },
        {
            id: 8,
            title: 'رعاية الطفولة',
            description: 'حضانات ودور رعاية للأطفال في بيئة آمنة وتربية إسلامية صحيحة',
            icon: <Baby size={40} />,
            color: 'text-purple-600',
            bgColor: 'bg-purple-600',
        },
        {
            id: 9,
            title: 'الأطراف الصناعية',
            description: 'توفير الأطراف الصناعية والأجهزة التعويضية لذوي الهمم',
            icon: <Wrench size={40} />,
            color: 'text-gray-600',
            bgColor: 'bg-gray-600',
        },
        {
            id: 10,
            title: 'إعادة التدوير',
            description: 'استقبال الملابس القديمة والخردة وإعادة تدويرها لصالح المشاريع الخيرية',
            icon: <Recycle size={40} />,
            color: 'text-teal-600',
            bgColor: 'bg-teal-600',
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
                        <Heart className="text-brand-blue" size={64} />
                    </div>
                    <h1 className="text-5xl font-bold text-brand-blue mb-4">خدماتنا</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        نقدم مجموعة شاملة من الخدمات الإنسانية والتنموية لخدمة المجتمع
                    </p>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mt-4 rounded-full" />
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className={`${service.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}>
                                {service.icon}
                            </div>
                            <h3 className={`text-2xl font-bold mb-4 ${service.color}`}>
                                {service.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <motion.button
                                className={`${service.bgColor} text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity w-full`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                اعرف المزيد
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    className="mt-20 bg-gradient-to-r from-brand-blue to-green-900 text-white rounded-2xl p-12 text-center max-w-4xl mx-auto"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <h2 className="text-3xl font-bold mb-4">هل تحتاج لأي من خدماتنا؟</h2>
                    <p className="text-blue-100 text-lg mb-8">
                        تواصل معنا الآن وسنكون سعداء بخدمتك
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <motion.button
                            className="bg-white text-brand-blue px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            تواصل معنا
                        </motion.button>
                        <motion.button
                            className="bg-brand-gold text-white px-8 py-4 rounded-lg font-bold hover:bg-amber-700 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            تبرع الآن
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ServicesPage;
