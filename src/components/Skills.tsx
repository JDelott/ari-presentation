'use client'
import React, { useState, useRef, useEffect } from 'react';

interface Skill {
  readonly name: string;
  readonly details: string;
}

interface SkillCategory {
  readonly title: string;
  readonly skills: readonly Skill[];
}

const SKILL_CATEGORIES = [
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
        details: "AWS, DigitalOcean setup with automated deployment flows and infrastructure as code"
      },
      {
        name: "Performance Optimization",
        details: "Core Web Vitals mastery, advanced SEO optimization, and lighthouse score maximization"
      },
      {
        name: "Testing & Quality Assurance",
        details: "Comprehensive testing strategies with E2E, unit, and integration coverage using modern frameworks"
      },
    ],
  },
] as const satisfies readonly SkillCategory[];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-white dark:bg-black relative overflow-hidden"
      id="skills"
    >
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Swiss Grid Background */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-slate-900 dark:border-white" />
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-24 h-full">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="border-b border-slate-900 dark:border-white" />
          ))}
        </div>
      </div>

      {/* Floating Tooltip */}
      {hoveredSkill && (
        <div
          className="absolute z-50 pointer-events-none transition-all duration-200 ease-out"
          style={{
            left: mousePosition.x + 20,
            top: mousePosition.y - 10,
            transform: 'translateY(-50%)',
          }}
        >
          <div className="bg-black dark:bg-white text-white dark:text-black px-4 py-3 rounded-lg shadow-2xl max-w-sm border border-slate-200 dark:border-slate-800">
            <div className="text-sm font-medium mb-1">
              {SKILL_CATEGORIES.flatMap(cat => cat.skills).find(skill => skill.name === hoveredSkill)?.name}
            </div>
            <div className="text-xs opacity-80 leading-relaxed">
              {SKILL_CATEGORIES.flatMap(cat => cat.skills).find(skill => skill.name === hoveredSkill)?.details}
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-24">
        {/* Header Section */}
        <div className="grid grid-cols-12 gap-8 mb-32">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <div className="space-y-12">
              <div className="relative group">
                {/* Animated accent line with moving indicator */}
                <div className="absolute -left-4 top-0 w-1 bg-black dark:bg-white overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-b from-transparent via-slate-400 to-transparent opacity-40 animate-pulse" />
                  <div className="absolute top-0 w-full h-6 bg-black dark:bg-white animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }} />
                </div>

                {/* Main headline with enhanced typography */}
                <div className="overflow-hidden">
                  <h2 className="text-4xl lg:text-7xl font-light tracking-[-0.02em] text-black dark:text-white leading-[0.8] transform transition-all duration-700 group-hover:translate-x-1">
                    <span className="inline-block opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
                      Ready to
                    </span>
                    <br />
                    <span className="font-black bg-gradient-to-r from-black via-slate-700 to-black dark:from-white dark:via-slate-300 dark:to-white bg-clip-text text-transparent inline-block opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards] hover:scale-[1.02] transition-transform duration-300 cursor-default">
                      Contribute
                    </span>
                    <br />
                    <span className="inline-block opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
                      From Day{' '}
                      <span className="relative inline-block">
                        One
                        {/* Dynamic underline */}
                        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-black dark:via-white to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
                        {/* Subtle glow effect */}
                        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out opacity-30 blur-sm" />
                      </span>
                    </span>
                  </h2>
                </div>
              </div>

              <div className="relative">
                <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-2xl font-light leading-relaxed transform transition-all duration-500 hover:text-slate-800 dark:hover:text-slate-200 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]">
                  Bringing proven experience in{' '}
                  <span className="relative inline-block group/ai cursor-default">
                    <span className="relative z-10 font-medium text-black dark:text-white transition-colors duration-300">
                      AI agents
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-orange-200 dark:from-yellow-800 dark:to-orange-800 transform scale-x-0 group-hover/ai:scale-x-100 transition-transform duration-400 origin-left opacity-20 rounded-sm" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-400 dark:from-yellow-600 dark:to-orange-600 transform scale-0 group-hover/ai:scale-100 transition-transform duration-400 opacity-10 rounded-sm blur-sm" />
                  </span>
                  {' '}and{' '}
                  <span className="relative inline-block group/ecom cursor-default">
                    <span className="relative z-10 font-medium text-black dark:text-white transition-colors duration-300">
                      fashion e-commerce
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 transform scale-x-0 group-hover/ecom:scale-x-100 transition-transform duration-400 origin-left opacity-20 rounded-sm" />
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 transform scale-0 group-hover/ecom:scale-100 transition-transform duration-400 opacity-10 rounded-sm blur-sm" />
                  </span>
                  {' '}to drive{' '}
                  <span className="font-semibold text-black dark:text-white relative">
                    immediate impact
                    <div className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-gradient-to-r from-black to-slate-600 dark:from-white dark:to-slate-400 opacity-30" />
                  </span>
                  {' '}and innovation.
                </p>

                {/* Floating accent elements */}
                <div className="absolute -right-6 top-2 space-y-3 opacity-15 dark:opacity-10">
                  <div className="w-2 h-2 bg-black dark:bg-white rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '3s' }} />
                  <div className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full animate-pulse ml-2" style={{ animationDelay: '1s', animationDuration: '3s' }} />
                  <div className="w-1 h-1 bg-black dark:bg-white rounded-full animate-pulse ml-1" style={{ animationDelay: '2s', animationDuration: '3s' }} />
                </div>

                {/* Geometric accent */}
                <div className="absolute -left-2 bottom-0 w-8 h-px bg-gradient-to-r from-black to-transparent dark:from-white dark:to-transparent opacity-20" />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          {SKILL_CATEGORIES.map((category, categoryIndex) => (
            <div key={category.title} className="space-y-12">
              {/* Category Header */}
              <div className="relative">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-black dark:bg-white rounded-full flex items-center justify-center">
                    <span className="text-white dark:text-black font-bold text-lg">
                      {String(categoryIndex + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-black dark:text-white leading-tight">
                      {category.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-8 pl-18">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="group relative cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-2 h-2 bg-slate-400 dark:bg-slate-600 rounded-full mt-3 group-hover:bg-black dark:group-hover:bg-white transition-colors duration-200" />
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-black dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors duration-200">
                          {skill.name}
                        </h4>
                        <div className="mt-2 h-px bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent group-hover:from-black dark:group-hover:from-white transition-colors duration-200" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="grid grid-cols-12 gap-8 mt-32">
          <div className="col-span-12 lg:col-span-6 lg:col-start-4">
            <div className="text-center space-y-8">
              <div className="w-24 h-px bg-black dark:bg-white mx-auto" />
              <p className="text-lg text-slate-600 dark:text-slate-400 font-light">
                Ready to discuss how these skills can drive your next project forward?
              </p>
              <button className="group inline-flex items-center space-x-3 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors duration-200">
                <span className="font-medium">Let's Connect</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;