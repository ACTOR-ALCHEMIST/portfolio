import { portfolio } from "@/data/portfolio";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProjectDetailPageProps = {
  params: { id: string };
};

export function generateStaticParams() {
  return portfolio.projects.map((project) => ({ id: project.id }));
}

export function generateMetadata({
  params,
}: ProjectDetailPageProps): Metadata {
  const project = portfolio.projects.find((item) => item.id === params.id);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.caseStudyIntro,
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const projectIndex = portfolio.projects.findIndex(
    (item) => item.id === params.id,
  );
  const project = portfolio.projects[projectIndex];

  if (!project) {
    notFound();
  }

  const mediaById = new Map(
    project.media.map((media) => [media.id, media]),
  );
  const overviewMedia = mediaById.get(project.overviewMediaId);

  return (
    <div className="project-detail page-stack compact-top">
      <nav className="project-detail-nav" aria-label="面包屑导航">
        <Link href="/project">
          <svg aria-hidden="true" fill="none" viewBox="0 0 20 20">
            <path
              d="m9 5-5 5 5 5M4 10h12"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
            />
          </svg>
          返回项目列表
        </Link>
        <span aria-hidden="true">/</span>
        <span>Case Study {String(projectIndex + 1).padStart(2, "0")}</span>
      </nav>

      <article className="case-study">
        <header className="case-study-hero">
          <p className="case-study-index">
            Case Study {String(projectIndex + 1).padStart(2, "0")}
          </p>
          <div className="project-title-row">
            <h1>{project.title}</h1>
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
                  priority
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
            id={section.id}
            key={section.id}
          >
            <div className="case-study-section-head">
              <span>{section.eyebrow}</span>
              <h2>{section.title}</h2>
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
                          sizes="(max-width: 820px) 100vw, 900px"
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
            <h2>当前进展与下一阶段</h2>
          </div>
          <div className="case-study-status-grid">
            {project.nowNext.map((status, statusIndex) => (
              <div
                className={`case-study-status ${
                  statusIndex === 0 ? "is-complete" : "is-next"
                }`}
                key={status.label}
              >
                <span>{status.label}</span>
                <h3>{status.title}</h3>
                <p>{status.description}</p>
              </div>
            ))}
          </div>
        </section>
      </article>

      <footer className="project-detail-footer">
        <Link href="/project">返回全部项目</Link>
      </footer>
    </div>
  );
}
