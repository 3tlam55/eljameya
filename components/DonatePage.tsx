import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, MapPin, Send, Copy, QrCode, DollarSign, Heart, CheckCircle } from 'lucide-react';

interface DonationMethod {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: string;
  color: string;
}

const DonatePage: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>('vodafone');
  const [donationAmount, setDonationAmount] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const donationMethods: DonationMethod[] = [
    {
      id: 'vodafone',
      title: 'Vodafone Cash',
      description: 'تحويل سريع وآمن عبر Vodafone Cash',
      icon: <Send className="w-8 h-8" />,
      details: '*228*52*62618#',
      color: 'bg-red-50 border-red-300',
    },
    {
      id: 'instagram',
      title: 'Instagram',
      description: 'تابعنا وتواصل معنا عبر الرسائل المباشرة',
      icon: <Send className="w-8 h-8" />,
      details: '@gam3yaorg',
      color: 'bg-pink-50 border-pink-300',
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      description: 'تواصل معنا مباشرة عبر WhatsApp',
      icon: <MessageCircle className="w-8 h-8" />,
      details: '+20 123 456 7890',
      color: 'bg-green-50 border-green-300',
    },
    {
      id: 'phone',
      title: 'اتصل بنا',
      description: 'اتصل مباشرة للتحدث مع فريقنا',
      icon: <Phone className="w-8 h-8" />,
      details: '+20 2 1234 5678',
      color: 'bg-blue-50 border-blue-300',
    },
    {
      id: 'visit',
      title: 'زيارة مباشرة',
      description: 'زيارة مقرنا الرئيسي لتسليم التبرع',
      icon: <MapPin className="w-8 h-8" />,
      details: 'القاهرة - حي معين - شارع النيل',
      color: 'bg-purple-50 border-purple-300',
    },
  ];

  const selectedData = donationMethods.find(m => m.id === selectedMethod);

  const handleCopy = () => {
    if (selectedData) {
      navigator.clipboard.writeText(selectedData.details);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 12 },
    },
  };

  const methodVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    }),
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center gap-3 bg-brand-gold/20 px-6 py-3 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Heart className="text-brand-red" size={24} fill="currentColor" />
            <span className="text-brand-blue font-bold text-lg">ساعدنا في نشر الخير</span>
          </motion.div>

          <motion.h1
            className="text-5xl font-bold text-brand-blue mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            تبرع الآن
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            تبرعك سيحدث فرقاً حقيقياً في حياة الآلاف من المحتاجين. اختر الطريقة الأنسب لك للتبرع
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Donation Methods */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <h2 className="text-2xl font-bold text-brand-blue mb-6">طرق التبرع</h2>
            <motion.div
              className="space-y-4"
              variants={containerVariants}
            >
              {donationMethods.map((method, index) => (
                <motion.button
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    selectedMethod === method.id
                      ? `${method.color} border-brand-blue shadow-lg`
                      : 'bg-white border-gray-200 hover:border-brand-blue'
                  }`}
                  custom={index}
                  variants={methodVariants}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-brand-blue mt-1">{method.icon}</div>
                    <div>
                      <p className="font-bold text-gray-900">{method.title}</p>
                      <p className="text-sm text-gray-600">{method.description}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Donation Details */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              {selectedData && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Selected Method */}
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-brand-gold/20 text-brand-blue rounded-full flex items-center justify-center">
                        {selectedData.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">{selectedData.title}</h3>
                        <p className="text-gray-600">{selectedData.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="bg-gradient-to-r from-brand-blue/10 to-brand-gold/10 rounded-xl p-6 mb-8 border border-brand-blue/20">
                    <p className="text-sm text-gray-600 mb-3 font-semibold">البيانات:</p>
                    <div className="flex items-center justify-between bg-white rounded-lg p-4 border border-brand-blue/30">
                      <p className="text-lg font-bold text-brand-blue">{selectedData.details}</p>
                      <motion.button
                        onClick={handleCopy}
                        className={`px-4 py-2 rounded-lg font-bold transition-all ${
                          copied
                            ? 'bg-green-500 text-white'
                            : 'bg-brand-blue text-white hover:bg-green-700'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {copied ? (
                          <div className="flex items-center gap-2">
                            <CheckCircle size={18} />
                            تم النسخ
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Copy size={18} />
                            نسخ
                          </div>
                        )}
                      </motion.button>
                    </div>
                  </div>

                  {/* Additional Info */}
                  {selectedMethod === 'visit' && (
                    <motion.div
                      className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                        <MapPin size={20} />
                        ساعات العمل
                      </h4>
                      <p className="text-purple-800">السبت - الخميس: ٩ صباحاً - ٥ مساءً</p>
                      <p className="text-purple-800">الجمعة: ١ مساءً - ٥ مساءً</p>
                    </motion.div>
                  )}

                  {selectedMethod === 'whatsapp' && (
                    <motion.a
                      href="https://wa.me/20123456789?text=السلام عليكم، أرغب في التبرع"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <MessageCircle size={24} />
                      فتح WhatsApp
                    </motion.a>
                  )}

                  {selectedMethod === 'phone' && (
                    <motion.a
                      href="tel:+201234567890"
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone size={24} />
                      اتصل بنا الآن
                    </motion.a>
                  )}

                  {selectedMethod === 'instagram' && (
                    <motion.a
                      href="https://instagram.com/gam3yaorg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send size={24} />
                      زيارة Instagram
                    </motion.a>
                  )}

                  {selectedMethod === 'vodafone' && (
                    <motion.div
                      className="bg-red-50 border border-red-200 rounded-xl p-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="text-green-500 mt-1 shrink-0" size={20} />
                          <div>
                            <p className="font-bold text-gray-900">الخطوة 1: اتصل برقم التحويل</p>
                            <p className="text-sm text-gray-600">ادخل الرقم: *228*52*62618#</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="text-green-500 mt-1 shrink-0" size={20} />
                          <div>
                            <p className="font-bold text-gray-900">الخطوة 2: أدخل المبلغ</p>
                            <p className="text-sm text-gray-600">اختر المبلغ الذي تريد تحويله</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="text-green-500 mt-1 shrink-0" size={20} />
                          <div>
                            <p className="font-bold text-gray-900">الخطوة 3: أكمل التحويل</p>
                            <p className="text-sm text-gray-600">اتبع التعليمات لإكمال العملية</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Why Donate */}
        <motion.div className="bg-gradient-to-r from-brand-blue to-green-700 text-white rounded-2xl p-12 text-center" variants={itemVariants}>
          <motion.h2 className="text-3xl font-bold mb-6">لماذا تتبرع معنا؟</motion.h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'شفافية تامة', desc: 'كل تبرعك يصل مباشرة للمحتاجين' },
              { title: 'فريق موثوق', desc: 'جمعية شرعية معتمدة منذ سنوات' },
              { title: 'تأثير حقيقي', desc: 'ساعد آلاف الأسر المحتاجة' },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: (i) => ({
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.1 },
                  }),
                }}
              >
                <div className="text-3xl mb-3">✨</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/90">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DonatePage;
