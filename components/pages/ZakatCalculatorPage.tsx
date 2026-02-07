import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Coins, TrendingUp, DollarSign, Wallet } from 'lucide-react';

const ZakatCalculatorPage: React.FC = () => {
    const [gold, setGold] = useState('');
    const [silver, setSilver] = useState('');
    const [cash, setCash] = useState('');
    const [investments, setInvestments] = useState('');
    const [zakatAmount, setZakatAmount] = useState(0);

    const calculateZakat = () => {
        const total =
            parseFloat(gold || '0') +
            parseFloat(silver || '0') +
            parseFloat(cash || '0') +
            parseFloat(investments || '0');

        const zakat = total * 0.025; // 2.5%
        setZakatAmount(zakat);
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
                        <Calculator className="text-brand-blue" size={64} />
                    </div>
                    <h1 className="text-5xl font-bold text-brand-blue mb-4">حاسبة الزكاة</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        احسب زكاة مالك بسهولة ودقة وفقاً للشريعة الإسلامية
                    </p>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mt-4 rounded-full" />
                </motion.div>

                {/* Calculator Card */}
                <motion.div
                    className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {/* Gold Input */}
                        <div>
                            <label className="flex items-center gap-2 text-gray-700 font-bold mb-2">
                                <Coins className="text-brand-gold" size={20} />
                                قيمة الذهب (جنيه مصري)
                            </label>
                            <input
                                type="number"
                                value={gold}
                                onChange={(e) => setGold(e.target.value)}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-blue outline-none transition-colors"
                                placeholder="0.00"
                            />
                        </div>

                        {/* Silver Input */}
                        <div>
                            <label className="flex items-center gap-2 text-gray-700 font-bold mb-2">
                                <Coins className="text-gray-400" size={20} />
                                قيمة الفضة (جنيه مصري)
                            </label>
                            <input
                                type="number"
                                value={silver}
                                onChange={(e) => setSilver(e.target.value)}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-blue outline-none transition-colors"
                                placeholder="0.00"
                            />
                        </div>

                        {/* Cash Input */}
                        <div>
                            <label className="flex items-center gap-2 text-gray-700 font-bold mb-2">
                                <Wallet className="text-brand-blue" size={20} />
                                النقود والأرصدة (جنيه مصري)
                            </label>
                            <input
                                type="number"
                                value={cash}
                                onChange={(e) => setCash(e.target.value)}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-blue outline-none transition-colors"
                                placeholder="0.00"
                            />
                        </div>

                        {/* Investments Input */}
                        <div>
                            <label className="flex items-center gap-2 text-gray-700 font-bold mb-2">
                                <TrendingUp className="text-green-600" size={20} />
                                الاستثمارات (جنيه مصري)
                            </label>
                            <input
                                type="number"
                                value={investments}
                                onChange={(e) => setInvestments(e.target.value)}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-blue outline-none transition-colors"
                                placeholder="0.00"
                            />
                        </div>
                    </div>

                    {/* Calculate Button */}
                    <motion.button
                        onClick={calculateZakat}
                        className="w-full bg-brand-blue text-white py-4 rounded-lg font-bold text-lg hover:bg-green-900 transition-colors shadow-lg"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        احسب الزكاة
                    </motion.button>

                    {/* Result */}
                    {zakatAmount > 0 && (
                        <motion.div
                            className="mt-8 bg-gradient-to-r from-brand-gold/20 to-brand-blue/20 p-6 rounded-xl border-2 border-brand-gold"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <div className="text-center">
                                <p className="text-gray-700 font-semibold mb-2">مقدار الزكاة الواجبة</p>
                                <div className="flex items-center justify-center gap-2">
                                    <DollarSign className="text-brand-gold" size={32} />
                                    <p className="text-4xl font-bold text-brand-blue">
                                        {zakatAmount.toLocaleString('ar-EG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </p>
                                    <span className="text-xl text-gray-600">جنيه</span>
                                </div>
                                <p className="text-sm text-gray-600 mt-4">
                                    (2.5% من إجمالي المال الذي بلغ النصاب وحال عليه الحول)
                                </p>
                            </div>
                        </motion.div>
                    )}
                </motion.div>

                {/* Info Section */}
                <motion.div
                    className="max-w-4xl mx-auto mt-12 grid md:grid-cols-3 gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <div className="bg-brand-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Calculator className="text-brand-blue" size={32} />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">حساب دقيق</h3>
                        <p className="text-gray-600 text-sm">حساب الزكاة وفقاً للشريعة الإسلامية بدقة</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <div className="bg-brand-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Coins className="text-brand-gold" size={32} />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">نصاب الزكاة</h3>
                        <p className="text-gray-600 text-sm">85 جرام ذهب عيار 21 أو ما يعادله</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                        <div className="bg-green-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <TrendingUp className="text-green-600" size={32} />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">نسبة الزكاة</h3>
                        <p className="text-gray-600 text-sm">2.5% من المال الذي حال عليه الحول</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ZakatCalculatorPage;
