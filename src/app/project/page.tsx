import { portfolio } from "@/data/portfolio";
import Image from "next/image";

export const metadata = {
  title: "Project",
};

export default function ProjectPage() {
  return (
    <div className="listing-page page-stack compact-top">
      <header className="page-heading">
        <h2>项目案例研究</h2>
        <p>
          两个从真实数据瓶颈出发的端到端案例：我如何把数据策略、算法验证、
          批量生产和质量回流连接起来，并将一次性实验沉淀为可持续运行的系统。
        </p>
      </header>

      <nav className="project-jump-nav" aria-label="项目案例导航">
        {portfolio.projects.map((project, index) => (
          <a href={`#${project.id}`} key={project.id}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {project.title}
          </a>
        ))}
      </nav>

      <div className="case-study-list">
        {portfolio.projects.map((project, projectIndex) => {
          const mediaById = new Map(
            project.media.map((media) => [media.id, media]),
          );
          const overviewMedia = mediaById.get(project.overviewMediaId);

          return (
            <article className="case-study" id={project.id} key={project.id}>
              <header className="case-study-hero">
                <p className="case-study-index">
                  Case Study {String(projectIndex + 1).padStart(2, "0")}
                </p>
                <div className="project-title-row">
                  <h2>{project.title}</h2>
                  <time>{project.period}</time>
                </div>
                <p className="case-study-role">{project.role}</p>
                <p className="case-study-intro">{project.caseStudyIntro}</p>

                <div className="case-study-metrics">
                  {project.metrics.map((metric) => (
                    <div className="case-study-metric" key={metric.label}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                      <small>{metric.context}</small>
                    </div>
                  ))}
                </div>

                <div className="case-study-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </header>

              {overviewMedia ? (
                <figure className="case-study-overview">
                  <a
                    aria-label={`查看${project.title}项目总览画板原图`}
                    className="case-study-overview-link"
                    href={overviewMedia.src}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="case-study-overview-frame">
                      <Image
                        src={overviewMedia.src}
                        alt={overviewMedia.alt}
                        width={overviewMedia.width}
                        height={overviewMedia.height}
                        priority={projectIndex === 0}
                        sizes="(max-width: 820px) calc(100vw - 40px), 1100px"
                      />
                    </div>
                  </a>
                  <figcaption>
                    <div>
                      <span>Project Map</span>
                      <p>{overviewMedia.caption}</p>
                    </div>
                    <small>点击查看原图</small>
                  </figcaption>
                </figure>
              ) : null}

              {project.sections.map((section) => (
                <section
                  className="case-study-section"
                  id={`${project.id}-${section.id}`}
                  key={section.id}
                >
                  <div className="case-study-section-head">
                    <span>{section.eyebrow}</span>
                    <h3>{section.title}</h3>
                  </div>

                  <div className="case-study-copy">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}

                    {section.points ? (
                      <ul className="case-study-points">
                        {section.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>

                  {section.mediaIds ? (
                    <div className="case-study-media-grid">
                      {section.mediaIds.map((mediaId) => {
                        const media = mediaById.get(mediaId);

                        if (!media) {
                          return null;
                        }

                        return (
                          <figure
                            className={`case-study-media is-${media.variant}`}
                            key={media.id}
                          >
                            <div className="case-study-media-frame">
                              <Image
                                src={media.src}
                                alt={media.alt}
                                width={media.width}
                                height={media.height}
                                sizes="(max-width: 820px) 100vw, 1100px"
                              />
                            </div>
                            <figcaption>{media.caption}</figcaption>
                          </figure>
                        );
                      })}
                    </div>
                  ) : null}
                </section>
              ))}

              <section className="case-study-section">
                <div className="case-study-section-head">
                  <span>Now — Next</span>
                  <h3>当前进展与下一阶段</h3>
                </div>
                <div className="case-study-status-grid">
                  {project.nowNext.map((status, statusIndex) => (
                    <article
                      className={`case-study-status ${
                        statusIndex === 0 ? "is-complete" : "is-next"
                      }`}
                      key={status.label}
                    >
                      <span>{status.label}</span>
                      <h4>{status.title}</h4>
                      <p>{status.description}</p>
                    </article>
                  ))}
                </div>
              </section>
            </article>
          );
        })}
      </div>
    </div>
  );
}
