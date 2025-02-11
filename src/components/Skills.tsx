export default function Skills() {
  const skillCategories = [
    {
      title: "E-commerce & AI",
      skills: [
        { 
          name: "AI Integration",
          details: "Building AI agents and integrating Anthropic's Claude for personalized experiences"
        },
        { 
          name: "Fashion E-commerce",
          details: "AR-integrated fashion platforms with focus on user experience"
        },
        { 
          name: "Mobile-First Design",
          details: "Responsive, app-like web experiences optimized for all devices"
        },
      ],
    },
    {
      title: "Frontend Excellence",
      skills: [
        { 
          name: "React / Next.js",
          details: "Advanced state management and performance optimization"
        },
        { 
          name: "TypeScript / JavaScript",
          details: "Type-safe code with modern ES6+ features and patterns"
        },
        { 
          name: "UI/UX Implementation",
          details: "Pixel-perfect designs with Tailwind CSS and animations"
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
    <section className="py-20 bg-white dark:bg-slate-950" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
            Ready to Contribute From Day One
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Bringing proven experience in AI agents and fashion e-commerce development to help accelerate ARI&apos;s mission of revolutionizing the shopping experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-6 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {category.title}
              </h3>
              <div className="space-y-6 flex-grow">
                {category.skills.map((skill, index) => (
                  <div 
                    key={skill.name} 
                    className={`group flex flex-col justify-between ${
                      index !== category.skills.length - 1 ? 'pb-6 border-b border-slate-200 dark:border-slate-800' : ''
                    }`}
                  >
                    <div className="space-y-2">
                      <span className="text-lg font-medium text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </span>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
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
