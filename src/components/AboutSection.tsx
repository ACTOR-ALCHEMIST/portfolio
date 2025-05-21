import BlurFade from "@/components/magicui/blur-fade";
import Markdown from "react-markdown";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function AboutSection() {
  return (
    <section id="about">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="text-xl font-bold">About</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        {Array.isArray(DATA.summary) ? (
          <ul className="list-disc list-inside max-w-full text-pretty font-sans text-sm text-muted-foreground dark:text-muted-foreground">
            {DATA.summary.flatMap(item => (Array.isArray(item) ? item : [item])).map((item, index) => (
              <li key={index}>{typeof item === 'string' ? item : item.join(' ')}</li>
            ))}
          </ul>
        ) : (
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        )}
      </BlurFade>
    </section>
  );
}
