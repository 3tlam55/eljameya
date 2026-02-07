import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { X, ArrowRight, Users, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { serviceContainer } from '../src/shared/ServiceContainer';
import type { Project } from '../src/domain/entities/Project';
import type { ProjectDetails as ProjectDetailsEntity } from '../src/domain/entities/ProjectDetails';

interface ProjectDetailsProps {
  projectId?: number;
  onClose?: () => void;
}

const PROJECT_DETAILS_MAP = {
  1: {
    fullDescription: 'معرض السلع الغذائية يوفر كل ما تحتاجه الأسر المحتاجة من المواد الغذائية الأساسية. نقدم شنط غذائية متنوعة تحتوي على الدقيق والسكر والزيت والأرز وغيرها من المواد الضرورية.',
    beneficiaries: '40,000 فرد شهرياً',
    location: 'جميع الفروع',
    frequency: 'مشروع دائم - توزيع شهري',
    details: [
      'توفير مواد غذائية أساسية عالية الجودة',
      'شنط غذائية متنوعة حسب احتياجات الأسرة',
      'توزيع عادل وشفاف',
      'متابعة مستمرة لجودة المواد',
    ],
  },
  2: {
    fullDescription: 'خدمة نقل المرضى تقدم سيارات مجهزة بالكامل لنقل المرضى غير القادرين على الحركة إلى المستشفيات والعيادات لتلقي العلاج اللازم بدون تكاليف إضافية.',
    beneficiaries: 'حالات يومية متعددة',
    location: 'محافظات الخدمة',
    frequency: 'خدمة يومية - 24 ساعة',
    details: [
      'سيارات مجهزة بأجهزة الإسعاف',
      'سائقون مدربون بكفاءة',
      'خدمة سريعة وموثوقة',
      'تغطية جميع المناطق المحيطة',
    ],
  },
  3: {
    fullDescription: 'مجمع الإصلاح الطبي هو صرح طبي متكامل يقدم خدمات طبية شاملة من عيادات تخصصية إلى عمليات جراحية. نسعى لتقديم الرعاية الصحية الأفضل برسوم رمزية أو مجانية للمحتاجين.',
    beneficiaries: '10,000 مريض شهرياً',
    location: 'مجمع الإصلاح الطبي',
    frequency: 'عمل دوري - 6 أيام/الأسبوع',
    details: [
      'عيادات متخصصة (قلب، جهاز هضمي، عام)',
      'غرف عمليات مجهزة بأحدث التقنيات',
      'فريق طبي متميز من الأطباء والممرضين',
      'أسعار مناسبة للفئات المحتاجة',
    ],
  },
  4: {
    fullDescription: 'مشروع رفيق النبي ﷺ يوفر كفالة شاملة للأيتام تغطي احتياجاتهم المادية والتعليمية والتربوية، مع متابعة دورية من قبل الأخصائيين الاجتماعيين.',
    beneficiaries: 'مئات الأيتام سنوياً',
    location: 'جميع الفروع',
    frequency: 'كفالة شهرية مستمرة',
    details: [
      'دعم مالي شهري منتظم',
      'دفع المصاريف الدراسية',
      'توفير الملابس والأغطية',
      'متابعة اجتماعية وتربوية مستمرة',
    ],
  },
  5: {
    fullDescription: 'إطعام الفول والعسل مشروع ضخم يهدف لتوفير وجبة إفطار مغذية لآلاف المستفيدين يومياً، خاصة الطلاب والعاملين والفئات المحتاجة.',
    beneficiaries: '30,000 مستفيد يومياً',
    location: 'مناطق متعددة',
    frequency: 'يومياً - طوال العام',
    details: [
      'وجبات إفطار مغذية عالية الجودة',
      'فول مطهو حسب المواصفات الصحية',
      'عسل نحل طبيعي 100%',
      'توزيع منظم وعادل',
    ],
  },
  6: {
    fullDescription: 'مشروع سقيا الماء يوفر المياه النظيفة للأسر المحرومة ويقدم مبردات مياه في الطرقات والأماكن العامة للمارة والمغتربين.',
    beneficiaries: 'آلاف يومياً',
    location: 'جميع المناطق',
    frequency: 'صدقة جارية مستمرة',
    details: [
      'توصيل المياه للمنازل البعيدة',
      'مبردات مياه عامة في الشوارع',
      'مياه معقمة وآمنة صحياً',
      'خدمة طوال السنة',
    ],
  },
  7: {
    fullDescription: 'مشروع تيسير الزواج يساعد الشباب والفتيات على الزواج بتوفير بعض الأجهزة والمستلزمات الضرورية، تحقيقاً لحديث النبي ﷺ في تيسير الزواج.',
    beneficiaries: 'مئات الأزواج سنوياً',
    location: 'جميع الفروع',
    frequency: 'موسمي - حسب الطلب',
    details: [
      'توفير الأجهزة المنزلية الأساسية',
      'مستلزمات الفراش والملابس',
      'دعم مالي لتغطية نفقات العرس',
      'استشارات اجتماعية قبل الزواج',
    ],
  },
  8: {
    fullDescription: 'بنك الدم الإلكتروني هو قاعدة بيانات متقدمة تجمع المتبرعين بالدم وتسهل توفير الدم للحالات الحرجة والعمليات العاجلة على مدار الساعة.',
    beneficiaries: 'حالات عاجلة يومية',
    location: 'مستشفيات الخدمة',
    frequency: '24/7 - على مدار السنة',
    details: [
      'قاعدة بيانات إلكترونية متطورة',
      'تسجيل المتبرعين بسهولة',
      'توفر دم فوري للحالات الحرجة',
      'معايير صحية عالية جداً',
    ],
  },
  9: {
    fullDescription: 'مشروع الأطراف الصناعية يوفر أطراف صناعية وأجهزة تعويضية لذوي الهمم، تمكيناً لهم من ممارسة حياتهم الطبيعية والاستقلالية.',
    beneficiaries: 'عشرات الحالات سنوياً',
    location: 'مراكز الخدمة',
    frequency: 'عند الحاجة - مستمر',
    details: [
      'أطراف صناعية حديثة وآمنة',
      'تقييم طبي دقيق قبل التركيب',
      'متابعة مستمرة بعد التركيب',
      'تدريب على الاستخدام الآمن',
    ],
  },
  10: {
    fullDescription: 'مشروع إعادة التدوير يستقبل الملابس القديمة والخردة ويعيد تدويرها وتوجيهها لصالح مشاريع المؤسسة، حماية للبيئة وتوفيراً للموارد.',
    beneficiaries: 'آلاف الأسر المستفيدة',
    location: 'مراكز التجميع',
    frequency: 'مستمر طوال السنة',
    details: [
      'استقبال الملابس والخردة',
      'فرز وتنظيف الملابس',
      'إعادة توزيع على المحتاجين',
      'حماية البيئة والموارد',
    ],
  },
  11: {
    fullDescription: 'مشروع بناء وترميم المنازل يقوم بإصلاح وبناء أسقف المنازل المتهالكة وتركيب الأبواب والشبابيك، حماية للأسر المحتاجة من العوامل الجوية.',
    beneficiaries: 'مئات الأسر سنوياً',
    location: 'مناطق متعددة',
    frequency: 'إنشائي - حسب الطلب',
    details: [
      'بناء أسقف قوية وآمنة',
      'تركيب أبواب وشبابيك',
      'إصلاح شامل للمنازل',
      'عمال مدربون وماهرون',
    ],
  },
  12: {
    fullDescription: 'مشروع كفالة طلاب العلم يدعم الطلاب غير القادرين بدفع المصاريف الدراسية والكتب والدورات التدريبية، استثماراً في المستقبل.',
    beneficiaries: 'آلاف الطلاب سنوياً',
    location: 'جميع المدارس والجامعات',
    frequency: 'دراسي - حسب السنة الدراسية',
    details: [
      'دفع كامل المصاريف الدراسية',
      'توفير الكتب والأدوات المدرسية',
      'دعم الدورات التدريبية',
      'متابعة تحصيل الطالب',
    ],
  },
  13: {
    fullDescription: 'مشروع دور التحفيظ والحضانات يسعى لإنشاء ورعاية حضانات ودور متخصصة في تحفيظ القرآن الكريم، مع تربية النشء تربية إسلامية صحيحة.',
    beneficiaries: 'آلاف الأطفال سنوياً',
    location: 'فروع متعددة',
    frequency: 'مستمر - طوال العام',
    details: [
      'تحفيظ القرآن الكريم',
      'حضانات آمنة وملائمة',
      'مربيات متدربات ومؤهلات',
      'برامج تربوية شاملة',
    ],
  },
};

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projectId = 1, onClose }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedProjectId, setSelectedProjectId] = useState<number>(id ? parseInt(id) : projectId);
  const [projectData, setProjectData] = useState<Project | null>(null);
  const [projectDetailsData, setProjectDetailsData] = useState<ProjectDetailsEntity | null>(null);
  const [loading, setLoading] = useState(true);

  // Get services from container
  const projectQueryService = serviceContainer.getProjectQueryService();
  const projectDetailsQueryService = serviceContainer.getProjectDetailsQueryService();

  // Load project data
  useEffect(() => {
    const loadProject = async () => {
      setLoading(true);
      try {
        const project = await projectQueryService.getProjectById(selectedProjectId);
        const details = await projectDetailsQueryService.getProjectDetails(selectedProjectId);
        setProjectData(project);
        setProjectDetailsData(details);
      } catch (error) {
        console.error('Error loading project:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProject();
  }, [selectedProjectId, projectQueryService, projectDetailsQueryService]);

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedProjectId, id]);

  if (loading || !projectData || !projectDetailsData) return null;

  const project = projectData.toDTO();
  const details = projectDetailsData.toDTO();

  if (!project || !details) return null;

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
    hover: { x: 5, transition: { type: 'spring', stiffness: 200 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    }),
    hover: { y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <motion.button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-gold mb-6 font-bold transition-colors"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <ArrowRight size={20} />
            العودة للمشاريع
          </motion.button>

          {/* Main Project Card */}
          <motion.div
            className="bg-white rounded-2xl overflow-hidden shadow-xl mb-8"
            variants={itemVariants}
          >
            <motion.div
              className="relative h-96 overflow-hidden"
              variants={imageVariants}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <motion.span
                    className="inline-block bg-brand-gold text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-3"
                    whileHover={{ scale: 1.1, rotate: 2 }}
                  >
                    {project.category}
                  </motion.span>
                  <motion.h1
                    className="text-4xl font-bold text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {project.title}
                  </motion.h1>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Grid */}
            <div className="p-8">
              <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" variants={containerVariants}>
                {[
                  {
                    icon: Users,
                    label: 'المستفيدون',
                    value: details.beneficiaries,
                    bg: 'bg-blue-50',
                    icon_color: 'text-blue-600',
                  },
                  {
                    icon: MapPin,
                    label: 'الموقع',
                    value: details.location,
                    bg: 'bg-green-50',
                    icon_color: 'text-green-600',
                  },
                  {
                    icon: Calendar,
                    label: 'التكرار',
                    value: details.frequency,
                    bg: 'bg-amber-50',
                    icon_color: 'text-amber-600',
                  },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className={`${stat.bg} p-6 rounded-lg border border-brand-blue/20`}
                    variants={cardVariants}
                    custom={i}
                    whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
                  >
                    <motion.div
                      className="flex items-center gap-3 mb-2"
                      whileHover={{ x: 5 }}
                    >
                      <stat.icon className={`${stat.icon_color}`} size={24} />
                      <span className="font-bold text-gray-600">{stat.label}</span>
                    </motion.div>
                    <motion.p className="text-2xl font-bold text-brand-blue">
                      {stat.value}
                    </motion.p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Description */}
              <motion.div className="mb-8" variants={itemVariants}>
                <motion.h2
                  className="text-2xl font-bold text-brand-blue mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  نبذة عن المشروع
                </motion.h2>
                <motion.p
                  className="text-gray-700 leading-relaxed text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {details.fullDescription}
                </motion.p>
              </motion.div>

              {/* Details List */}
              <motion.div className="mb-8" variants={itemVariants}>
                <motion.h3
                  className="text-xl font-bold text-brand-blue mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  مميزات المشروع
                </motion.h3>
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={containerVariants}>
                  {details.details.map((detail, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-transparent"
                      custom={index}
                      variants={cardVariants}
                      whileHover={{
                        y: -5,
                        boxShadow: '0 10px 25px rgba(21,128,61,0.1)',
                        borderColor: 'rgba(21,128,61,0.3)',
                      }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-brand-gold rounded-full mt-2 shrink-0"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ repeat: Infinity, duration: 2, delay: index * 0.1 }}
                      />
                      <p className="text-gray-700 font-medium">{detail}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* CTA */}
              <motion.div
                className="bg-gradient-to-r from-brand-blue to-green-700 p-8 rounded-xl text-white text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.02, boxShadow: '0 30px 60px rgba(21,128,61,0.3)' }}
              >
                <motion.h3
                  className="text-2xl font-bold mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  هل تريد المساهمة في هذا المشروع؟
                </motion.h3>
                <motion.p
                  className="mb-6 text-lg opacity-90"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.85 }}
                >
                  تبرعك سيحدث فرقاً حقيقياً في حياة الآلاف من المحتاجين
                </motion.p>
                <motion.button
                  className="bg-white text-brand-blue px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  تبرع الآن
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Other Projects Navigation */}
        <motion.div className="mb-8" variants={itemVariants}>
          <motion.h3
            className="text-2xl font-bold text-brand-blue mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
          >
            مشاريع أخرى
          </motion.h3>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" variants={containerVariants}>
            {PROJECTS.map((p, i) => (
              <motion.button
                key={p.id}
                onClick={() => navigate(`/project/${p.id}`)}
                className={`p-4 rounded-lg border-2 transition-all font-bold text-sm text-center cursor-pointer ${
                  selectedProjectId === p.id
                    ? 'bg-brand-blue text-white border-brand-blue shadow-lg'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-brand-blue/50 hover:bg-gray-50'
                }`}
                custom={i}
                variants={cardVariants}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                {p.title}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
