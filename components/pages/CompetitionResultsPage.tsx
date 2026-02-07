import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Trophy, Medal, Award, Star, BookOpen } from 'lucide-react';

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

// Mock data for demonstration
const mockResults = [
    { id: 1, name: 'محمد أحمد علي', category: 'حفظ كامل', score: 98, rank: 1, city: 'القاهرة' },
    { id: 2, name: 'فاطمة حسن محمود', category: 'حفظ كامل', score: 97, rank: 2, city: 'الإسكندرية' },
    { id: 3, name: 'عبدالله يوسف إبراهيم', category: '20 جزء', score: 96, rank: 3, city: 'الجيزة' },
    { id: 4, name: 'مريم خالد سعيد', category: '20 جزء', score: 95, rank: 4, city: 'المنصورة' },
    { id: 5, name: 'أحمد محمود حسن', category: '10 أجزاء', score: 94, rank: 5, city: 'طنطا' },
    { id: 6, name: 'نور الدين عمر', category: '10 أجزاء', score: 93, rank: 6, city: 'أسيوط' },
    { id: 7, name: 'خديجة عبدالرحمن', category: '5 أجزاء', score: 92, rank: 7, city: 'سوهاج' },
    { id: 8, name: 'يوسف علي محمد', category: '5 أجزاء', score: 91, rank: 8, city: 'المنيا' },
];

const CompetitionResultsPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('الكل');
    const [searchResult, setSearchResult] = useState<any>(null);
    const [showLeaderboard, setShowLeaderboard] = useState(true);

    const categories = ['الكل', 'حفظ كامل', '20 جزء', '10 أجزاء', '5 أجزاء'];

    const handleSearch = () => {
        const result = mockResults.find(r =>
            r.name.includes(searchTerm) || r.id.toString() === searchTerm
        );
        setSearchResult(result || 'not_found');
        setShowLeaderboard(false);
    };

    const filteredResults = selectedCategory === 'الكل'
        ? mockResults
        : mockResults.filter(r => r.category === selectedCategory);

    const getRankIcon = (rank: number) => {
        if (rank === 1) return <Trophy className="text-amber-500" size={32} />;
        if (rank === 2) return <Medal className="text-gray-400" size={32} />;
        if (rank === 3) return <Medal className="text-amber-700" size={32} />;
        return <Award className="text-brand-blue" size={24} />;
    };

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
                        <BookOpen className="text-brand-blue" size={64} />
                    </div>
                    <h1 className="text-5xl font-bold text-brand-blue mb-4">نتائج المسابقة</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        ابحث عن نتيجتك أو تصفح لوحة الشرف
                    </p>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mt-4 rounded-full" />
                </motion.div>

                {/* Search Section */}
                <motion.div
                    className="max-w-3xl mx-auto mb-12"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <h2 className="text-2xl font-bold text-brand-blue mb-6 text-center">
                            ابحث عن نتيجتك
                        </h2>
                        <div className="flex gap-3">
                            <input
                                type="text"
                                placeholder="أدخل الاسم أو رقم المتسابق..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                                className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-brand-blue focus:outline-none text-lg"
                            />
                            <motion.button
                                onClick={handleSearch}
                                className="bg-brand-blue hover:bg-green-900 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Search size={24} />
                                بحث
                            </motion.button>
                        </div>
                        <button
                            onClick={() => {
                                setSearchResult(null);
                                setShowLeaderboard(true);
                                setSearchTerm('');
                            }}
                            className="text-brand-blue hover:underline mt-4 text-sm"
                        >
                            العودة إلى لوحة الشرف
                        </button>
                    </div>
                </motion.div>

                {/* Search Result */}
                <AnimatePresence mode="wait">
                    {searchResult && (
                        <motion.div
                            className="max-w-3xl mx-auto mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            {searchResult === 'not_found' ? (
                                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center">
                                    <p className="text-red-600 text-xl font-bold">
                                        عذراً، لم يتم العثور على نتيجة بهذا الاسم أو الرقم
                                    </p>
                                    <p className="text-red-500 mt-2">
                                        تأكد من كتابة الاسم بشكل صحيح أو تواصل مع الإدارة
                                    </p>
                                </div>
                            ) : (
                                <div className="bg-gradient-to-br from-brand-blue to-green-900 text-white rounded-2xl p-8 shadow-2xl">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-4">
                                            {getRankIcon(searchResult.rank)}
                                            <div>
                                                <p className="text-sm text-blue-100">الترتيب</p>
                                                <p className="text-3xl font-bold">#{searchResult.rank}</p>
                                            </div>
                                        </div>
                                        <div className="text-left">
                                            <p className="text-sm text-blue-100">الدرجة</p>
                                            <p className="text-3xl font-bold">{searchResult.score}%</p>
                                        </div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                                        <h3 className="text-2xl font-bold mb-4">{searchResult.name}</h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-blue-100 text-sm">الفئة</p>
                                                <p className="font-bold">{searchResult.category}</p>
                                            </div>
                                            <div>
                                                <p className="text-blue-100 text-sm">المدينة</p>
                                                <p className="font-bold">{searchResult.city}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 text-center">
                                        <p className="text-brand-gold font-bold text-lg">
                                            🎉 مبارك! تم اجتياز المرحلة الأولى بنجاح
                                        </p>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Leaderboard */}
                {showLeaderboard && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        {/* Category Filter */}
                        <div className="flex flex-wrap justify-center gap-3 mb-8">
                            {categories.map((cat, index) => (
                                <motion.button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${selectedCategory === cat
                                        ? 'bg-brand-blue text-white border-brand-blue shadow-lg'
                                        : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-brand-blue/50'
                                        }`}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.05 }}
                                >
                                    {cat}
                                </motion.button>
                            ))}
                        </div>

                        {/* Top 3 Podium */}
                        <div className="max-w-5xl mx-auto mb-12">
                            <h2 className="text-3xl font-bold text-brand-blue text-center mb-8">
                                لوحة الشرف - المراكز الأولى
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {filteredResults.slice(0, 3).map((result, index) => (
                                    <motion.div
                                        key={result.id}
                                        className={`bg-gradient-to-br ${index === 0 ? 'from-amber-400 to-amber-600 md:order-2' :
                                            index === 1 ? 'from-gray-300 to-gray-500 md:order-1' :
                                                'from-amber-600 to-amber-800 md:order-3'
                                            } text-white rounded-2xl p-6 shadow-2xl text-center ${index === 0 ? 'md:scale-110 md:mt-0' : 'md:mt-8'
                                            }`}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 + index * 0.1 }}
                                        whileHover={{ y: -5, scale: index === 0 ? 1.12 : 1.05 }}
                                    >
                                        <div className="mb-4">
                                            {getRankIcon(result.rank)}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">{result.name}</h3>
                                        <p className="text-sm opacity-90 mb-2">{result.category}</p>
                                        <div className="bg-white/20 backdrop-blur-sm rounded-lg py-2 px-4 inline-block">
                                            <p className="text-3xl font-bold">{result.score}%</p>
                                        </div>
                                        <p className="text-sm mt-2 opacity-75">{result.city}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Full Results Table */}
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-2xl font-bold text-brand-blue mb-6">جميع النتائج</h2>
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-brand-blue text-white">
                                            <tr>
                                                <th className="px-6 py-4 text-right">الترتيب</th>
                                                <th className="px-6 py-4 text-right">الاسم</th>
                                                <th className="px-6 py-4 text-right">الفئة</th>
                                                <th className="px-6 py-4 text-right">المدينة</th>
                                                <th className="px-6 py-4 text-right">الدرجة</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredResults.map((result, index) => (
                                                <motion.tr
                                                    key={result.id}
                                                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.8 + index * 0.05 }}
                                                >
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-2">
                                                            {result.rank <= 3 && getRankIcon(result.rank)}
                                                            <span className="font-bold text-brand-blue">#{result.rank}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 font-semibold">{result.name}</td>
                                                    <td className="px-6 py-4 text-gray-600">{result.category}</td>
                                                    <td className="px-6 py-4 text-gray-600">{result.city}</td>
                                                    <td className="px-6 py-4">
                                                        <span className="bg-brand-gold text-white px-3 py-1 rounded-full font-bold">
                                                            {result.score}%
                                                        </span>
                                                    </td>
                                                </motion.tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Sponsors Section */}
                <motion.div
                    className="mt-16"
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
            </div>
        </div>
    );
};

export default CompetitionResultsPage;
