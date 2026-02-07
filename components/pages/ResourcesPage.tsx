import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Video, FileText, Download, Search } from 'lucide-react';

interface Resource {
    id: number;
    title: string;
    category: string;
    type: 'pdf' | 'video' | 'article';
    description: string;
    downloads?: number;
    views?: number;
}

const ResourcesPage: React.FC = () => {
    const resources: Resource[] = [
        {
            id: 1,
            title: 'دليل الزكاة الشامل',
            category: 'فقه',
            type: 'pdf',
            description: 'دليل شامل لأحكام الزكاة وكيفية حسابها في مختلف الأموال',
            downloads: 15420,
        },
        {
            id: 2,
            title: 'محاضرات في العقيدة',
            category: 'عقيدة',
            type: 'video',
            description: 'سلسلة محاضرات في العقيدة الإسلامية الصحيحة',
            views: 45230,
        },
        {
            id: 3,
            title: 'آداب المسلم في حياته اليومية',
            category: 'سلوك',
            type: 'article',
            description: 'مقالات عن الآداب الإسلامية في التعامل والحياة اليومية',
            views: 8900,
        },
        {
            id: 4,
            title: 'فقه الصيام',
            category: 'فقه',
            type: 'pdf',
            description: 'كتاب شامل عن أحكام الصيام وآدابه',
            downloads: 12340,
        },
        {
            id: 5,
            title: 'دروس في التجويد',
            category: 'قرآن',
            type: 'video',
            description: 'دروس تعليمية في أحكام التجويد والقراءة الصحيحة',
            views: 32100,
        },
        {
            id: 6,
            title: 'السيرة النبوية المختصرة',
            category: 'سيرة',
            type: 'pdf',
            description: 'ملخص شامل لسيرة النبي محمد صلى الله عليه وسلم',
            downloads: 23450,
        },
        {
            id: 7,
            title: 'الرقية الشرعية',
            category: 'رقية',
            type: 'article',
            description: 'دليل الرقية الشرعية من الكتاب والسنة',
            views: 18700,
        },
        {
            id: 8,
            title: 'أحكام الحج والعمرة',
            category: 'فقه',
            type: 'video',
            description: 'شرح مفصل لأحكام الحج والعمرة بالصوت والصورة',
            views: 27800,
        },
        {
            id: 9,
            title: 'الأذكار اليومية',
            category: 'أذكار',
            type: 'pdf',
            description: 'مجموعة الأذكار الصحيحة من الكتاب والسنة',
            downloads: 34200,
        },
    ];

    const getIcon = (type: string) => {
        switch (type) {
            case 'pdf':
                return <FileText className="text-brand-red" size={32} />;
            case 'video':
                return <Video className="text-brand-blue" size={32} />;
            case 'article':
                return <BookOpen className="text-brand-gold" size={32} />;
            default:
                return <FileText className="text-gray-600" size={32} />;
        }
    };

    const getTypeLabel = (type: string) => {
        switch (type) {
            case 'pdf':
                return 'ملف PDF';
            case 'video':
                return 'فيديو';
            case 'article':
                return 'مقال';
            default:
                return 'مورد';
        }
    };

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
                        <BookOpen className="text-brand-blue" size={64} />
                    </div>
                    <h1 className="text-5xl font-bold text-brand-blue mb-4">مواردنا</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        مكتبة شاملة من الموارد الإسلامية والتعليمية المجانية
                    </p>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mt-4 rounded-full" />
                </motion.div>

                {/* Search Bar */}
                <motion.div
                    className="max-w-2xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="relative">
                        <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
                        <input
                            type="text"
                            placeholder="ابحث في الموارد..."
                            className="w-full px-12 py-4 border-2 border-gray-200 rounded-full focus:border-brand-blue outline-none transition-colors text-lg"
                        />
                    </div>
                </motion.div>

                {/* Resources Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {resources.map((resource, index) => (
                        <motion.div
                            key={resource.id}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-br from-brand-blue to-green-900 p-6 text-white">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="bg-white/20 p-3 rounded-lg">
                                        {getIcon(resource.type)}
                                    </div>
                                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                                        {resource.category}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                                <p className="text-blue-100 text-sm">{getTypeLabel(resource.type)}</p>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    {resource.description}
                                </p>

                                {/* Stats */}
                                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                                    {resource.downloads && (
                                        <div className="flex items-center gap-1">
                                            <Download size={16} />
                                            <span>{resource.downloads.toLocaleString('ar-EG')} تحميل</span>
                                        </div>
                                    )}
                                    {resource.views && (
                                        <div className="flex items-center gap-1">
                                            <Video size={16} />
                                            <span>{resource.views.toLocaleString('ar-EG')} مشاهدة</span>
                                        </div>
                                    )}
                                </div>

                                {/* Action Button */}
                                <motion.button
                                    className="w-full bg-brand-blue text-white py-3 rounded-lg font-bold hover:bg-green-900 transition-colors flex items-center justify-center gap-2"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {resource.type === 'pdf' && (
                                        <>
                                            <Download size={18} />
                                            تحميل الملف
                                        </>
                                    )}
                                    {resource.type === 'video' && (
                                        <>
                                            <Video size={18} />
                                            مشاهدة الفيديو
                                        </>
                                    )}
                                    {resource.type === 'article' && (
                                        <>
                                            <BookOpen size={18} />
                                            قراءة المقال
                                        </>
                                    )}
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                <motion.div
                    className="mt-20 grid md:grid-cols-4 gap-6 max-w-5xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <FileText className="text-brand-red mx-auto mb-3" size={40} />
                        <h3 className="text-3xl font-bold text-brand-red mb-2">250+</h3>
                        <p className="text-gray-600">كتاب ومطبوعة</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <Video className="text-brand-blue mx-auto mb-3" size={40} />
                        <h3 className="text-3xl font-bold text-brand-blue mb-2">500+</h3>
                        <p className="text-gray-600">فيديو تعليمي</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <BookOpen className="text-brand-gold mx-auto mb-3" size={40} />
                        <h3 className="text-3xl font-bold text-brand-gold mb-2">1000+</h3>
                        <p className="text-gray-600">مقال ودرس</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <Download className="text-green-600 mx-auto mb-3" size={40} />
                        <h3 className="text-3xl font-bold text-green-600 mb-2">2M+</h3>
                        <p className="text-gray-600">تحميل ومشاهدة</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ResourcesPage;
