import React, { useState } from 'react';
import { PiggyBank, CreditCard, Check } from 'lucide-react';

const DonationSection: React.FC = () => {
  const [amount, setAmount] = useState<number | null>(null);

  return (
    <section className="py-20 bg-brand-blue text-white relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute -left-20 -top-20 w-96 h-96 bg-brand-lightBlue opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-gold opacity-10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">كن قطرة من قطرات الخير التي نرجو دوامها...</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
                فالقائمة فيها آلاف الأشخاص الآخرين! احتياجاتهم تتكلف مئات الآلاف كل شهر… وإليك الأسهم المقترحة للمشاركة، مع إمكان تخصيص أي مبلغ يناسبك، أو طلب الحصّالة…
            </p>

            {/* Amount Selection */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {[10, 50, 100, 500].map((val) => (
                    <button 
                        key={val}
                        onClick={() => setAmount(val)}
                        className={`w-32 py-4 rounded-xl border-2 font-bold text-xl transition-all flex flex-col items-center justify-center gap-1 ${
                            amount === val 
                            ? 'bg-white text-brand-blue border-white scale-105 shadow-xl' 
                            : 'border-white/30 hover:bg-white/10 hover:border-white text-white'
                        }`}
                    >
                        <span>{val}</span>
                        <span className="text-xs font-normal opacity-80">جنيه</span>
                        {amount === val && <Check size={16} className="absolute top-2 right-2 text-brand-blue" />}
                    </button>
                ))}
                <button 
                     onClick={() => setAmount(0)}
                     className={`w-32 py-4 rounded-xl border-2 font-bold text-lg transition-all flex flex-col items-center justify-center gap-1 ${
                        amount === 0
                        ? 'bg-brand-gold text-white border-brand-gold scale-105 shadow-xl' 
                        : 'border-brand-gold text-brand-gold hover:bg-brand-gold/10'
                    }`}
                >
                    <PiggyBank size={24} />
                    <span>الحصالة</span>
                </button>
            </div>

            {/* Actions */}
            <div className="flex flex-col md:flex-row gap-6 justify-center max-w-2xl mx-auto">
                <button className="flex-1 bg-white text-brand-blue hover:bg-gray-100 py-4 px-8 rounded-lg font-bold text-lg shadow-lg flex items-center justify-center gap-3 transition-colors">
                    <CreditCard size={20} />
                    سأدعمهم بمبلغ شهري
                </button>
                <button className="flex-1 bg-brand-red text-white hover:bg-amber-700 py-4 px-8 rounded-lg font-bold text-lg shadow-lg flex items-center justify-center gap-3 transition-colors">
                    <PiggyBank size={20} />
                    أريد طلب الحصَّالة
                </button>
            </div>
            
            <div className="mt-8 text-sm opacity-75">
                * طفل فقير يأكل كسرة خبز *
            </div>
        </div>
    </section>
  );
};

export default DonationSection;