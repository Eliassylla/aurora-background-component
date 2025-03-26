"use client";

import { AuroraBackground } from "./aurora-background";

export default function AuroraBackgroundDemo() {
  return (
    <AuroraBackground className="w-full">
      <div className="z-10 relative flex flex-col items-center justify-center gap-5 p-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          Aurora Background Effect
        </h1>
        <p className="text-lg md:text-xl text-center max-w-2xl">
          A stunning aurora background effect for your Next.js and Tailwind CSS projects
        </p>
        <div className="flex flex-row gap-4 mt-4">
          <button className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition">
            Get Started
          </button>
          <button className="px-4 py-2 bg-black/10 backdrop-blur-sm border border-black/20 text-black dark:text-white rounded-lg hover:bg-black/20 transition">
            Learn More
          </button>
        </div>
      </div>
    </AuroraBackground>
  );
}
