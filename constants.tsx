import React from 'react';
import { NavItem, NewsItem } from './types';
import { Truck, Pill, Heart, Droplets, Recycle, Home, Users, BookOpen } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'الرئيسية', href: '/' },
  { label: 'حاسبة الزكاة', href: '/zakat-calculator' },
  { label: 'احتياجات عاجلة', href: '/urgent-needs' },
  { label: 'مسابقة القرآن', href: '/quran-competition' },
  { label: 'من نحن', href: '/about' },
  { label: 'خدماتنا', href: '/services' },
  { label: 'مواردنا', href: '/resources' },
  { label: 'فروعنا', href: '/branches' },
  { label: 'بنك الدم', href: '/blood-bank' },
  { label: 'مجمع الإصلاح الطبي', href: '/medical-complex' },
  { label: 'تواصل معنا', href: '/contact' },
];

export const PROJECTS: NewsItem[] = [
  {
    id: 1,
    title: 'معرض السلع الغذائية',
    category: 'إطعام',
    date: 'مشروع دائم',
    image: 'https://picsum.photos/800/600?random=201',
    excerpt: 'توفير السلع الغذائية الأساسية للأسر المحتاجة من خلال معارض وشنط شهرية.',
  },
  {
    id: 2,
    title: 'تيسير نقل المرضى',
    category: 'خدمات طبية',
    date: 'خدمة يومية',
    image: 'https://picsum.photos/800/600?random=202',
    excerpt: 'سيارات مجهزة لنقل المرضى غير القادرين إلى المستشفيات لتلقي العلاج.',
  },
  {
    id: 3,
    title: 'مجمع الإصلاح الطبي',
    category: 'رعاية صحية',
    date: 'صرح طبي',
    image: 'https://picsum.photos/800/600?random=203',
    excerpt: 'عيادات متخصصة، عمليات جراحية، وخدمات طبية متكاملة بأسعار رمزية أو مجانية.',
  },
  {
    id: 4,
    title: 'مشروع رفيق النبي ﷺ',
    category: 'كفالة أيتام',
    date: 'كفالة شهرية',
    image: 'https://picsum.photos/800/600?random=204',
    excerpt: 'كفالة شاملة للأيتام (ماديًا، تعليميًا، وتربويًا) تأسياً بحديث النبي ﷺ.',
  },
  {
    id: 5,
    title: 'إطعام الفول والعسل',
    category: 'تغذية',
    date: 'يومياً',
    image: 'https://picsum.photos/800/600?random=205',
    excerpt: 'توفير وجبة إفطار مغذية (فول وعسل) لـ 30,000 مستفيد يومياً.',
  },
  {
    id: 6,
    title: 'سُقيا الماء',
    category: 'صدقة جارية',
    date: 'مستمر',
    image: 'https://picsum.photos/800/600?random=206',
    excerpt: 'توصيل المياه للمنازل المحرومة وتوفير مبردات مياه للمارة والمغتربين.',
  },
  {
    id: 7,
    title: 'مشروع تيسير الزواج',
    category: 'عفاف',
    date: 'موسمي',
    image: 'https://picsum.photos/800/600?random=207',
    excerpt: 'دعم الشباب والفتيات المقبلين على الزواج بالأجهزة والمستلزمات الضرورية.',
  },
  {
    id: 8,
    title: 'بنك الدم الإلكتروني',
    category: 'طوارئ',
    date: '24/7',
    image: 'https://picsum.photos/800/600?random=208',
    excerpt: 'قاعدة بيانات للمتبرعین لتوفير الدم للحالات الحرجة والعمليات العاجلة.',
  },
  {
    id: 9,
    title: 'الأطراف الصناعية',
    category: 'أجهزة تعويضية',
    date: 'عند الحاجة',
    image: 'https://picsum.photos/800/600?random=209',
    excerpt: 'توفير الأطراف الصناعية والأجهزة التعويضية لتمكين ذوي الهمم من ممارسة حياتهم.',
  },
  {
    id: 10,
    title: 'إعادة تدوير (خردة/ملابس)',
    category: 'بيئة وتنمية',
    date: 'مستمر',
    image: 'https://picsum.photos/800/600?random=210',
    excerpt: 'استقبال الملابس القديمة والخردة وإعادة تدويرها لصالح مشاريع المؤسسة.',
  },
  {
    id: 11,
    title: 'بناء الأسقف والترميم',
    category: 'إيواء',
    date: 'إنشائي',
    image: 'https://picsum.photos/800/600?random=211',
    excerpt: 'بناء أسقف المنازل المتهالكة وتركيب الأبواب والشبابيك لحماية الأسر.',
  },
  {
    id: 12,
    title: 'كفالة طلاب العلم',
    category: 'تعليم',
    date: 'دراسي',
    image: 'https://picsum.photos/800/600?random=212',
    excerpt: 'دعم الطلاب غير القادرين بالمصاريف الدراسية والكتب والدورات التدريبية.',
  },
  {
    id: 13,
    title: 'دور التحفيظ والحضانات',
    category: 'تعليم',
    date: 'مستمر',
    image: 'https://picsum.photos/800/600?random=213',
    excerpt: 'إنشاء ورعاية الحضانات ودور التحفيظ لتربية النشء تربية إسلامية صحيحة.',
  },
];

export const LATEST_NEWS = PROJECTS.slice(0, 4);

export const IMPACT_STATS = [
  { label: 'فرد نوفر لهم مواد غذائية شهرياً', number: '40,000', iconName: 'Truck' },
  { label: 'فرد نوفر لهم وجبة فول وعسل يومياً', number: '30,000', iconName: 'Droplets' },
  { label: 'مريض يستفيدون من الخدمات الطبية', number: '10,000', iconName: 'Pill' },
  { label: 'كفالات وإيجارات شهرية للمسنين', number: 'دعم مالي', iconName: 'Heart' },
];