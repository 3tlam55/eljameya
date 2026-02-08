import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Trophy, Medal, Award, BookOpen, AlertCircle, Loader2, Share2, Facebook } from 'lucide-react';
import { supabase } from '../../src/lib/supabase';

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



const CompetitionResultsPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState<any>(null);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);



    const handleSearch = async () => {
        if (!searchTerm.trim()) return;

        setLoading(true);
        setError(null);
        setSearchResult(null);

        try {
            // First, check if the input is a valid number since Code is numeric
            if (isNaN(Number(searchTerm.trim()))) {
                setError('الرجاء إدخال رقم كود صحيح');
                setLoading(false);
                return;
            }

            console.log('Searching for Code:', searchTerm.trim());

            // Try explicit casting to number for the query
            const code = parseInt(searchTerm.trim(), 10);

            const { data, error } = await supabase
                .from('results')
                .select('*')
                .eq('Code', code)
                .maybeSingle();

            console.log('Supabase response:', { data, error });

            if (error) {
                console.error('Error fetching result:', error);
                setError('حدث خطأ أثناء البحث. يرجى المحاولة مرة أخرى.');
            } else if (!data) {
                setSearchResult('not_found');
            } else {
                setSearchResult(data);
            }
        } catch (err) {
            console.error('Unexpected error:', err);
            setError('حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.');
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-8 sm:mb-10 md:mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="flex justify-center mb-3 sm:mb-4">
                        <BookOpen className="text-brand-blue" size={48} />
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue mb-3 sm:mb-4 px-4">
                        نتائج المسابقة
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                        ابحث عن نتيجتك أو تصفح لوحة الشرف
                    </p>
                    <div className="w-20 sm:w-24 h-1 bg-brand-gold mx-auto mt-3 sm:mt-4 rounded-full" />
                </motion.div>

                {/* Sponsors Section */}
                <motion.div
                    className="mb-8 sm:mb-10 md:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-brand-blue text-center mb-6 sm:mb-8 px-4">
                        رعاة المسابقة
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
                        {sponsors.map((sponsor, index) => (
                            <motion.div
                                key={sponsor.id}
                                className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 md:p-8 flex items-center justify-center hover:shadow-2xl transition-all"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.05 }}
                            >
                                <img
                                    src={sponsor.image}
                                    alt={sponsor.name}
                                    className="max-w-full max-h-20 sm:max-h-28 md:max-h-32 object-contain"
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Search Section */}
                <motion.div
                    className="max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
                        <h2 className="text-xl sm:text-2xl font-bold text-brand-blue mb-4 sm:mb-6 text-center">
                            ابحث عن نتيجتك
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="text"
                                placeholder="أدخل كود الطالب..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                                disabled={loading}
                                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-brand-blue focus:outline-none text-base sm:text-lg disabled:bg-gray-100"
                            />
                            <motion.button
                                onClick={handleSearch}
                                disabled={loading}
                                className="bg-brand-blue hover:bg-green-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {loading ? <Loader2 size={20} className="animate-spin sm:w-6 sm:h-6" /> : <Search size={20} className="sm:w-6 sm:h-6" />}
                                {loading ? 'جاري البحث...' : 'بحث'}
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Search Result */}
                <AnimatePresence mode="wait">
                    {searchResult && (
                        <motion.div
                            className="max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            {searchResult === 'not_found' ? (
                                <div className="bg-red-50 border-2 border-red-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
                                    <p className="text-red-600 text-lg sm:text-xl font-bold">
                                        عذراً، لم يتم العثور على نتيجة بهذا الكود
                                    </p>
                                    <p className="text-red-500 mt-2 text-sm sm:text-base">
                                        تأكد من كتابة الكود بشكل صحيح أو تواصل مع الإدارة
                                    </p>
                                </div>
                            ) : error ? (
                                <div className="bg-red-50 border-2 border-red-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center flex flex-col items-center">
                                    <AlertCircle className="text-red-500 mb-2" size={28} />
                                    <p className="text-red-600 text-base sm:text-lg font-bold">{error}</p>
                                </div>
                            ) : (
                                <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
                                    {/* Success Banner */}
                                    <div className="bg-gradient-to-r from-brand-blue to-green-900 text-white p-4 sm:p-6 text-center">
                                        <div className="flex items-center justify-center gap-2 mb-2">
                                            <Award className="text-brand-gold" size={32} />
                                            <h3 className="text-xl sm:text-2xl font-bold">نتيجة الطالب</h3>
                                        </div>
                                        <p className="text-brand-gold font-bold text-base sm:text-lg">
                                            {searchResult.degree >= 50 ? '🎉 مبارك! تم اجتياز المرحلة بنجاح' : 'حظ أوفر في المرة القادمة'}
                                        </p>
                                    </div>

                                    {/* Table */}
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <tbody>
                                                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                                    <td className="px-4 sm:px-6 py-3 sm:py-4 font-bold text-brand-blue bg-gray-50 text-sm sm:text-base w-1/3">
                                                        الاسم
                                                    </td>
                                                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-800 text-sm sm:text-base">
                                                        {searchResult.Name}
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                                    <td className="px-4 sm:px-6 py-3 sm:py-4 font-bold text-brand-blue bg-gray-50 text-sm sm:text-base">
                                                        الكود
                                                    </td>
                                                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-800 text-sm sm:text-base">
                                                        {searchResult.Code}
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                                    <td className="px-4 sm:px-6 py-3 sm:py-4 font-bold text-brand-blue bg-gray-50 text-sm sm:text-base">
                                                        المستوى
                                                    </td>
                                                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-800 text-sm sm:text-base">
                                                        {searchResult.Level}
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                                    <td className="px-4 sm:px-6 py-3 sm:py-4 font-bold text-brand-blue bg-gray-50 text-sm sm:text-base">
                                                        الفرع / المجموعة
                                                    </td>
                                                    <td className="px-4 sm:px-6 py-3 sm:py-4 text-gray-800 text-sm sm:text-base">
                                                        {searchResult.section}
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-4 sm:px-6 py-3 sm:py-4 font-bold text-brand-blue bg-gray-50 text-sm sm:text-base">
                                                        الدرجة
                                                    </td>
                                                    <td className="px-4 sm:px-6 py-3 sm:py-4">
                                                        <div className="flex items-center gap-3">
                                                            <span className={`text-xl sm:text-2xl font-bold ${searchResult.degree >= 50 ? 'text-green-600' : 'text-red-600'}`}>
                                                                {searchResult.degree}%
                                                            </span>
                                                            <div className="flex-1 bg-gray-200 rounded-full h-3 sm:h-4 max-w-xs">
                                                                <div
                                                                    className={`h-full rounded-full transition-all ${searchResult.degree >= 50 ? 'bg-green-600' : 'bg-red-600'}`}
                                                                    style={{ width: `${searchResult.degree}%` }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Share Buttons */}
                                    <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-200">
                                        <p className="text-sm sm:text-base font-semibold text-gray-700 mb-3 text-center">
                                            شارك نتيجتك
                                        </p>
                                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                                            {/* Facebook Share */}
                                            <motion.button
                                                onClick={() => {
                                                    const shareText = `حصلت على ${searchResult.degree}% في مسابقة القرآن الكريم - ${searchResult.Name}`;
                                                    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(shareText)}`;
                                                    window.open(url, '_blank', 'width=600,height=400');
                                                }}
                                                className="flex items-center gap-2 bg-[#1877F2] hover:bg-[#0d65d9] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all shadow-md text-sm sm:text-base"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                </svg>
                                                <span>Facebook</span>
                                            </motion.button>

                                            {/* Twitter Share */}
                                            <motion.button
                                                onClick={() => {
                                                    const shareText = `حصلت على ${searchResult.degree}% في مسابقة القرآن الكريم 🎉`;
                                                    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(window.location.href)}`;
                                                    window.open(url, '_blank', 'width=600,height=400');
                                                }}
                                                className="flex items-center gap-2 bg-[#1DA1F2] hover:bg-[#0d8bd9] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all shadow-md text-sm sm:text-base"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                                </svg>
                                                <span>Twitter</span>
                                            </motion.button>

                                            {/* WhatsApp Share */}
                                            <motion.button
                                                onClick={() => {
                                                    const shareText = `حصلت على ${searchResult.degree}% في مسابقة القرآن الكريم 🎉\n${searchResult.Name}\nالمستوى: ${searchResult.Level}`;
                                                    const url = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
                                                    window.open(url, '_blank');
                                                }}
                                                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all shadow-md text-sm sm:text-base"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                                </svg>
                                                <span>WhatsApp</span>
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </div>
    );
};

export default CompetitionResultsPage;
