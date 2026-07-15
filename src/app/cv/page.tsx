import { portfolio } from "@/data/portfolio";
import type { ReactNode } from "react";

export const metadata = {
  title: "CV",
};

export default function CVPage() {
  return (
    <div className="cv-page page-stack compact-top">
      <header className="page-heading">
        <h2>个人简历</h2>
        <p>
          聚焦从数据合成与算法优化，到 Spark / Dorado
          批量推理与质量回流，再到 xLLM / ms-swift、Merlin / Bernard 与 FaaS
          模型服务部署运维的端到端落地。
        </p>
      </header>

      <ResumeSection title="实习经历">
        {portfolio.experience.map((item) => (
          <ResumeItem
            key={item.company}
            school={item.company}
            schoolEn={item.companyEn}
            degree={item.role}
            detail={item.description}
            date={item.date}
          />
        ))}
      </ResumeSection>

      <ResumeSection title="项目经历">
        <div className="resume-project-list">
          {portfolio.projects
            .filter((project) => project.cvFeatured)
            .map((project) => (
              <article className="resume-project-item" key={project.id}>
                <div className="resume-project-head">
                  <h3>{project.title}</h3>
                  <time>{project.period}</time>
                </div>
                <p className="resume-project-role">{project.role}</p>
                <ul className="cv-project-highlights">
                  {project.cvHighlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
        </div>
      </ResumeSection>

      <ResumeSection title="教育背景">
        {portfolio.education.map((item) => (
          <ResumeItem key={item.school} {...item} />
        ))}
      </ResumeSection>

      <ResumeSection title="技能栈">
        <div className="skill-cloud">
          {portfolio.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </ResumeSection>
    </div>
  );
}

function ResumeSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="resume-section">
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
}

function ResumeItem({
  school,
  schoolEn,
  degree,
  detail,
  date,
}: {
  school: string;
  schoolEn: string;
  degree: string;
  detail: string;
  date: string;
}) {
  return (
    <article className="resume-item">
      <div className="resume-item-head">
        <h3>
          {school}
          <span>{schoolEn}</span>
        </h3>
        <time>{date}</time>
      </div>
      <p className="resume-degree">{degree}</p>
      <p>{detail}</p>
    </article>
  );
}
