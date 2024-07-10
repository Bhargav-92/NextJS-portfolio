import React from 'react';
import { LeftSpotlight } from '@/components/ui/LeftSpotlight';
import { RightSpotlight } from './ui/RightSpotlight';

export default function Hero() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <LeftSpotlight
        className="-top-10 left-0 md:left-2 md:-top-20"
        fill="white"
      />
      <LeftSpotlight
        className="-top-40 left-0 md:left-80 md:-top-20"
        fill="blue"
      />
      <RightSpotlight
        className="-top-10 left-0 md:left-[100rem] md:-top-20"
        fill="white"
      />
      <RightSpotlight
        className="-top-40 left-0 md:left-[80rem] md:-top-20"
        fill="purple"
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Spotlight <br /> is the new trend.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Spotlight effect is a great way to draw attention to a specific part
          of the page. Here, we are drawing the attention towards the text
          section of the page. I don&apos;t know why but I&apos;m running out of
          copy.
        </p>
      </div>
    </div>
  );
}