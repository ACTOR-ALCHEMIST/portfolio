import { LogoCarouselDemo } from "../LogoCarouselDemo";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { 
  CodeIcon, 
  DatabaseIcon, 
  CloudIcon, 
  BrainCircuitIcon, 
  TerminalIcon, 
  GitBranchIcon 
} from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

const skillCategories = [
  {
    name: "Programming Languages",
    description: "Core languages I work with",
    skills: ["Python", "Java", "TypeScript", "JavaScript"],
    className: "col-span-1 lg:col-span-2",
    Icon: CodeIcon,
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10 rounded-lg" />
    ),
  },
  {
    name: "AI & Machine Learning",
    description: "Specialized in AI and ML technologies",
    skills: ["PyTorch", "Transformers", "BERT", "Llama", "LLM Fine-tuning"],
    className: "col-span-1 lg:col-span-2",
    Icon: BrainCircuitIcon,
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-lg" />
    ),
  },
  {
    name: "Web Technologies",
    description: "Frontend and backend frameworks",
    skills: ["React", "Next.js", "Spring Boot"],
    className: "col-span-1 lg:col-span-1",
    Icon: TerminalIcon,
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/10 to-pink-500/10 rounded-lg" />
    ),
  },
  {
    name: "Cloud & DevOps",
    description: "Cloud platforms and deployment",
    skills: ["AWS", "Docker", "Git"],
    className: "col-span-1 lg:col-span-1",
    Icon: CloudIcon,
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-lg" />
    ),
  },
  {
    name: "Data & Analytics",
    description: "Data processing and analysis tools",
    skills: ["Scikit-learn", "Apache Spark", "NLP"],
    className: "col-span-1 lg:col-span-2",
    Icon: DatabaseIcon,
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10 rounded-lg" />
    ),
  },
  {
    name: "Version Control",
    description: "Code management and collaboration",
    skills: ["Git", "GitHub"],
    className: "col-span-1 lg:col-span-2",
    Icon: GitBranchIcon,
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 via-slate-500/10 to-zinc-500/10 rounded-lg" />
    ),
  },
];

export function Skills() {
  return (
    <section id="skills" className="w-full py-12">
      <div className="container mx-auto px-4">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Technical Skills
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across various domains
            </p>
          </div>
        </BlurFade>
        
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <LogoCarouselDemo />
        </BlurFade>
        
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <BentoGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {skillCategories.map((category) => (
              <BentoCard
                key={category.name}
                name={category.name}
                description={category.description}
                className={category.className}
                Icon={category.Icon}
                background={
                  <div className="relative">
                    {category.background}
                    <div className="relative z-10 p-4">
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                }
                href="#skills"
                cta="View Skills"
              />
            ))}
          </BentoGrid>
        </BlurFade>
      </div>
    </section>
  );
}