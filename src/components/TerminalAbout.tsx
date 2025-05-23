import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
  } from "@/components/magicui/terminal";
  
  export function TerminalAbout() {
    return (
<Terminal>
  <TypingAnimation>&gt; pnpm run whoami</TypingAnimation>

  <AnimatedSpan delay={1500} className="text-green-500">
    <span>✔ indie developer</span>
  </AnimatedSpan>

  <AnimatedSpan delay={2000} className="text-green-500">
    <span>✔ AI student</span>
  </AnimatedSpan>

  <AnimatedSpan delay={2500} className="text-green-500">
    <span>✔ tech lover</span>
  </AnimatedSpan>

  <AnimatedSpan delay={3000} className="text-green-500">
    <span>✔ FPV pilot</span>
  </AnimatedSpan>

  <AnimatedSpan delay={3500} className="text-green-500">
    <span>✔ visual creator</span>
  </AnimatedSpan>

  <AnimatedSpan delay={4000} className="text-green-500">
    <span>✔ fast learner</span>
  </AnimatedSpan>

  <AnimatedSpan delay={4500} className="text-green-500">
    <span>✔ opensource contributor</span>
  </AnimatedSpan>
</Terminal>


    );
  }
  