"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import BlurFade from "@/components/magicui/blur-fade"
import BlurFadeText from "@/components/magicui/blur-fade-text"
import { DATA } from "@/data/resume"
import { HobbiesChain } from "@/components/HobbiesChain"
import { TerminalAbout } from "../TerminalAbout";

const BLUR_FADE_DELAY = 0.2

export function Hero() {
  return (
    <section id="hero" className="w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-4xl space-y-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
          <div className="flex-col flex flex-1 space-y-4 text-center md:text-left">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              yOffset={8}
              text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
            />
            <BlurFadeText
              className="text-base sm:text-lg md:text-xl max-w-[600px] mx-auto md:mx-0"
              delay={BLUR_FADE_DELAY}
              text={DATA.description}
            />
            <TerminalAbout />
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-32 sm:size-40 md:size-48 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
} 