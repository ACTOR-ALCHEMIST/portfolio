"use client"

import React from "react"

// TODO: Create or find the correct path for GradientHeading
// import { GradientHeading } from "@/components/ui/gradient-heading"
import LogoCarousel from "@/components/ui/logo-carousel"

export function LogoCarouselDemo() {
  return (
    <div className="space-y-4 py-0">
      <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center space-y-4">
        <div className="text-center">
          {/* TODO: Replace with GradientHeading once available */}
          <h1 className="text-4xl font-bold">Learn more about my programing skills</h1>
        </div>

        <LogoCarousel columnCount={5} />
      </div>
    </div>
  )
}
