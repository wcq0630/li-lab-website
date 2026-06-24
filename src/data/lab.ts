export const ui = {
  nav: {
    research: { zh: '研究方向', en: 'Research' },
    people: { zh: '团队成员', en: 'People' },
    publications: { zh: '论文成果', en: 'Publications' },
    news: { zh: '团队日常', en: 'Lab Life' },
    contact: { zh: '联系我们', en: 'Contact' },
  },
  buttons: {
    explore: { zh: '了解研究方向', en: 'Explore Research' },
    join: { zh: '查看论文成果', en: 'View Publications' },
    language: { zh: 'EN', en: '中文' },
  },
  sections: {
    researchEyebrow: { zh: 'Research Areas', en: 'Research Areas' },
    researchTitle: {
      zh: '面向药物发现、组学解析与数字病理的智能计算研究',
      en: 'Intelligent computation for drug discovery, omics, and digital pathology',
    },
    researchDesc: {
      zh: 'LiJin Lab 关注 AI 药物发现、单细胞多组学和数字病理的交叉研究，强调方法创新、数据整合与医学转化价值。',
      en: 'LiJin Lab focuses on AI drug discovery, single-cell multi-omics, and digital pathology, with emphasis on methodological innovation, data integration, and translational value.',
    },
    peopleEyebrow: { zh: 'People', en: 'People' },
    peopleTitle: { zh: '团队成员', en: 'Team Members' },
    publicationsEyebrow: { zh: 'Publications', en: 'Publications' },
    publicationsTitle: {
      zh: '论文成果',
      en: 'Research Publications',
    },
    newsEyebrow: { zh: 'News', en: 'News' },
    newsTitle: { zh: '团队日常', en: 'Lab Life' },
    contactEyebrow: { zh: 'Contact', en: 'Contact' },
    contactTitle: {
      zh: '欢迎报考、交流与合作',
      en: 'Open to applications, collaboration and exchange',
    },
  },
};

export const site = {
  labName: { zh: 'LiJin Lab', en: 'LiJin Lab' },
  labNameZh: {
    zh: 'AI药物发现、单细胞多组学和病理实验室',
    en: 'AI Drug Discovery, Omics and Pathology Lab',
  },
  slogan: {
    zh: 'AI药物发现 · 单细胞多组学 · 数字病理',
    en: 'AI Drug Discovery · Single-cell Multi-omics · Digital Pathology',
  },
  heroTitle: {
    zh: 'AI药物发现、单细胞多组学\n和数字病理团队',
    en: 'AI Drug Discovery,\nSingle-cell Multi-omics and Digital Pathology',
  },
  heroDescription: {
    zh: '本研究团队长期致力于人工智能在生物医学大数据领域的研究，围绕 AI 药物发现、单细胞多组学和数字病理开展方法创新、资源建设与临床转化探索。',
    en: 'The team focuses on artificial intelligence for biomedical big data, with research in AI drug discovery, single-cell multi-omics, digital pathology, resource construction and translational exploration.',
  },
  location: {
    zh: '海南医科大学 · 智能医学与技术学院 · Li lab',
    en: 'Hainan Medical University · School of Intelligent Medicine and Technology · Li lab',
  },
  email: 'lijin@muhn.edu.cn',
  address: {
    zh: '海南省海口市龙华区椰海大道234号 海南医科大学润深楼408-2',
    en: 'Room 408-2, Runshen Building, Hainan Medical University, 234 Yehai Avenue, Longhua District, Haikou, Hainan',
  },
  unit: {
    zh: '海南医科大学（海南省医学科学院）智能医学与技术学院',
    en: 'School of Intelligent Medicine and Technology, Hainan Medical University / Hainan Academy of Medical Sciences',
  },
};

export const stats = [
  {
    value: '5',
    label: { zh: '教师', en: 'Faculty Members' },
  },
  {
    value: '1',
    label: { zh: '博士研究生', en: 'PhD Student' },
  },
  {
    value: '11',
    label: { zh: '硕士研究生', en: 'Master Students' },
  },
  {
    value: '60+',
    label: { zh: 'SCI论文', en: 'SCI Publications' },
  },
];

export const researchAreas = [
  {
    icon: 'AI',
    title: {
      zh: 'AI药物发现',
      en: 'AI Drug Discovery',
    },
    description: {
      zh: '针对药物异质性与药物互作等临床药物治疗挑战，结合药物组学、转录组、蛋白质等组学数据，开展药物响应预测、多组学整合驱动的异质性机制解析、药物互作系统建模与风险预警、人工智能辅助个体化预测和药物重定位研究。',
      en: 'We study pharmacological heterogeneity and drug-drug interactions by integrating pharmacogenomic, transcriptomic and proteomic data for drug response prediction, heterogeneity mechanism analysis, DDI modeling, risk warning, personalized prediction and drug repurposing.',
    },
    bullets: [
      { zh: '药物响应预测与个体化用药建模', en: 'Drug response and personalized medication modeling' },
      { zh: '药物互作建模与风险预警', en: 'Drug-drug interaction modeling and risk warning' },
      { zh: '药物重定位与组合治疗预测', en: 'Drug repurposing and combination therapy prediction' },
    ],
  },
  {
    icon: 'SC',
    title: {
      zh: '单细胞多组学',
      en: 'Single-cell Multi-omics',
    },
    description: {
      zh: '基于单细胞转录组学、免疫组库测序、染色质可及性测序等多维度数据，在单细胞分辨率下解析肿瘤免疫微环境中的细胞组成、功能状态、受体多样性、细胞间互作及空间分布规律。',
      en: 'We use single-cell transcriptomics, immune repertoire sequencing and chromatin accessibility data to characterize cell composition, functional states, receptor diversity, cell-cell interactions and spatial organization in tumor immune microenvironments.',
    },
    bullets: [
      { zh: '肿瘤免疫微环境精细图谱绘制', en: 'Fine atlas of tumor immune microenvironments' },
      { zh: '细胞异质性、功能状态与互作解析', en: 'Cell heterogeneity, states and interaction analysis' },
      { zh: '免疫治疗生物标志物与联合策略探索', en: 'Immunotherapy biomarkers and combination strategies' },
    ],
  },
  {
    icon: 'DP',
    title: {
      zh: '数字病理',
      en: 'Digital Pathology',
    },
    description: {
      zh: '通过全玻片数字图像、人工智能、大数据和云计算等技术，开展 AI 驱动的病理图像智能分析、多模态数据融合与生物标志物发现、临床转化与智慧医疗应用研究。',
      en: 'We combine whole-slide images, AI, big data and cloud computing for intelligent pathology image analysis, multimodal data fusion, biomarker discovery, clinical translation and smart healthcare applications.',
    },
    bullets: [
      { zh: '全玻片图像智能分析', en: 'Whole-slide image analysis' },
      { zh: '病理图像-组学多模态融合', en: 'Pathology image-omics multimodal fusion' },
      { zh: '临床转化与智慧医疗应用', en: 'Clinical translation and smart healthcare applications' },
    ],
  },
];

const defaultMemberAvatar = '/images/members/any.jpg';
const digitalPathologyTopic = {
  zh: '数字病理',
  en: 'Digital Pathology',
};

const makeStudentMember = (
  category: string,
  nameZh: string,
  nameEn: string,
  slug: string,
  roleZh: string,
  roleEn: string,
  avatar = defaultMemberAvatar,
  focusZh = '研究课题：数字病理。围绕病理图像智能分析、多模态数据融合与生物医学大数据方向开展课题训练，具体内容后续补充。',
  focusEn = 'Research topic: Digital Pathology. The detailed research profile will be completed later.'
) => ({
  slug,
  category,
  name: { zh: nameZh, en: nameEn },
  role: { zh: roleZh, en: roleEn },
  topic: digitalPathologyTopic,
  focus: {
    zh: focusZh,
    en: focusEn,
  },
  highlights: ['数字病理', '智能医学', '课题待补充'],
  avatar,
});

export const members = [
  {
    slug: 'jin-li',
    category: 'PI',
    name: { zh: '李晋', en: 'Jin Li' },
    role: {
      zh: '博士，教授，博士生导师，海南省拔尖人才',
      en: 'PhD, Professor, Doctoral Supervisor',
    },
    focus: {
      zh: '海南医科大学智能医学与技术学院（大数据研究中心）副院长，曾留学美国印第安纳大学和俄亥俄州立大学。长期从事人工智能和生物信息学教学与科研，研究方向包括机器学习、人工智能及其在药物基因组学、药物信息学和癌症系统生物学中的应用。',
      en: 'Professor Li works on artificial intelligence and bioinformatics, including machine learning, pharmacogenomics, pharmacoinformatics and cancer systems biology.',
    },
    topic: digitalPathologyTopic,
    highlights: ['药物-药物组合预测', '癌症风险通路挖掘', 'Expression QTL', '基因-基因互作'],
    email: 'lijin@muhn.edu.cn',
    avatar: '/images/members/lijin.jpg',
  },
  {
    slug: 'limei-wang',
    category: 'PI',
    name: { zh: '王丽美', en: 'Limei Wang' },
    role: {
      zh: '博士，教授，海南省E类人才',
      en: 'PhD, Professor',
    },
    focus: {
      zh: '曾留学美国印第安纳大学和俄亥俄州立大学，从事医学大数据生物信息学相关研究，主要研究方向为癌症系统生物学和药物组学信息学。以第一作者或通讯作者身份发表SCI论文20余篇，主持2项海南省自然科学基金。',
      en: 'Professor Wang works on medical big data and bioinformatics, with interests in cancer systems biology and pharmacogenomic informatics.',
    },
    topic: digitalPathologyTopic,
    highlights: ['癌症系统生物学', '药物组学信息学', '医学大数据', '生物信息学'],
    avatar: '/images/members/wanglimei.jpg',
  },
  {
    slug: 'huirui-han',
    category: 'PI',
    name: { zh: '韩惠蕊', en: 'Huirui Han' },
    role: {
      zh: '博士，讲师',
      en: 'PhD, Lecturer',
    },
    focus: {
      zh: '现任智能医学与技术学院讲师，主要研究方向为智能医学，包括医学人工智能与深度学习、临床医学数据挖掘、病理图像智能识别等。主持海南省自然科学基金1项，发表SCI论文十余篇，指导本科生科研竞赛获省级以上奖励多项。',
      en: 'Research focuses on intelligent medicine, medical AI and deep learning, clinical data mining, and intelligent pathology image recognition.',
    },
    topic: digitalPathologyTopic,
    highlights: ['数字病理', '医学人工智能', '深度学习', '病理图像识别'],
    avatar: defaultMemberAvatar,
  },
  {
    slug: 'shengnan-guo',
    category: 'PI',
    name: { zh: '郭胜男', en: 'Shengnan Guo' },
    role: {
      zh: '教师，肿瘤生物学与生物医学大数据方向',
      en: 'Faculty Member',
    },
    focus: {
      zh: '聚焦肿瘤生物学与生物医学大数据分析研究，主要围绕肿瘤微环境细胞互作机制、空间异质性演化规律及免疫治疗应答与耐药调控网络开展研究。',
      en: 'Research focuses on tumor biology and biomedical big data, including tumor microenvironment interactions, spatial heterogeneity, immunotherapy response and resistance networks.',
    },
    topic: digitalPathologyTopic,
    highlights: ['数字病理', '肿瘤微环境', '空间异质性', '免疫治疗应答'],
    avatar: '/images/members/gsn.jpg',
  },
  makeStudentMember('博士研究生', '陈正鑫', 'Zhengxin Chen', 'zhengxin-chen', '博士研究生', 'PhD Student', '/images/members/czx.jpg'),
  makeStudentMember('研三', '刘新颖', 'Xinying Liu', 'xinying-liu', '硕士研究生 / 研三', 'MSc Student, Year 3'),
  makeStudentMember('研三', '王学峰', 'Xuefeng Wang', 'xuefeng-wang', '硕士研究生 / 研三', 'MSc Student, Year 3', '/images/members/wxf.jpg'),
  makeStudentMember('研三', '张瑞杰', 'Ruijie Zhang', 'ruijie-zhang', '硕士研究生 / 研三', 'MSc Student, Year 3', '/images/members/zrj.jpg'),
  makeStudentMember(
    '研二',
    '陈建',
    'Jian Chen',
    'jian-chen', 
    '硕士研究生 / 研二',
    'MSc Student, Year 2',
    '/images/members/cj.png',
    '研究课题：药物微观世界的探究，研三核动力牛马。'
  ),
  makeStudentMember('研二', '蔡幸君', 'Xingjun Cai', 'xingjun-cai', '硕士研究生 / 研二', 'MSc Student, Year 2'),
  makeStudentMember('研一', '郭婷婷', 'Tingting Guo', 'tingting-guo', '硕士研究生 / 研一', 'MSc Student, Year 1', '/images/members/gtt.jpg'),
  makeStudentMember('研一', '邹大宇', 'Dayu Zou', 'dayu-zou', '硕士研究生 / 研一', 'MSc Student, Year 1', '/images/members/zdy.jpg'),
  makeStudentMember(
    '研一',
    '吉家宏',
    'Jiahong Ji',
    'jiahong-ji',
    '硕士研究生 / 研一',
    'MSc Student, Year 1',
    '/images/members/jjh.jpg',
    '研究课题：医学影像与多组学数据融合分析，重点关注慢性肾病等复杂疾病的分子机制、疾病异质性及精准分层研究，利用MRI、病理影像、空间转录组和单细胞组学等多模态数据探索疾病进展规律与潜在治疗靶点。'
  ),
  makeStudentMember('研一', '刘禹希', 'Yuxi Liu', 'yuxi-liu', '硕士研究生 / 研一', 'MSc Student, Year 1', '/images/members/lyx.jpg'),
  makeStudentMember(
    '研一',
    '王昌骐',
    'Changqi Wang',
    'changqi-wang',
    '硕士研究生 / 研一',
    'MSc Student, Year 1',
    '/images/members/wcq.jpg',
    '研究课题：主要从事全切片病理图像（WSI）的人工智能分析研究，重点关注真实医院小样本场景下的弱监督学习、患者参照式建模与可解释病理图像分类。'
  ),
  makeStudentMember('研一', '谢欣宜', 'Xinyi Xie', 'xinyi-xie', '硕士研究生 / 研一', 'MSc Student, Year 1', '/images/members/xxy.jpg'),
];

export const publications = [
  {
    year: '2025',
    title: {
      zh: 'MK-NMF: a novel multiple kernel-based non-negative matrix factorization model to mine synergistic drug combinations in cell lines.',
      en: 'MK-NMF: a novel multiple kernel-based non-negative matrix factorization model to mine synergistic drug combinations in cell lines.',
    },
    authors: 'Li T#, Han H#, Chen J, Feng D, Chen Z, Wang X, Liu X, Zhang R, Wang Q, Li X, Li B*, Wang L*, Li J*.',
    venue: { zh: 'Current Bioinformatics. 2025.', en: 'Current Bioinformatics. 2025.' },
    link: 'https://www.eurekaselect.com/journal/23/current-bioinformatics',
    representative: true,
    tags: [
      { zh: 'AI药物发现', en: 'AI Drug Discovery' },
      { zh: '医学AI', en: 'Medical AI' },
    ],
  },
  {
    year: '2025',
    title: {
      zh: 'HCDT 2.0: A Highly Confident Drug-Target Database for Experimentally Validated Genes, RNAs, and Pathways.',
      en: 'HCDT 2.0: A Highly Confident Drug-Target Database for Experimentally Validated Genes, RNAs, and Pathways.',
    },
    authors: 'Liu X#, Feng D#, Chen J, Li T, Wang X, Zhang R, Chen J, Cai X, Han H, Yu L, Li X, Li B, Wang L*, Li J*.',
    venue: { zh: 'Scientific Data. 2025 Apr 25;12(1):695.', en: 'Scientific Data. 2025 Apr 25;12(1):695.' },
    doi: '10.1038/s41597-025-04981-2',
    link: 'https://doi.org/10.1038/s41597-025-04981-2',
    representative: true,
    tags: [
      { zh: 'AI药物发现', en: 'AI Drug Discovery' },
      { zh: '生物信息学', en: 'Bioinformatics' },
    ],
  },
  {
    year: '2025',
    title: {
      zh: 'Prediction of cancer cell line-specific synergistic drug combinations based on multi-omics data.',
      en: 'Prediction of cancer cell line-specific synergistic drug combinations based on multi-omics data.',
    },
    authors: 'Chen J, Han H, Li L, Chen Z, Liu X, Li T, Wang X, Wang Q, Zhang R, Feng D, Yu L, Li X, Wang L, Li B*, Li J*.',
    venue: { zh: 'PeerJ. 2025 Feb 25;13:e19078.', en: 'PeerJ. 2025 Feb 25;13:e19078.' },
    doi: '10.7717/peerj.19078',
    link: 'https://doi.org/10.7717/peerj.19078',
    representative: true,
    tags: [
      { zh: 'AI药物发现', en: 'AI Drug Discovery' },
      { zh: '单细胞多组学', en: 'Single-cell Multi-omics' },
    ],
  },
  {
    year: '2025',
    title: {
      zh: 'Enhancer RNA in cancer: identification, expression, resources, relationship with immunity, drugs, and prognosis.',
      en: 'Enhancer RNA in cancer: identification, expression, resources, relationship with immunity, drugs, and prognosis.',
    },
    authors: 'Zhang R, Chen Z, Li T, Feng D, Liu X, Wang X, Han H, Yu L, Li X, Li B*, Wang L*, Li J*.',
    venue: { zh: 'Briefings in Functional Genomics. 2025 Jan 15;24:elaf007.', en: 'Briefings in Functional Genomics. 2025 Jan 15;24:elaf007.' },
    doi: '10.1093/bfgp/elaf007',
    link: 'https://doi.org/10.1093/bfgp/elaf007',
    representative: true,
    tags: [
      { zh: '生物信息学', en: 'Bioinformatics' },
      { zh: '系统生物学', en: 'Systems Biology' },
    ],
  },
  {
    year: '2024',
    title: {
      zh: 'Paired single-B-cell transcriptomics and receptor sequencing reveal activation states and clonal signatures that characterize B cells in acute myeloid leukemia.',
      en: 'Paired single-B-cell transcriptomics and receptor sequencing reveal activation states and clonal signatures that characterize B cells in acute myeloid leukemia.',
    },
    authors: 'Guo S, Mohan GS, Wang B, Li T, Daver N, Zhao Y, Reville PK, Hao D, Abbas HA.',
    venue: { zh: 'Journal for ImmunoTherapy of Cancer. 2024 Feb 28.', en: 'Journal for ImmunoTherapy of Cancer. 2024 Feb 28.' },
    link: 'https://jitc.bmj.com/search/Paired%20single-B-cell%20transcriptomics%20and%20receptor%20sequencing%20reveal%20activation%20states',
    tags: [
      { zh: '单细胞多组学', en: 'Single-cell Multi-omics' },
    ],
  },
  {
    year: '2024',
    title: {
      zh: 'Integrated single-cell transcriptome and TCR profiles reveal interferon signaling convergence associated with immunotherapy response in Hepatocellular Carcinoma.',
      en: 'Integrated single-cell transcriptome and TCR profiles reveal interferon signaling convergence associated with immunotherapy response in Hepatocellular Carcinoma.',
    },
    authors: 'Li T#, Guo S#, Xu C#, Zhang M, Lyu C, Xu H, Hou Z, Zhang M, Li X, Ren J, Liu C, Kong D, Hao D, Wang G.',
    venue: { zh: 'Journal for ImmunoTherapy of Cancer. 2024 Nov 24.', en: 'Journal for ImmunoTherapy of Cancer. 2024 Nov 24.' },
    link: 'https://jitc.bmj.com/search/Integrated%20single-cell%20transcriptome%20and%20TCR%20profiles%20reveal%20interferon%20signaling%20convergence',
    tags: [
      { zh: '单细胞多组学', en: 'Single-cell Multi-omics' },
      { zh: '系统生物学', en: 'Systems Biology' },
    ],
  },
  {
    year: '2022',
    title: {
      zh: 'Prognostic Implications and Immune Infiltration Characteristics of Chromosomal Instability-Related Dysregulated CeRNA in Lung Adenocarcinoma.',
      en: 'Prognostic Implications and Immune Infiltration Characteristics of Chromosomal Instability-Related Dysregulated CeRNA in Lung Adenocarcinoma.',
    },
    authors: 'Guo S#, Li T#, Xu D#, Xu J, Wang H, Li J, Bi X, Cao M, Xu Z, Xia Q, Cui Y, Li K.',
    venue: { zh: 'Frontiers in Molecular Biosciences. 2022 Mar 28.', en: 'Frontiers in Molecular Biosciences. 2022 Mar 28.' },
    link: 'https://www.frontiersin.org/search?query=Prognostic%20Implications%20and%20Immune%20Infiltration%20Characteristics%20of%20Chromosomal%20Instability-Related%20Dysregulated%20CeRNA%20in%20Lung%20Adenocarcinoma',
    tags: [
      { zh: '生物信息学', en: 'Bioinformatics' },
      { zh: '系统生物学', en: 'Systems Biology' },
    ],
  },
  {
    year: '2022',
    title: {
      zh: 'HCDT: an integrated highly confident drug-target resource.',
      en: 'HCDT: an integrated highly confident drug-target resource.',
    },
    authors: 'Chen J, Chen Z, Chen R, Feng D, Li T, Han H, Bi X, Wang Z, Li K, Li Y, Li X, Wang L*, Li J*.',
    venue: { zh: 'Database (Oxford). 2022 Nov 24;2022:baac101.', en: 'Database (Oxford). 2022 Nov 24;2022:baac101.' },
    doi: '10.1093/database/baac101',
    link: 'https://doi.org/10.1093/database/baac101',
    tags: [
      { zh: 'AI药物发现', en: 'AI Drug Discovery' },
      { zh: '生物信息学', en: 'Bioinformatics' },
    ],
  },
  {
    year: '2021',
    title: {
      zh: 'DysPIA: A Novel Dysregulated Pathway Identification Analysis Method.',
      en: 'DysPIA: A Novel Dysregulated Pathway Identification Analysis Method.',
    },
    authors: 'Wang L, Xie W, Li K, Wang Z, Li X, Feng W*, Li J*.',
    venue: { zh: 'Frontiers in Genetics. 2021 Jul 5;12:647653.', en: 'Frontiers in Genetics. 2021 Jul 5;12:647653.' },
    doi: '10.3389/fgene.2021.647653',
    link: 'https://doi.org/10.3389/fgene.2021.647653',
    tags: [
      { zh: '生物信息学', en: 'Bioinformatics' },
      { zh: '系统生物学', en: 'Systems Biology' },
    ],
  },
  {
    year: '2020',
    title: {
      zh: 'Essentiality and Transcriptome-Enriched Pathway Scores Predict Drug-Combination Synergy.',
      en: 'Essentiality and Transcriptome-Enriched Pathway Scores Predict Drug-Combination Synergy.',
    },
    authors: 'Li J, Huo Y, Wu X, Liu E, Zeng Z, Tian Z, Fan K, Stover D, Cheng L, Li L*.',
    venue: { zh: 'Biology (Basel). 2020 Sep 7;9(9):278.', en: 'Biology (Basel). 2020 Sep 7;9(9):278.' },
    doi: '10.3390/biology9090278',
    link: 'https://doi.org/10.3390/biology9090278',
    tags: [
      { zh: 'AI药物发现', en: 'AI Drug Discovery' },
      { zh: '系统生物学', en: 'Systems Biology' },
    ],
  },
  {
    year: '2019',
    title: {
      zh: 'Identification of Alternatively-Activated Pathways between Primary Breast Cancer and Liver Metastatic Cancer Using Microarray Data.',
      en: 'Identification of Alternatively-Activated Pathways between Primary Breast Cancer and Liver Metastatic Cancer Using Microarray Data.',
    },
    authors: 'Wang L#, Li J#, Liu E, Kinnebrew G, Zhang X, Stover D, Huo Y, Zeng Z, Jiang W, Cheng L, Feng W*, Li L*.',
    venue: { zh: 'Genes (Basel). 2019 Sep 25;10(10):753.', en: 'Genes (Basel). 2019 Sep 25;10(10):753.' },
    doi: '10.3390/genes10100753',
    link: 'https://doi.org/10.3390/genes10100753',
    tags: [
      { zh: '生物信息学', en: 'Bioinformatics' },
      { zh: '系统生物学', en: 'Systems Biology' },
    ],
  },
  {
    year: '2016',
    title: {
      zh: 'eSNPO: An eQTL-based SNP Ontology and SNP functional enrichment analysis platform.',
      en: 'eSNPO: An eQTL-based SNP Ontology and SNP functional enrichment analysis platform.',
    },
    authors: 'Li J, Wang L, Jiang T, Wang J, Li X, Liu X, Wang C, Teng Z, Zhang R, Lv H, Guo M.',
    venue: { zh: 'Scientific Reports. 2016 Jul 29;6:30595.', en: 'Scientific Reports. 2016 Jul 29;6:30595.' },
    doi: '10.1038/srep30595',
    link: 'https://doi.org/10.1038/srep30595',
    tags: [
      { zh: '生物信息学', en: 'Bioinformatics' },
      { zh: '系统生物学', en: 'Systems Biology' },
    ],
  },
  {
    year: '2015',
    title: {
      zh: 'A gene-based information gain method for detecting gene-gene interactions in case-control studies.',
      en: 'A gene-based information gain method for detecting gene-gene interactions in case-control studies.',
    },
    authors: 'Li J, Huang D, Guo M, Liu X, Wang C, Teng Z, Zhang R, Jiang Y, Lv H, Wang L.',
    venue: { zh: 'European Journal of Human Genetics. 2015 Nov;23(11):1566-72.', en: 'European Journal of Human Genetics. 2015 Nov;23(11):1566-72.' },
    doi: '10.1038/ejhg.2015.16',
    link: 'https://doi.org/10.1038/ejhg.2015.16',
    tags: [
      { zh: '生物信息学', en: 'Bioinformatics' },
      { zh: '系统生物学', en: 'Systems Biology' },
    ],
  },
  {
    year: '2025',
    title: {
      zh: 'Prediction of Moderate-to-Severe Sepsis-Associated Acute Kidney Injury Using a Dual-Timepoint Machine Learning Model: Development, Multiregional Validation, and Clinical Deployment Study.',
      en: 'Prediction of Moderate-to-Severe Sepsis-Associated Acute Kidney Injury Using a Dual-Timepoint Machine Learning Model: Development, Multiregional Validation, and Clinical Deployment Study.',
    },
    authors: 'Ge X, Chen W, Shi J, Zhang J, Tai H, Zhang Y, Wang B, Liu W, Chen S, Han H*.',
    venue: { zh: 'Journal of Medical Internet Research. 2025 Sep 30;27:e73840.', en: 'Journal of Medical Internet Research. 2025 Sep 30;27:e73840.' },
    doi: '10.2196/73840',
    link: 'https://doi.org/10.2196/73840',
    tags: [
      { zh: '医学AI', en: 'Medical AI' },
    ],
  },
  {
    year: '2024',
    title: {
      zh: 'RNA-RBP interactions recognition using multi-label learning and feature attention allocation.',
      en: 'RNA-RBP interactions recognition using multi-label learning and feature attention allocation.',
    },
    authors: 'Han H, Talpur B A, Liu W, et al.',
    venue: { zh: 'Journal of Cloud Computing. 2024;13(1).', en: 'Journal of Cloud Computing. 2024;13(1).' },
    doi: '10.1186/s13677-024-00612-0',
    link: 'https://doi.org/10.1186/s13677-024-00612-0',
    tags: [
      { zh: '医学AI', en: 'Medical AI' },
      { zh: '生物信息学', en: 'Bioinformatics' },
    ],
  },
  {
    year: '2018',
    title: {
      zh: 'A Clinical Decision Support Framework for Heterogeneous Data Sources.',
      en: 'A Clinical Decision Support Framework for Heterogeneous Data Sources.',
    },
    authors: 'Huang M, Han H, Li L, et al.',
    venue: { zh: 'IEEE Journal of Biomedical and Health Informatics. 2018.', en: 'IEEE Journal of Biomedical and Health Informatics. 2018.' },
    doi: '10.1109/JBHI.2018.2846626',
    link: 'https://doi.org/10.1109/JBHI.2018.2846626',
    tags: [
      { zh: '医学AI', en: 'Medical AI' },
    ],
  },
];

export const labLife = [
  {
    year: '2026',
    title: {
      zh: '2026届毕业合影',
      en: 'Graduation Photo 2026',
    },
    summary: {
      zh: '毕业季的团队合影，记录课题组共同成长、并肩前行的时刻。',
      en: 'A graduation season group photo capturing a shared moment of growth and teamwork.',
    },
    image: '/images/lab/graduation-2026-web.jpg',
    feature: true,
  },
  {
    year: '2025',
    title: {
      zh: '2025届毕业合影',
      en: 'Graduation Photo 2025',
    },
    summary: {
      zh: '近年毕业合影，保留属于课题组的阶段性记忆。',
      en: 'A recent graduation photo preserving one of the lab’s milestone memories.',
    },
    image: '/images/lab/graduation-2025.png',
    feature: false,
  },
];

export const news = [
  {
    date: '2026-06-22',
    title: {
      zh: 'LiJin Lab 课题组主页上线',
      en: 'LiJin Lab website is online',
    },
    summary: {
      zh: '课题组主页完成初版部署，支持中英文切换、研究方向展示、团队介绍和团队日常更新。',
      en: 'The LiJin Lab website has been deployed with bilingual support, research highlights, team introduction, and lab-life updates.',
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
