export const site = {
  labName: 'Li-lab',
  labNameZh: '李氏医学人工智能实验室',
  slogan: 'Medical AI for Real-world Biomedical Discovery',
  sloganZh: '面向真实世界生物医学发现的医学人工智能',
  intro:
    'Li-lab develops interpretable, data-efficient, and clinically grounded AI methods for computational pathology, multimodal biomedical data integration, and translational medical AI.',
  introZh:
    'Li-lab 致力于发展可解释、数据高效且面向真实临床场景的医学人工智能方法，重点关注计算病理、多源生物医学数据整合与转化医学人工智能。',
  email: 'li-lab@example.edu.cn',
  address: 'School of Biomedical Engineering, Example Medical University',
  addressZh: '示例医科大学 生物医学工程学院',
  city: 'Haikou, China',
  github: 'https://github.com/example-li-lab',
};

export const pi = {
  name: 'Prof. Ming Li',
  nameZh: '李明 教授',
  title: 'Principal Investigator',
  titleZh: '课题组负责人 / 教授 / 博士生导师',
  email: 'mingli@example.edu.cn',
  research:
    'Computational pathology, weakly supervised learning, interpretable medical AI, and real-world clinical data science.',
  researchZh:
    '计算病理、弱监督学习、可解释医学人工智能与真实世界临床数据科学。',
};

export const researchAreas = [
  {
    title: 'Computational Pathology',
    titleZh: '计算病理与全切片图像分析',
    icon: 'WSI',
    summary:
      'Weakly supervised and interpretable learning for whole-slide pathological images under real-world small-sample settings.',
    summaryZh:
      '面向真实世界小样本条件下的全切片病理图像弱监督学习、患者参照建模与可解释性分析。',
    keywords: ['Whole-slide image', 'MIL', 'Patient reference', 'Attention heatmap'],
  },
  {
    title: 'Biomedical Data Integration',
    titleZh: '多源生物医学数据整合',
    icon: 'DATA',
    summary:
      'Integrating pathology images, molecular profiles, clinical variables, and public biomedical resources for robust translational modeling.',
    summaryZh:
      '整合病理图像、分子特征、临床变量与公共生物医学资源，构建稳健的转化医学建模框架。',
    keywords: ['Multimodal learning', 'Clinical data', 'Molecular features', 'Real-world data'],
  },
  {
    title: 'Interpretable and Data-efficient AI',
    titleZh: '可解释与数据高效人工智能',
    icon: 'AI',
    summary:
      'Developing prototype-guided, domain-adaptive, and uncertainty-aware AI models for limited-label biomedical applications.',
    summaryZh:
      '发展原型引导、领域适配和不确定性建模方法，服务于有限标注条件下的生物医学智能分析。',
    keywords: ['Prototype learning', 'Domain adaptation', 'Small sample', 'Uncertainty'],
  },
];

export const members = [
  {
    name: 'Prof. Ming Li',
    role: 'Principal Investigator',
    focus: 'Medical AI, computational pathology, real-world clinical data science',
    avatar: '/images/members/avatar-pi.svg',
  },
  {
    name: 'Taylor Wang',
    role: 'MSc Student',
    focus: 'Patient-referenced weakly supervised learning for colorectal WSI analysis',
    avatar: '/images/members/avatar-student-1.svg',
  },
  {
    name: 'Yue Chen',
    role: 'MSc Student',
    focus: 'Drug synergy prediction and multimodal molecular representation learning',
    avatar: '/images/members/avatar-student-2.svg',
  },
  {
    name: 'Hao Lin',
    role: 'Undergraduate Researcher',
    focus: 'Medical image visualization and laboratory web systems',
    avatar: '/images/members/avatar-student-3.svg',
  },
];

export const projects = [
  {
    title: 'PRISM-MIL',
    subtitle: 'Patient-referenced interpretable stabilized MIL for WSI analysis',
    status: 'Active',
    summary:
      'A weakly supervised framework that uses paired normal mucosa as patient-specific reference for real-world small-sample colorectal whole-slide image analysis.',
    tags: ['WSI', 'MIL', 'CRC', 'Interpretable AI'],
  },
  {
    title: 'M4DR',
    subtitle: 'Multimodal modeling for drug response prediction',
    status: 'Manuscript',
    summary:
      'A multimodal framework integrating drug features, cellular profiles, pathway signals, and cross-domain transfer learning for precision oncology modeling.',
    tags: ['Drug response', 'Multimodal', 'Transfer learning'],
  },
  {
    title: 'Perinatal Mental Health AI',
    subtitle: 'Evidence synthesis and psychosocial risk modeling',
    status: 'Ongoing',
    summary:
      'Quantitative evidence synthesis and statistical modeling for perinatal mental distress, parent-infant bonding, and psychosocial protective factors.',
    tags: ['Meta-analysis', 'Public health', 'Psychosocial factors'],
  },
];

export const publications = [
  {
    year: 2026,
    title:
      'Patient-referenced weakly supervised adaptation for real-world small-sample gastrointestinal WSI analysis',
    authors: 'Taylor Wang, Yue Chen, Ming Li',
    venue: 'Under preparation',
    tags: ['Computational Pathology', 'WSI', 'Weak Supervision'],
  },
  {
    year: 2026,
    title:
      'Multimodal Four-Tower Drug Response Modeling with Cross-domain Representation Alignment',
    authors: 'Yue Chen, Taylor Wang, Ming Li',
    venue: 'Preprint in preparation',
    tags: ['Drug Response', 'Multimodal Learning'],
  },
  {
    year: 2025,
    title:
      'Network-based psychosocial profiling of stigma and fertility-related stress in reproductive health research',
    authors: 'Li-lab Collaborative Group',
    venue: 'Journal manuscript',
    tags: ['Public Health', 'Network Analysis'],
  },
];

export const news = [
  {
    date: '2026-06-22',
    title: 'Li-lab website project started',
    summary:
      'We started building a lightweight and maintainable academic homepage for Li-lab.',
  },
  {
    date: '2026-06-15',
    title: 'New computational pathology project launched',
    summary:
      'The group initiated a patient-referenced MIL project for real-world colorectal WSI analysis.',
  },
  {
    date: '2026-06-01',
    title: 'New real-world WSI cohort organized',
    summary:
      'A new local hospital cohort was curated for independent validation of computational pathology models.',
  },
  {
    date: '2026-05-20',
    title: 'Weekly journal club resumed',
    summary:
      'Li-lab resumed its weekly discussion on medical AI, computational pathology, and biomedical data science.',
  },
];
