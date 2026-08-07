import React from 'react';

export default function Intro() {
  return (
    <section className="w-full py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Subtle top gradient to transition from Hero if needed */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-[3rem] font-bold text-foreground tracking-tight mb-6 leading-[1.2]">
          Build software around the way your business actually works
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
          Off-the-shelf tools are useful until your workflows, integrations or growth plans stop fitting the 
          template. Neologicx helps teams turn those operational gaps into practical digital products—from 
          the first discovery conversation through design, engineering, deployment and ongoing improvement.
        </p>
      </div>
    </section>
  );
}
