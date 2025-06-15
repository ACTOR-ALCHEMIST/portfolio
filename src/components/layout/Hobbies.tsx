"use client";

import React from "react";
import Image from "next/image";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Hobbies() {
  const data = [
    {
      category: "Programming",
      title: "Developing AI-powered real-world problem solutions",
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent category="Programing" />,
    },
    {
      category: "DIY & Creativity",
      title: "Exceptional practical skills, comprehensively assisting my creativity",
      src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent category="DIY & Creativity" />,
    },
    {
      category: "Filming & Media",
      title: "Creating engaging content through photography and videography",
      src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent category="Filming & Media" />,
    },
  ];

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <section id="hobbies" className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-neutral-800 dark:text-neutral-200 font-sans tracking-tighter">
          What I Love Doing
        </h2>
        <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
          Beyond coding, I&apos;m passionate about creativity and innovation in various forms
        </p>
        <Carousel items={cards} />
      </div>
    </section>
  );
}

const DummyContent = ({ category }: { category: string }) => {
  const getContent = () => {
    switch (category) {
      case "Programing":
        return {
          title: "Building the Future with Code",
          description: "I love solving complex problems through elegant code solutions. From machine learning models to web applications, I enjoy the creative process of turning ideas into reality through programming.",
          imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
          altText: "Code editor with programming languages"
        };
      case "DIY & Creativity":
        return {
          title: "Hands-On Innovation",
          description: "I believe in learning by doing. Whether it's building electronics projects, crafting solutions, or creating something from scratch, I enjoy the process of bringing ideas to life with my hands.",
          imageSrc: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop",
          altText: "DIY project workspace with tools"
        };
      case "Filming & Media":
        return {
          title: "Capturing Stories",
          description: "Through photography and videography, I capture moments and tell stories. This creative outlet helps me see the world from different perspectives and express ideas visually.",
          imageSrc: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop",
          altText: "Professional camera setup"
        };
      default:
        return {
          title: "Exploring Passions",
          description: "Always curious, always learning, always creating.",
          imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
          altText: "Creative workspace"
        };
    }
  };

  const content = getContent();
  
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <h3 className="text-neutral-800 dark:text-neutral-200 text-xl md:text-3xl font-bold mb-4">
        {content.title}
      </h3>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-sans max-w-3xl mx-auto leading-relaxed">
        {content.description}
      </p>
      <Image
        src={content.imageSrc}
        alt={content.altText}
        height={400}
        width={600}
        className="w-full h-64 md:h-80 object-cover rounded-2xl mt-6 mx-auto"
      />
    </div>
  );
};

