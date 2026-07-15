export type ProjectMetric = {
  value: string;
  label: string;
  context: string;
};

export type ProjectMedia = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  variant: "board" | "wide" | "contain";
};

export type CaseStudySection = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  points?: readonly string[];
  mediaIds?: readonly string[];
};

export type ProjectStatus = {
  label: string;
  title: string;
  description: string;
};

export type PortfolioProject = {
  id: string;
  title: string;
  period: string;
  role: string;
  cvHighlights: readonly string[];
  caseStudyIntro: string;
  overviewMediaId: string;
  metrics: readonly ProjectMetric[];
  sections: readonly CaseStudySection[];
  media: readonly ProjectMedia[];
  nowNext: readonly ProjectStatus[];
  tags: readonly string[];
  cvFeatured: boolean;
};

export const portfolio = {
  profile: {
    name: "Jasper Hu",
    chineseName: "胡江",
    title: "AI Specialist / Developer",
    greeting: "Hey there",
    headline: "I'm Jasper Hu.",
    tagline: "Pragmatic by mind, human by heart. | 用工程视角拆解问题，用产品视角打磨体验",
    location: "Beijing, China",
    avatar: "/me.png",
    email: "hujiangyao@gmail.com",
    github: "https://github.com/ACTOR-ALCHEMIST",
    linkedin: "https://www.linkedin.com/in/jianghu2001",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/cv", label: "CV" },
    { href: "/research", label: "Research" },
    { href: "/project", label: "Project" },
  ],
  about: [
    "I am a master's student in Computer Science with a focus on artificial intelligence, machine learning, and practical AI systems. My work combines model experimentation, full-stack product building, and user-facing AI workflows.",
    "我关注大语言模型、机器学习应用与可落地的智能产品，习惯从真实场景出发，把研究方法、工程实现和交互体验整合成可验证的解决方案。",
  ],
  news: [
    {
      date: "2025.04",
      text: "Contributed model integration work to NextChat, adding support for newer OpenAI models and request handling.",
    },
    {
      date: "2025.02",
      text: "Completed an LLM fine-tuning and knowledge distillation project for mathematical reasoning tasks.",
    },
    {
      date: "2024.09",
      text: "Started MSc Computer Science - AI at University of Galway.",
    },
  ],
  education: [
    {
      school: "University of Galway",
      schoolEn: "University of Galway",
      degree: "MSc · Computer Science - Artificial Intelligence",
      detail: "Focused on machine learning, deep learning, NLP, and deployable AI applications.",
      date: "2024.09 - 2025.08",
    },
    {
      school: "Hunan International Economics University",
      schoolEn: "Hunan International Economics University",
      degree: "BSc · Computer Science",
      detail: "Built a foundation in algorithms, software engineering, database systems, and applied computing.",
      date: "2020.09 - 2024.06",
    },
  ],
  experience: [
    {
      company: "Changsha Zhuiguang Culture Media Studio",
      companyEn: "Project Lead",
      role: "Project Lead · Hunan, China",
      date: "2022.11 - 2024.08",
      description:
        "Led planning and execution for client-facing projects, coordinated stakeholders, managed budgets, and improved delivery reliability under tight timelines.",
    },
    {
      company: "Open-source AI Product Work",
      companyEn: "NextChat",
      role: "Contributor · Remote",
      date: "2025.04",
      description:
        "Worked on model integration and compatibility logic for a large-scale LLM web application, with attention to request structure, vision model handling, and product stability.",
    },
  ],
  skills: [
    "Python",
    "TypeScript",
    "React",
    "Next.js",
    "PyTorch",
    "Transformers",
    "NLP",
    "LLM Fine-tuning",
    "BERT",
    "Llama",
    "Scikit-learn",
    "Docker",
  ],
  research: [
    {
      title: "LLM Mathematical Task Fine-tuning with Knowledge Distillation",
      meta: "Knowledge distillation · mathematical reasoning · model demo",
      description:
        "Fine-tuned a Llama-based model on mathematical datasets and distilled reasoning behavior from a larger teacher model into a smaller deployable model.",
      image: "/nvidia.png",
      tags: ["LLM", "Fine-tuning", "Distillation", "Reasoning"],
    },
    {
      title: "Fine-tuning BERT for Sentiment Analysis",
      meta: "NLP classification · applied machine learning",
      description:
        "Built a sentiment classification pipeline with BERT, custom review data, and data augmentation to improve robustness across imbalanced labels.",
      image: "/buildspace.jpg",
      tags: ["BERT", "NLP", "Classification", "PyTorch"],
    },
    {
      title: "Health Condition Classification and Clustering",
      meta: "Data mining · clustering · dimensionality reduction",
      description:
        "Analyzed health-condition records with K-Means, hierarchical clustering, PCA, and UMAP to compare structure and improve cluster separation.",
      image: "/galway.png",
      tags: ["Clustering", "UMAP", "PCA", "Analysis"],
    },
  ],
  projects: [
    {
      id: "univl-synthetic-data",
      title: "抖音通用 VLM（UniVL）数据合成与自动化生产",
      period: "2026.03 - 至今",
      role: "主执行者｜端到端数据合成、自动化生产链路、批量推理与质量闭环",
      cvHighlights: [
        "完成 Q2 2T tokens 多源多模态训练数据生产，数据训练后模型相对 Qwen3.5-Base 提升 6.2pp。",
        "主执行 18 个能力工作流，覆盖数据策略、Prompt、Generator / Judge / Filter、批量推理、质检、交付与收益复盘。",
        "建设 PySpark / Dorado 自动化生产链路，任务构建由 12h+ 降至 1–2h，批推效率提升 14.7x、成本降低 50%。",
        "完成 598 万条预训练数据推理脚本及约 7321 万条结果交付，覆盖率达 96.91%，人工质检平均精度高于 84%。",
      ],
      caseStudyIntro:
        "抖音场景的短视频、图文和知识数据长期稀缺。我作为主执行者，将 Q2 的 2T 数据验证推进为一套覆盖策略、算法、批推、质检与回流的生产系统，并继续建设可长期运行的例行化链路。",
      overviewMediaId: "univl-production-os",
      metrics: [
        { value: "2T", label: "Q2 已完成", context: "抖音通用多模态 tokens" },
        { value: "34 / 37", label: "能力覆盖", context: "视频、图文、图集与通用任务" },
        { value: "96.91%", label: "垂类覆盖", context: "多源数据域覆盖率" },
        { value: "+6.2pp", label: "已验证收益", context: "相对 Qwen3.5-Base" },
        { value: "+19.89pp", label: "综合收益", context: "模型架构升级 + 数据增量" },
      ],
      sections: [
        {
          id: "background",
          eyebrow: "Background",
          title: "从业务数据缺口出发",
          paragraphs: [
            "截至 2026 Q1，基座训练数据仍主要依赖业务规则和开源数据，真正覆盖抖音短视频理解、内容分析与推荐场景的通用数据十分有限，这直接限制了模型在业务 benchmark 上的表现。",
            "Q2 我参与并推动 2T tokens 抖音通用数据生产，覆盖抖音视频、抖音图文、小红书图集和抖音知识等来源，用真实训练结果验证了大规模业务场景数据的有效性与可复制性。",
          ],
          points: [
            "覆盖 34 / 37 个能力维度，垂类域覆盖率达到 96.91%。",
            "人工质检平均精度高于 84%，同时满足规模、覆盖与质量要求。",
          ],
          mediaIds: ["univl-capability-map"],
        },
        {
          id: "ownership",
          eyebrow: "Ownership & Solution",
          title: "我负责的不只是单点脚本",
          paragraphs: [
            "作为项目主执行者，我接触并执行了 18 个能力工作流，工作边界从任务定义、数据筛选与均衡、PE / Prompt 和算法优化，一直延伸到 Generator / Judge / Filter、批量推理、质检、交付与收益复盘。",
            "我把每个能力视为同一生产系统中的可配置任务：输入、Prompt、Schema、推理通道和质量门槛可以独立调整，但共享统一的生产、验证与回流骨架。",
          ],
          points: [
            "完成 598 万条预训练数据合成推理脚本。",
            "负责 11 个抖音图文能力、约 7321 万条推理结果的汇总、打包与交付。",
          ],
        },
        {
          id: "challenges",
          eyebrow: "Key Challenges",
          title: "在覆盖、均衡与可迁移之间取舍",
          paragraphs: [
            "原始数据在播放量和 fusetag 上天然长尾，如果直接按大盘分布取数，头部样本会挤压小类与稀缺场景。我引入封顶均衡取数，通过头部桶上限、全局比例约束和桶内排序，在 quota 利用率、执行效率与分布效果之间取得平衡。",
            "另一项难点是将分散的 dorado.py 任务迁移到统一 PySpark 框架，同时保留每个能力的 Prompt、常量、Schema 与 generate / judge 语义。我采用先识别差异、再做结构迁移、最后用语法与 Schema 校验回归的方式控制风险。",
          ],
          mediaIds: ["univl-balancing-strategy", "univl-migration-workflow"],
        },
        {
          id: "automation",
          eyebrow: "Automation & Quality",
          title: "把人工密集流程改造成例行生产",
          paragraphs: [
            "Q2 的链路可以完成重点能力验证，但仍依赖大量人工适配。为支撑持续扩量，我将 SQL 取数、token 统计、数据均衡、批量推理、状态检查、失败重试和结果沉淀串成可复用流程，并用豆包与自部署双通道缓解推理资源瓶颈。",
            "在质量侧，我把 Generator / Filter / QC 与人工 Review 组合成多层门禁；对 Prompt 与 Schema 进行语法、变量引用和输出结构校验，失败任务自动回流。品牌识别、名人识别、视觉定位等工作流的合成准确率由不足 80% 提升到 90%+。",
          ],
          points: [
            "任务构建耗时由 12h+ 降至 1–2h。",
            "批推效率提升 14.7x，成本降低 50%。",
          ],
          mediaIds: ["univl-auto-pe-workflow"],
        },
        {
          id: "impact",
          eyebrow: "Results & Value",
          title: "Q2 已完成验证，收益边界清晰",
          paragraphs: [
            "2T 数据训练后，模型相对开源 Qwen3.5-Base 提升 6.2pp，验证了新增业务数据对通用能力的直接增益。相对 Q1 末 UniVL-4.5-8B 的 19.89pp 提升则来自模型架构升级与数据增量的综合作用，我不会将它归因于数据单一变量。",
            "这套链路把基础数据、模型评测和业务问题连接成闭环：评测暴露能力短板，数据策略定向补齐，训练结果再回到 benchmark 验证，从而降低上层特征与业务模型反复补救的成本。",
          ],
        },
      ],
      media: [
        {
          id: "univl-capability-map",
          src: "/assets/projects/univl/01-capability-map.jpg",
          alt: "UniVL 抖音视频、图文、图集、Caption 与 Interleave 的 P0/P1 能力矩阵",
          caption: "能力地图：按数据体裁与优先级组织 34 个已覆盖维度。",
          width: 2560,
          height: 2560,
          variant: "board",
        },
        {
          id: "univl-migration-workflow",
          src: "/assets/projects/univl/02-migration-workflow.jpg",
          alt: "从 dorado.py 到 PySpark 批量任务的十二步迁移与验证流程",
          caption: "PySpark Batch Migrate：识别差异、结构迁移、generate / judge 改造与校验回环。",
          width: 2560,
          height: 2560,
          variant: "board",
        },
        {
          id: "univl-balancing-strategy",
          src: "/assets/projects/univl/03-balancing-strategy.jpg",
          alt: "通过头部桶封顶和比例上限实现长尾数据均衡取数的示意图",
          caption: "封顶均衡：限制头部极端放大，同时保留桶内真实分布。",
          width: 2560,
          height: 2560,
          variant: "board",
        },
        {
          id: "univl-auto-pe-workflow",
          src: "/assets/projects/univl/04-auto-pe-workflow.jpg",
          alt: "基于人工标注优化 Prompt、Schema、质量指标并完成 Git 交付的闭环流程",
          caption: "Auto PE：从人工反馈、Prompt / Schema 优化到质量门禁与版本化交付。",
          width: 2560,
          height: 2560,
          variant: "board",
        },
        {
          id: "univl-production-os",
          src: "/assets/projects/univl/05-production-os.jpg",
          alt: "UniVL 从任务定义、数据均衡、双通道推理到 CQC 和人工复核的数据生产系统",
          caption: "生产操作系统：把数据策略、批推、质检、回流和资产沉淀连接成一条链路。",
          width: 2560,
          height: 2560,
          variant: "board",
        },
      ],
      nowNext: [
        {
          label: "Now · Q2 已完成",
          title: "2T 数据验证闭环成立",
          description: "规模、覆盖率、质量与模型收益均达到预期，证明方案可以继续复制。",
        },
        {
          label: "Next · Q3 目标",
          title: "再生产 3T，总量达到 5T",
          description: "目标是将人工驱动升级为自动化例行生产，并扩展表征评测与后训练数据；8–10pp 为预期 benchmark 收益，并非已完成结果。",
        },
      ],
      tags: [
        "VLM",
        "Synthetic Data",
        "Prompt Engineering",
        "PySpark",
        "Dorado",
        "Ark Batch Inference",
        "CQC",
        "MLOps",
      ],
      cvFeatured: true,
    },
    {
      id: "push-risk-data-synthesis",
      title: "Push 风控数据合成与自动质检系统",
      period: "2026.02 - 至今",
      role: "独立负责人｜方案设计、Embedding 检索、PE/Agent 编排、批量合成、质检、交付与效果复盘",
      cvHighlights: [
        "独立负责从 badcase / 规则处理、语义检索、动态 PE、LLM 生成到 Judge 质检与效果复盘的完整链路，累计产出 33 万条数据。",
        "基于 Embedding 聚类、LLM 类别总结与规则 Top-K 召回，自动构造 4–10 条一组的动态 few-shot，降低生成分布偏移。",
        "建立生成—质检—过滤闭环并沉淀为可复用 Codex skill，数据构建效率提升 70%。",
        "数据回流后业务机审模型正例精度提升 20%，P@R80 达 0.608，近 1/7/14 天 VSR 下降 5.33%。",
      ],
      caseStudyIntro:
        "面对风险正例稀缺、标签失衡和生成画风偏移，我独立搭建了一套从真实 badcase 与人审规则出发，经语义检索、动态 few-shot、LabelGPT 生成到自动质检的数据蒸馏系统。",
      overviewMediaId: "push-system-architecture",
      metrics: [
        { value: "33 万", label: "当前累计", context: "可回流合成数据" },
        { value: "20 万", label: "Q2 交付", context: "规模化生产批次" },
        { value: "+20%", label: "正例精度", context: "业务机审模型" },
        { value: "0.608", label: "P@R80", context: "当前回流指标" },
        { value: "-5.33%", label: "VSR", context: "近 1 / 7 / 14 天" },
      ],
      sections: [
        {
          id: "background",
          eyebrow: "Background",
          title: "正例稀缺比模型结构更先成为瓶颈",
          paragraphs: [
            "线上 Push 风控持续出现未识别风险文案的 badcase，根因是可用于训练的风险正例不足：原始数据约 2,800 条，正负比例约 3:97，部分标签占比超过 74%。有限且失衡的样本使模型难以稳定识别长尾表达。",
            "我需要解决的不是简单扩充文本量，而是在命中 label 与 rule 的同时，保持真实 Push 的短句、碎片化包装、语气和标签比例，让数据真正适合训练。",
          ],
        },
        {
          id: "ownership",
          eyebrow: "Ownership & Solution",
          title: "我独立完成从种子到交付的整条系统",
          paragraphs: [
            "我从 badcase 与规则清洗开始，完成标签分布分析、Embedding 聚类、规则匹配、动态 PE 队列、LabelGPT 批量生成、独立 Judge 质检、数据交付与模型收益复盘。",
            "系统以 label、rule、相似 few-shot 和生成数量作为动态输入。每个生成批次都能追溯到真实样本组与目标规则，避免把数据蒸馏变成不可控的自由生成。",
          ],
          mediaIds: ["push-dynamic-pe"],
        },
        {
          id: "challenges",
          eyebrow: "Key Challenges",
          title: "同时解决画风漂移与规则匹配",
          paragraphs: [
            "早期仅用规则生成时，样本虽然表面违规，却与真实 badcase 差异明显，回流训练后准确率反而下降。我部署 4B 级 Qwen Embedding 模型，对同标签样本做语义与关键词聚类，每 4–10 条相似 case 组成一组 few-shot。",
            "随后我让 LLM 总结每组样本的风险特征与命中方式，再将总结结果与规则库做向量 Top-K 召回，为每组 few-shot 自动匹配最相关规则。生成模型因此同时获得真实表达分布和明确规则边界。",
          ],
          mediaIds: ["push-embedding-clustering", "push-rule-retrieval"],
        },
        {
          id: "automation",
          eyebrow: "Automation & Quality",
          title: "把 few-shot 一致性放在质检首位",
          paragraphs: [
            "生成后，我增加独立质检节点，依次检查 few-shot 画风、风险标签、规则命中、title-text 协同性和训练可用性。Judge 输出 quality_level 与 is_valid，只有至少达到中等质量且未偏离目标分布的样本才会进入最终数据集。",
            "我进一步将相似度匹配、规则召回和 few-shot 构造沉淀为 Codex skill，使这套方法可以重复执行，数据构建效率提升 70%。",
          ],
          mediaIds: ["push-quality-gate"],
        },
        {
          id: "impact",
          eyebrow: "Results & Value",
          title: "区分阶段实验与当前回流结果",
          paragraphs: [
            "在代表性阶段实验中，我用 199 条新增种子构建 1,017 条动态 PE，平均每条生成约 30 个样本，得到 30,408 条数据。经过 5 轮迭代，这批约 3 万条数据使 R@P80 从 0.424 提升到 0.472，提升 4.8pp。",
            "截至当前，链路累计产出 33 万条，其中 Q2 交付 20 万条；数据回流后，业务机审模型正例精度提升 20%，P@R80 达 0.608，近 1 / 7 / 14 天 VSR 下降 5.33%，实验组 LT30 提升 0.0086%。",
          ],
          points: [
            "R@P80 是阶段实验指标，P@R80 是当前回流指标，两者定义不同，不构成一条连续提升曲线。",
            "项目把一次性人工补数转化为可规模化、可质检、可复用的数据生产能力。",
          ],
        },
      ],
      media: [
        {
          id: "push-system-architecture",
          src: "/assets/projects/push/01-system-architecture.jpg",
          alt: "Push 风控从 badcase、Embedding 聚类、规则召回到 LabelGPT 生成和质检的数据合成架构",
          caption: "系统架构：真实 badcase 与规则经动态 PE 进入生成、质检和交付链路。",
          width: 2560,
          height: 2560,
          variant: "board",
        },
        {
          id: "push-dynamic-pe",
          src: "/assets/projects/push/02-dynamic-pe.png",
          alt: "包含相似度分数、规则、标签和 few-shot 样本的动态 PE 数据示例",
          caption: "动态 PE：label、rule、few-shot 与召回分数共同约束生成。",
          width: 717,
          height: 372,
          variant: "wide",
        },
        {
          id: "push-embedding-clustering",
          src: "/assets/projects/push/03-embedding-clustering.png",
          alt: "按风险标签和规则整理的 badcase 语义聚类结果",
          caption: "Embedding 聚类：将同标签的近邻 badcase 组织为 4–10 条一组的 few-shot。",
          width: 3060,
          height: 1998,
          variant: "wide",
        },
        {
          id: "push-rule-retrieval",
          src: "/assets/projects/push/04-rule-retrieval.png",
          alt: "类别描述与人审规则完成 Top-K 相似度召回后的动态输入记录",
          caption: "规则召回：用类别总结匹配规则库，并保留可追溯的 score、rule 与 label。",
          width: 1772,
          height: 276,
          variant: "contain",
        },
        {
          id: "push-quality-gate",
          src: "/assets/projects/push/05-quality-gate.png",
          alt: "Push 合成样本的 quality_level 与不通过原因质检结果",
          caption: "质量门禁：逐条输出质量等级、原因与有效性，只保留通过样本。",
          width: 734,
          height: 153,
          variant: "contain",
        },
      ],
      nowNext: [
        {
          label: "Now · 已规模化",
          title: "33 万条数据进入可复用生产闭环",
          description: "从 3 万条阶段验证扩展到累计 33 万条，并以当前模型指标持续检查回流价值。",
        },
        {
          label: "Next · 持续迭代",
          title: "扩展 balanced BC 与消融验证",
          description: "继续引入更多风险和低质 badcase，扩大 few-shot 覆盖，并用消融实验判断不同数据源的真实增益。",
        },
      ],
      tags: [
        "Synthetic Data",
        "Qwen3 Embedding",
        "Few-shot Retrieval",
        "Agent Workflow",
        "LLM-as-Judge",
        "Codex Skill",
        "MLOps",
      ],
      cvFeatured: true,
    },
  ] satisfies readonly PortfolioProject[],
} as const;
