import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
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
                        <Mail className="text-brand-blue" size={64} />
                    </div>
                    <h1 className="text-5xl font-bold text-brand-blue mb-4">تواصل معنا</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        نحن هنا للإجابة على استفساراتك ومساعدتك
                    </p>
                    <div className="w-24 h-1 bg-brand-gold mx-auto mt-4 rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <motion.div
                        className="bg-white rounded-2xl shadow-xl p-8"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold text-brand-blue mb-6">أرسل رسالة</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-gray-700 font-bold mb-2">الاسم الكامل</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-blue outline-none transition-colors"
                                    placeholder="أدخل اسمك الكامل"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-bold mb-2">البريد الإلكتروني</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-blue outline-none transition-colors"
                                    placeholder="example@email.com"
                                    required
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
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-bold mb-2">الموضوع</label>
                                <input
                                    type="text"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-blue outline-none transition-colors"
                                    placeholder="موضوع الرسالة"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-bold mb-2">الرسالة</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-blue outline-none transition-colors resize-none"
                                    rows={5}
                                    placeholder="اكتب رسالتك هنا..."
                                    required
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="w-full bg-brand-blue text-white py-4 rounded-lg font-bold text-lg hover:bg-green-900 transition-colors shadow-lg flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Send size={20} />
                                إرسال الرسالة
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {/* Main Office */}
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h3 className="text-2xl font-bold text-brand-blue mb-6">المقر الرئيسي</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-brand-blue shrink-0 mt-1" size={24} />
                                    <div>
                                        <p className="font-bold text-gray-900 mb-1">العنوان</p>
                                        <p className="text-gray-700">25 شارع الجلاء، وسط البلد، القاهرة</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Phone className="text-brand-gold shrink-0 mt-1" size={24} />
                                    <div>
                                        <p className="font-bold text-gray-900 mb-1">الهاتف</p>
                                        <p className="text-gray-700">02-25749876</p>
                                        <p className="text-gray-700">الخط الساخن: 16825</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Mail className="text-green-600 shrink-0 mt-1" size={24} />
                                    <div>
                                        <p className="font-bold text-gray-900 mb-1">البريد الإلكتروني</p>
                                        <p className="text-gray-700">info@sharia.org.eg</p>
                                        <p className="text-gray-700">support@sharia.org.eg</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Working Hours */}
                        <div className="bg-gradient-to-br from-brand-blue to-green-900 text-white rounded-2xl shadow-xl p-8">
                            <h3 className="text-2xl font-bold mb-6">مواعيد العمل</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                                    <span>السبت - الخميس</span>
                                    <span className="font-bold">9 صباحاً - 5 مساءً</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                                    <span>الجمعة</span>
                                    <span className="font-bold">مغلق</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>الطوارئ</span>
                                    <span className="font-bold">24/7</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h3 className="text-2xl font-bold text-brand-blue mb-6">تابعنا على</h3>
                            <div className="grid grid-cols-4 gap-4">
                                <motion.a
                                    href="#"
                                    className="bg-blue-600 text-white p-4 rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Facebook size={28} />
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className="bg-sky-500 text-white p-4 rounded-xl flex items-center justify-center hover:bg-sky-600 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Twitter size={28} />
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className="bg-pink-600 text-white p-4 rounded-xl flex items-center justify-center hover:bg-pink-700 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Instagram size={28} />
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className="bg-red-600 text-white p-4 rounded-xl flex items-center justify-center hover:bg-red-700 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Youtube size={28} />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Map Placeholder */}
                <motion.div
                    className="mt-16 max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="bg-gradient-to-br from-brand-blue to-green-900 h-96 flex items-center justify-center text-white">
                        <div className="text-center">
                            <MapPin size={64} className="mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-2">موقعنا على الخريطة</h3>
                            <p className="text-blue-100">25 شارع الجلاء، وسط البلد، القاهرة</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage;
