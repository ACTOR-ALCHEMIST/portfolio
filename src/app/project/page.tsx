import { portfolio } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Project",
};

export default function ProjectPage() {
  return (
    <div className="listing-page page-stack compact-top">
      <header className="page-heading">
        <h2>项目案例研究</h2>
        <p>
          从真实数据瓶颈出发，记录我如何把数据策略、算法验证、批量生产和质量回流连接成可持续运行的系统。
        </p>
      </header>

      <div className="project-list" aria-label="项目案例列表">
        {portfolio.projects.map((project, index) => {
          const cover = project.media.find(
            (media) => media.id === project.overviewMediaId,
          );

          return (
            <Link
              className="project-list-card"
              href={`/project/${project.id}`}
              key={project.id}
            >
              <article>
                {cover ? (
                  <div className="project-list-image">
                    <Image
                      src={cover.src}
                      alt={cover.alt}
                      width={cover.width}
                      height={cover.height}
                      priority={index === 0}
                      sizes="(max-width: 820px) calc(100vw - 40px), 360px"
                    />
                    <span className="project-list-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                ) : null}

                <div className="project-list-body">
                  <div className="project-list-heading">
                    <div>
                      <p className="card-meta">{project.role}</p>
                      <h3>{project.title}</h3>
                    </div>
                    <time>{project.period}</time>
                  </div>

                  <p className="project-list-summary">{project.caseStudyIntro}</p>

                  <div className="project-list-footer">
                    <div className="tag-list" aria-label="项目技术标签">
                      {project.tags.slice(0, 5).map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <span className="project-list-cta">
                      阅读案例
                      <svg
                        aria-hidden="true"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M4.5 10h10m-4-4 4 4-4 4"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
