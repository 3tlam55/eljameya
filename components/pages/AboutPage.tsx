import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Target, Award, Heart, TrendingUp } from 'lucide-react';

const AboutPage: React.FC = () => {
    const leaders = [
        {
            name: 'الشيخ محمد الطيب',
            role: 'رئيس مجلس الإدارة',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=leader1',
        },
        {
            name: 'الدكتور أحمد السيد',
            role: 'نائب الرئيس',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=leader2',
        },
        {
            name: 'المهندس عمر حسن',
            role: 'أمين الصندوق',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=leader3',
        },
        {
            name: 'الدكتورة فاطمة علي',
            role: 'مديرة البرامج',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=leader4',
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
                        <Building2 className="text-brand-blue" size={64} />
                    </div>
                    <h1 className="text-5xl font-bold text-brand-blue mb-4">من نحن</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        الجمعية الشرعية لتعاون العاملين بالكتاب والسنة المحمدية
                    </p>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mt-4 rounded-full" />
                </motion.div>

                {/* History Section */}
                <motion.div
                    className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-3xl font-bold text-brand-blue mb-6 flex items-center gap-3">
                        <Award className="text-brand-gold" size={32} />
                        تاريخنا العريق
                    </h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p className="text-lg">
                            تأسست الجمعية الشرعية عام <span className="font-bold text-brand-blue">1912م</span> على يد الإمام المجدد
                            <span className="font-bold"> الشيخ محمود خطاب السبكي</span> رحمه الله، لتكون منارة للعمل الخيري والدعوي في مصر والعالم الإسلامي.
                        </p>
                        <p className="text-lg">
                            منذ أكثر من <span className="font-bold text-brand-blue">110 سنوات</span>، والجمعية تعمل على خدمة الإسلام والمسلمين من خلال
                            برامج متنوعة في الدعوة والتعليم والصحة والإغاثة الإنسانية.
                        </p>
                        <p className="text-lg">
                            اليوم، تمتلك الجمعية شبكة واسعة من الفروع والمؤسسات التابعة في جميع أنحاء مصر، وتخدم
                            <span className="font-bold text-brand-gold"> ملايين المستفيدين </span>
                            سنوياً في مختلف المجالات.
                        </p>
                    </div>
                </motion.div>

                {/* Mission, Vision, Values */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <motion.div
                        className="bg-white rounded-2xl shadow-xl p-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="bg-brand-blue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Target className="text-brand-blue" size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-blue mb-4">رسالتنا</h3>
                        <p className="text-gray-700 leading-relaxed">
                            نشر الدعوة الإسلامية الصحيحة وخدمة المجتمع من خلال برامج تنموية شاملة تلبي احتياجات الفقراء والمحتاجين
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-2xl shadow-xl p-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="bg-brand-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <TrendingUp className="text-brand-gold" size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-blue mb-4">رؤيتنا</h3>
                        <p className="text-gray-700 leading-relaxed">
                            أن نكون المؤسسة الخيرية الرائدة في مصر والعالم الإسلامي في تقديم الخدمات الإنسانية والتنموية المتكاملة
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-2xl shadow-xl p-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="bg-green-600/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Heart className="text-green-600" size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-blue mb-4">قيمنا</h3>
                        <p className="text-gray-700 leading-relaxed">
                            الأمانة، الشفافية، الإخلاص، الاحترافية، العدالة، والتعاون - قيم نلتزم بها في كل ما نقوم به
                        </p>
                    </motion.div>
                </div>

                {/* Leadership Team */}
                <motion.div
                    className="max-w-5xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-brand-blue mb-8 text-center flex items-center justify-center gap-3">
                        <Users className="text-brand-gold" size={32} />
                        القيادة التنفيذية
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {leaders.map((leader, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.7 + index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-brand-gold"
                                />
                                <h3 className="font-bold text-gray-900 text-lg mb-1">{leader.name}</h3>
                                <p className="text-brand-blue font-semibold text-sm">{leader.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    className="mt-16 grid md:grid-cols-4 gap-6 max-w-5xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <div className="bg-gradient-to-br from-brand-blue to-green-900 text-white p-6 rounded-xl text-center">
                        <h3 className="text-4xl font-bold mb-2">110+</h3>
                        <p className="text-blue-100">سنة من العطاء</p>
                    </div>
                    <div className="bg-gradient-to-br from-brand-gold to-amber-700 text-white p-6 rounded-xl text-center">
                        <h3 className="text-4xl font-bold mb-2">500+</h3>
                        <p className="text-amber-100">فرع ومؤسسة</p>
                    </div>
                    <div className="bg-gradient-to-br from-brand-red to-red-700 text-white p-6 rounded-xl text-center">
                        <h3 className="text-4xl font-bold mb-2">5M+</h3>
                        <p className="text-red-100">مستفيد سنوياً</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-600 to-green-800 text-white p-6 rounded-xl text-center">
                        <h3 className="text-4xl font-bold mb-2">10K+</h3>
                        <p className="text-green-100">متطوع نشط</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutPage;
