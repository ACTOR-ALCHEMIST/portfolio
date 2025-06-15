import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Jasper Hu",
  initials: "JH",
  url: "https://jasperhu.icu",
  location: "Galway, Ireland",
  locationLink: "https://www.google.com/maps/place/galway",
  description:
    "AI Specialist & Master's Student. Passionate about machine learning and building intelligent solutions.",
  summary: "An AI specialist and a Master's student in the field with 1+ years of dedicated experience in machine learning and software development. I possess demonstrated expertise in utilizing machine learning and deep learning for complex NLP and computer vision tasks. My skills include architecting and deploying scalable, AI-driven solutions with cloud technologies to improve efficiency and drive innovation.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Java",
    "TypeScript",
    "JavaScript",
    "PyTorch",
    "Transformers",
    "Scikit-learn",
    "Apache Spark",
    "React",
    "Next.js",
    "Spring Boot",
    "AWS",
    "Docker",
    "Git",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "LLM Fine-tuning",
    "BERT",
    "Llama",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hujiangyao@gmail.com",
    tel: "+353 83 180 6334",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ACTOR-ALCHEMIST",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jianghu2001",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/jasperhu2001",
        icon: Icons.x,

        navbar: true,
      },
      Bilibili: {
        name: "Bilibili",
        url: "https://space.bilibili.com/16310601?spm_id_from=333.1007.0.0",
        icon: Icons.bilibili,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Changsha Zhuiguang Culture Media Studio",
      href: "#",
      badges: ["Project Lead"],
      location: "China, Hunan",
      title: "Project Lead",
      logoUrl: "/studio.png",
      start: "November 2022",
      end: "August 2024",
      description:
        "Led event design and execution for 10+ client projects, aligning strategies with objectives via stakeholder collaboration. Managed budgets, achieving a 15% event cost reduction while maintaining quality through strategic resource allocation. Resolved logistical challenges under tight deadlines, ensuring seamless event delivery.",
    }
  ],
  education: [
    {
      school: "University of Galway",
      href: "https://www.universityofgalway.ie",
      degree: "Master of Science in Computer Science - AI",
      logoUrl: "/galway.png",
      start: "September 2024",
      end: "August 2025",
    },
    {
      school: "Hunan International Economics University",
      href: "https://www.hieu.edu.cn/",
      degree: "Bachelor of Computer Science",
      logoUrl: "/hieu.png",
      start: "September 2020",
      end: "June 2024",
    },
  ],
  projects: [
    {
      title: "LLM Mathematical Task Fine-tuning with Knowledge Distillation",
      href: "#",
      dates: "February 2025",
      active: true,
      description:
        "Fine-tuned Llama model on mathematical datasets, significantly improving accuracy on specialized tasks. Distilled mathematical reasoning capabilities from Gemini 2.0 to a smaller model (DeepSeek-R1-Distill-Qwen-1.5B). Developed a user-interactive web application using React and Next.js for model demonstration.",
      technologies: [
        "Python",
        "PyTorch",
        "Transformers",
        "Llama",
        "DeepSeek",
        "React",
        "Next.js",
        "Machine Learning",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ACTOR-ALCHEMIST",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Fine-tuning BERT for Sentiment Analysis",
      href: "#",
      dates: "November 2024",
      active: true,
      description:
        "Achieved 92% accuracy in sentiment classification by fine-tuning BERT on 10,000+ custom reviews. Implemented data augmentation techniques to address class imbalance and enhance model robustness. Created an interactive model interface using Gradio for real-time sentiment prediction.",
      technologies: [
        "Python",
        "BERT",
        "Transformers",
        "PyTorch",
        "Gradio",
        "Scikit-learn",
        "NLP",
        "Machine Learning",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ACTOR-ALCHEMIST",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Advanced Classification and Clustering of Health Conditions",
      href: "#",
      dates: "October 2024",
      active: true,
      description:
        "Analyzed 40,000+ health records using K-Means and Hierarchical Clustering, with PCA/UMAP for dimensionality reduction. Improved clustering accuracy by 10% through optimal selection of UMAP and Hierarchical Clustering.",
      technologies: [
        "Python",
        "Scikit-learn",
        "K-Means",
        "Hierarchical Clustering",
        "PCA",
        "UMAP",
        "Data Analysis",
        "Machine Learning",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ACTOR-ALCHEMIST",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "NextChat - OpenAI Model Integration",
      href: "https://github.com/ChatGPTNextWeb/NextChat",
      dates: "April 2025",
      active: true,
      description:
        "Pioneered the integration of OpenAI's latest models, o3 and o4-mini, into a leading LLM web application (84k+ GitHub stars). Engineered refined vision model detection logic and optimized API request structures for seamless compatibility.",
      technologies: [
        "TypeScript",
        "React",
        "Next.js",
        "OpenAI API",
        "JavaScript",
        "LLM Integration",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/ChatGPTNextWeb/NextChat",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ChatGPTNextWeb/NextChat/pull/6457",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
