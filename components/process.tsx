import React from 'react';

const steps = [
  {
    num: "01",
    title: "Discover",
    description: "Align on the business problem, users, workflows, constraints and success criteria."
  },
  {
    num: "02",
    title: "Define",
    description: "Turn requirements into scope, priorities, architecture and a realistic delivery plan."
  },
  {
    num: "03",
    title: "Design",
    description: "Map user journeys, wireframes and interfaces before expensive rework reaches engineering."
  },
  {
    num: "04",
    title: "Build",
    description: "Develop in reviewable increments with source control, peer review and documented decisions."
  },
  {
    num: "05",
    title: "Validate",
    description: "Test critical flows, integrations, devices and release candidates against agreed acceptance criteria."
  },
  {
    num: "06",
    title: "Launch & improve",
    description: "Deploy, monitor, support and evolve the product as real usage creates new priorities."
  }
];

export default function Process() {
  return (
    <section className="w-full py-24 bg-background border-b border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl font-bold text-foreground mb-4">A delivery process designed for clarity</h2>
          <div className="h-1 w-12 bg-primary rounded-full mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="absolute top-0 right-8 -translate-y-1/2 text-5xl font-black text-muted/30 pointer-events-none">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
