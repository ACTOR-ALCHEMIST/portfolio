import { portfolio } from "@/data/portfolio";
import Image from "next/image";

export const metadata = {
  title: "Research",
};

export default function ResearchPage() {
  return (
    <div className="listing-page page-stack compact-top">
      <header className="page-heading">
        <h2>科研经历</h2>
        <p>以下是我在 AI、NLP 与数据分析方向的主要研究和实验项目。</p>
      </header>

      <div className="research-list">
        {portfolio.research.map((item) => (
          <article className="research-card" key={item.title}>
            <div className="research-image">
              <Image src={item.image} alt="" width={360} height={220} />
            </div>
            <div>
              <h3>{item.title}</h3>
              <p className="card-meta">{item.meta}</p>
              <p>{item.description}</p>
              <div className="tag-list">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
