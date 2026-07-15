import { portfolio } from "@/data/portfolio";

export default function Page() {
  return (
    <div className="home-page page-stack">
      <section className="intro-block">
        <p className="eyebrow">{portfolio.profile.greeting} 👋</p>
        <h2>{portfolio.profile.headline}</h2>
        <p className="tagline">{portfolio.profile.tagline}</p>
        <div className="about-copy">
          {portfolio.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="news-block">
        <h3>News</h3>
        <div className="news-list">
          {portfolio.news.map((item) => (
            <div className="news-item" key={`${item.date}-${item.text}`}>
              <time>{item.date}</time>
              <p>
                <span aria-hidden="true">📌</span>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
