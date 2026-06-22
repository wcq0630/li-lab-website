export const ui = {
  nav: {
    research: { zh: '研究方向', en: 'Research' },
    projects: { zh: '代表项目', en: 'Projects' },
    people: { zh: '团队成员', en: 'People' },
    publications: { zh: '论文成果', en: 'Publications' },
    news: { zh: '最新动态', en: 'News' },
    contact: { zh: '联系我们', en: 'Contact' },
  },
  buttons: {
    explore: { zh: '了解研究方向', en: 'Explore Research' },
    join: { zh: '加入我们', en: 'Join Us' },
    language: { zh: 'EN', en: '中文' },
  },
  sections: {
    researchEyebrow: { zh: 'Research Areas', en: 'Research Areas' },
    researchTitle: {
      zh: '面向医学与生命科学问题的智能计算研究',
      en: 'Intelligent computation for medicine and life sciences',
    },
    researchDesc: {
      zh: 'Li-lab 关注人工智能、生物信息学、药物组学和癌症系统生物学的交叉研究，强调方法创新、数据整合与医学转化价值。',
      en: 'Li-lab focuses on artificial intelligence, bioinformatics, pharmacogenomics, and cancer systems biology, with emphasis on methodological innovation, data integration, and translational value.',
    },
    projectsEyebrow: { zh: 'Featured Projects', en: 'Featured Projects' },
    projectsTitle: {
      zh: '围绕真实医学问题构建可验证模型',
      en: 'Building verifiable models for real biomedical questions',
    },
    peopleEyebrow: { zh: 'People', en: 'People' },
    peopleTitle: { zh: '团队成员', en: 'Team Members' },
    publicationsEyebrow: { zh: 'Publications', en: 'Publications' },
    publicationsTitle: {
      zh: '论文成果与在研方向',
      en: 'Publications and Ongoing Research',
    },
    newsEyebrow: { zh: 'News', en: 'News' },
    newsTitle: { zh: '实验室动态', en: 'Lab Updates' },
    contactEyebrow: { zh: 'Contact', en: 'Contact' },
    contactTitle: {
      zh: '欢迎交流、合作与加入',
      en: 'Open to collaboration and motivated students',
    },
  },
};

export const site = {
  labName: { zh: 'Li-lab', en: 'Li-lab' },
  labNameZh: {
    zh: '智能医学与生物信息学实验室',
    en: 'Laboratory for Intelligent Medicine and Bioinformatics',
  },
  slogan: {
    zh: '人工智能 · 生物信息学 · 药物组学 · 癌症系统生物学',
    en: 'Artificial Intelligence · Bioinformatics · Pharmacogenomics · Cancer Systems Biology',
  },
  heroTitle: {
    zh: '用人工智能理解疾病机制与药物反应',
    en: 'Using AI to understand disease mechanisms and drug response',
  },
  heroDescription: {
    zh: 'Li-lab 依托海南医科大学智能医学与技术学院，围绕机器学习、药物基因组学、药物信息学和癌症系统生物学开展交叉研究，致力于发展可解释、可验证、可转化的医学人工智能方法。',
    en: 'Li-lab is based at the School of Intelligent Medicine and Technology, Hainan Medical University. We develop interpretable and verifiable AI methods for machine learning, pharmacogenomics, pharmacoinformatics, and cancer systems biology.',
  },
  location: {
    zh: '海南医科大学 · 智能医学与技术学院',
    en: 'Hainan Medical University · School of Intelligent Medicine and Technology',
  },
  email: 'lijin@muhn.edu.cn',
  address: {
    zh: '海南医科大学 智能医学与技术学院（大数据研究中心）',
    en: 'School of Intelligent Medicine and Technology, Hainan Medical University',
  },
};

export const stats = [
  {
    value: 'AI',
    label: { zh: '人工智能与机器学习', en: 'AI and Machine Learning' },
  },
  {
    value: 'PGx',
    label: { zh: '药物组学与药物信息学', en: 'Pharmacogenomics and Pharmacoinformatics' },
  },
  {
    value: 'SYS',
    label: { zh: '癌症系统生物学', en: 'Cancer Systems Biology' },
  },
];

export const researchAreas = [
  {
    icon: 'AI',
    title: {
      zh: '机器学习与医学人工智能',
      en: 'Machine Learning and Medical AI',
    },
    description: {
      zh: '研究面向医学数据的机器学习方法，关注模型泛化、可解释性和真实场景中的可验证应用。',
      en: 'We develop machine-learning methods for biomedical data, focusing on generalization, interpretability, and real-world validation.',
    },
    bullets: [
      { zh: '医学数据智能建模', en: 'Intelligent modeling for medical data' },
      { zh: '可解释人工智能', en: 'Interpretable artificial intelligence' },
      { zh: '真实世界数据分析', en: 'Real-world data analysis' },
    ],
  },
  {
    icon: 'PGx',
    title: {
      zh: '药物组学与药物信息学',
      en: 'Pharmacogenomics and Pharmacoinformatics',
    },
    description: {
      zh: '围绕药物反应、药物组合和个体化用药问题，整合药物、基因、通路和表型数据进行计算建模。',
      en: 'We integrate drug, gene, pathway, and phenotype data to model drug response, drug combinations, and personalized therapy.',
    },
    bullets: [
      { zh: '药物-药物组合预测', en: 'Drug-drug combination prediction' },
      { zh: '药物基因组学分析', en: 'Pharmacogenomic analysis' },
      { zh: '精准用药辅助建模', en: 'Modeling for precision medication' },
    ],
  },
  {
    icon: 'SYS',
    title: {
      zh: '癌症系统生物学',
      en: 'Cancer Systems Biology',
    },
    description: {
      zh: '面向肿瘤发生发展与治疗反应，研究通路挖掘、表达数量性状位点和基因互作等系统层面问题。',
      en: 'We study cancer progression and treatment response through pathway mining, expression QTL analysis, and gene-gene interaction modeling.',
    },
    bullets: [
      { zh: '癌症风险通路挖掘', en: 'Cancer risk pathway mining' },
      { zh: 'Expression QTL 分析', en: 'Expression QTL analysis' },
      { zh: '基因-基因互作建模', en: 'Gene-gene interaction modeling' },
    ],
  },
];

export const projects = [
  {
    title: {
      zh: '药物-药物组合预测',
      en: 'Drug-drug Combination Prediction',
    },
    status: { zh: '重点方向', en: 'Major Direction' },
    description: {
      zh: '结合药物结构、药物靶点、细胞系特征和组学数据，构建药物协同效应预测模型，为精准用药和组合治疗提供计算支持。',
      en: 'We integrate drug structures, targets, cell-line features, and omics data to predict drug synergy and support precision combination therapy.',
    },
    tags: [
      { zh: '药物组学', en: 'Pharmacogenomics' },
      { zh: '药物信息学', en: 'Pharmacoinformatics' },
      { zh: '深度学习', en: 'Deep Learning' },
    ],
  },
  {
    title: {
      zh: '癌症风险通路挖掘',
      en: 'Cancer Risk Pathway Mining',
    },
    status: { zh: '持续推进', en: 'Ongoing' },
    description: {
      zh: '从多源生物医学数据中识别与癌症风险、疾病进展和治疗反应相关的关键通路和分子网络。',
      en: 'We identify key pathways and molecular networks associated with cancer risk, disease progression, and treatment response from multisource biomedical data.',
    },
    tags: [
      { zh: '癌症系统生物学', en: 'Cancer Systems Biology' },
      { zh: '通路分析', en: 'Pathway Analysis' },
      { zh: '网络挖掘', en: 'Network Mining' },
    ],
  },
  {
    title: {
      zh: '真实世界医学数据智能分析',
      en: 'AI Analysis of Real-world Medical Data',
    },
    status: { zh: '交叉合作', en: 'Collaborative' },
    description: {
      zh: '面向临床、公共数据库和医学影像等多类型数据，建立规范化、可解释、可复用的医学人工智能分析流程。',
      en: 'We build standardized, interpretable, and reusable AI workflows for clinical data, public databases, and medical images.',
    },
    tags: [
      { zh: '医学人工智能', en: 'Medical AI' },
      { zh: '数据整合', en: 'Data Integration' },
      { zh: '可解释建模', en: 'Interpretable Modeling' },
    ],
  },
];

export const members = [
  {
    name: { zh: '李晋', en: 'Jin Li' },
    role: {
      zh: '博士，教授，博士生导师',
      en: 'PhD, Professor, Doctoral Supervisor',
    },
    focus: {
      zh: '长期从事人工智能与生物信息学研究，主要方向包括机器学习、药物基因组学、药物信息学和癌症系统生物学。',
      en: 'Professor Li focuses on artificial intelligence and bioinformatics, with research interests in machine learning, pharmacogenomics, pharmacoinformatics, and cancer systems biology.',
    },
    avatar: '/images/members/lijin.jpg',
  },
  {
    name: { zh: '王丽美', en: 'Limei Wang' },
    role: {
      zh: '博士，教授',
      en: 'PhD, Professor',
    },
    focus: {
      zh: '主要从事医学大数据与生物信息学相关研究，研究方向包括癌症系统生物学和药物组学信息学。',
      en: 'Professor Wang works on medical big data and bioinformatics, with a focus on cancer systems biology and pharmacogenomic informatics.',
    },
    avatar: '/images/members/wanglimei.jpg',
  },
  {
    name: { zh: '研究生团队', en: 'Graduate Students' },
    role: {
      zh: '硕士 / 博士研究生',
      en: 'MSc / PhD Students',
    },
    focus: {
      zh: '围绕医学人工智能、药物协同预测、生物信息学和计算病理等方向开展课题研究。',
      en: 'Graduate students work on medical AI, drug synergy prediction, bioinformatics, computational pathology, and related interdisciplinary topics.',
    },
    avatar: '/images/members/avatar-student-2.svg',
  },
];

export const publications = [
  {
    year: '2026',
    title: {
      zh: '基于多源特征融合的药物组合效应预测研究',
      en: 'Drug Combination Effect Prediction through Multisource Feature Fusion',
    },
    authors: 'Li-lab members',
    venue: { zh: '在研稿件', en: 'Manuscript in preparation' },
    tags: [
      { zh: '药物组合', en: 'Drug Combination' },
      { zh: '药物组学', en: 'Pharmacogenomics' },
      { zh: '机器学习', en: 'Machine Learning' },
    ],
  },
  {
    year: '2026',
    title: {
      zh: '面向真实世界医学数据的可解释人工智能建模流程',
      en: 'Interpretable AI Workflow for Real-world Biomedical Data',
    },
    authors: 'Li-lab members',
    venue: { zh: '在研稿件', en: 'Manuscript in preparation' },
    tags: [
      { zh: '医学人工智能', en: 'Medical AI' },
      { zh: '真实世界数据', en: 'Real-world Data' },
    ],
  },
];

export const news = [
  {
    date: '2026-06-22',
    title: {
      zh: 'Li-lab 实验室主页上线',
      en: 'Li-lab website is online',
    },
    summary: {
      zh: '实验室主页完成初版部署，支持中英文切换、研究方向展示、团队介绍和动态更新。',
      en: 'The Li-lab website has been deployed with bilingual support, research highlights, team introduction, and lab updates.',
    },
  },
  {
    date: '2026-06-18',
    title: {
      zh: '药物组合预测方向持续推进',
      en: 'Drug combination prediction project continues',
    },
    summary: {
      zh: '团队围绕药物特征整合、细胞系响应建模和药物关系表达开展模型优化。',
      en: 'The team is improving models for drug feature integration, cell-line response modeling, and drug-drug relation representation.',
    },
  },
];