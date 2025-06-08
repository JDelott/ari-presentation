import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: "E-commerce & Artificial Intelligence",
      skills: [
        {
          name: "AI Solution Architecture",
          details: "Designing and implementing advanced AI systems utilizing Anthropic's Claude for enhanced customer personalization and automated decision-making"
        },
        {
          name: "Enterprise E-commerce Development",
          details: "Creating sophisticated fashion retail platforms with augmented reality capabilities, focusing on conversion optimization and seamless user journeys"
        },
        {
          name: "Responsive Web Architecture",
          details: "Developing progressive web applications with enterprise-grade performance optimization and cross-device compatibility"
        },
      ],
    },
    {
      title: "Frontend Excellence",
      skills: [
        {
          name: "React / Next.js",
          details: "Building scalable applications with advanced state management, server-side rendering, and performance optimization techniques"
        },
        {
          name: "TypeScript / JavaScript",
          details: "Crafting robust, type-safe applications using modern ES6+ features, design patterns, and best practices"
        },
        {
          name: "UI/UX Implementation",
          details: "Creating responsive, accessible interfaces with Tailwind CSS, fluid animations, and attention to micro-interactions"
        },
      ],
    },
    {
      title: "Production Ready",
      skills: [
        { 
          name: "Deployment & CI/CD",
          details: "AWS, DigitalOcean setup with automated deployment flows"
        },
        { 
          name: "Performance",
          details: "Core Web Vitals and advanced SEO optimization expertise"
        },
        { 
          name: "Testing & Quality",
          details: "Comprehensive testing suite with E2E and unit coverage"
        },
      ],
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-950" id="skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
            Ready to Contribute From Day One
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Bringing proven experience in AI agents and fashion e-commerce development to help accelerate ARI&apos;s mission of revolutionizing the shopping experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4 sm:space-y-6 h-full flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                {category.title}
              </h3>
              <div className="space-y-4 sm:space-y-6 flex-grow">
                {category.skills.map((skill, index) => (
                  <div 
                    key={skill.name} 
                    className={`group flex flex-col justify-between ${
                      index !== category.skills.length - 1 ? 'pb-4 sm:pb-6 border-b border-slate-200 dark:border-slate-800' : ''
                    }`}
                  >
                    <div className="space-y-1.5 sm:space-y-2">
                      <span className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </span>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                        {skill.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
