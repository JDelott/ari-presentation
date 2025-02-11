'use client';

import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  techStack: string[];
  imageUrl?: string;
  videoUrl?: string;
  link?: string;
  secondaryLink?: { url: string; text: string };
  tertiaryLink?: {
    url: string;
    text: string;
  };
}

function ProjectSection({ 
  title, 
  subtitle, 
  description, 
  features, 
  techStack, 
  imageUrl,
  videoUrl,
  link,
  secondaryLink,
  tertiaryLink
}: ProjectCardProps) {
  return (
    <div className="py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto px-4">
          <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-xl text-slate-700 dark:text-slate-300">
            {subtitle}
          </p>
        </div>

        {/* Media Section */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-6">
            {videoUrl && (
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 shadow-2xl">
                <video
                  className="w-full h-full object-contain"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            {imageUrl && (
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 shadow-2xl">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="object-contain rounded-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
            )}
          </div>
        </div>

        {/* Redesigned Content Section */}
        <div className="max-w-5xl mx-auto px-4 mt-16">
          {/* Overview Section */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
              Overview
            </h4>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
              {description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column - Features */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-slate-900 dark:text-slate-100">
                Key Features
              </h4>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li 
                    key={index} 
                    className="flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 
                                   group-hover:bg-slate-900 dark:group-hover:bg-slate-400 
                                   transition-colors duration-200 mr-4"
                    />
                    <span className="text-slate-700 dark:text-slate-300 
                                   group-hover:text-slate-900 dark:group-hover:text-slate-100 
                                   transition-colors duration-200"
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Tech Stack & Links */}
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold mb-6 text-slate-900 dark:text-slate-100">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800/50 
                               text-slate-700 dark:text-slate-300 text-sm 
                               border border-slate-200 dark:border-slate-700
                               hover:border-slate-300 dark:hover:border-slate-600 
                               transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  {link && (
                    <a 
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-[180px] h-12
                               bg-slate-900 text-white text-sm font-medium
                               rounded-lg whitespace-nowrap
                               hover:bg-slate-800 
                               dark:bg-slate-800 dark:hover:bg-slate-700 
                               transition-all duration-200 
                               hover:translate-y-[-1px]"
                    >
                      View Main Site <span className="ml-2">→</span>
                    </a>
                  )}
                  {secondaryLink && (
                    <a 
                      href={secondaryLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-[180px] h-12
                               border border-slate-200 dark:border-slate-700 
                               text-slate-700 dark:text-slate-300 text-sm font-medium
                               rounded-lg whitespace-nowrap
                               hover:bg-slate-100 dark:hover:bg-slate-800/50 
                               hover:border-slate-300 dark:hover:border-slate-600
                               transition-all duration-200 
                               hover:translate-y-[-1px]"
                    >
                      {secondaryLink.text} <span className="ml-2">→</span>
                    </a>
                  )}
                </div>
                {tertiaryLink && (
                  <div className="flex justify-start pl-[30px]">
                    <a 
                      href={tertiaryLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-slate-600 dark:text-slate-400 
                               hover:text-slate-900 dark:hover:text-slate-200 
                               text-sm transition-colors"
                    >
                      {tertiaryLink.text} <span className="ml-1">→</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Sneakar.io & Bold Brands",
      subtitle: "Bridging AR Technology and E-Commerce",
      description: "A comprehensive web platform that explains AR shoe app functionality, provides clear user guidance, drives direct product sales, and simplifies complex technology for average consumers. The platform seamlessly integrates educational content with e-commerce functionality, creating an intuitive journey from technology understanding to purchase.",
      features: [
        "Intuitive AR app usage guide",
        "Visual and textual AR instructions",
        "Clear purchase pathways",
        "Educational content integration",
        "Mobile-first design",
        "Brand showcase platform"
      ],
      techStack: [
        "Next.js",
        "React",
        "Formspree",
        "Shopify",
        "Tailwind CSS",
        "Framer Motion"
      ],
      videoUrl: "/newsneakararivid1.mp4",
      imageUrl: "/boldbrands.png",
      link: "https://sneakar.io",
      secondaryLink: {
        url: "https://ovationdigitalsolutions.com/case-studies/sneakar",
        text: "View Case Study"
      },
      tertiaryLink: {
        url: "https://sneakar.io/boldbrands",
        text: "View Bold Brands"
      }
    },
    {
      title: "Meridex AI",
      subtitle: "Real Estate Portfolio & Due Diligence Platform",
      description: "An AI-powered platform revolutionizing real estate investment analysis and portfolio management. The platform streamlines property research, enables portfolio comparison, automates investment metrics calculation, and simplifies the due diligence workflow through intelligent data processing and AI-assisted insights.",
      features: [
        "AI-powered property analysis",
        "Real-time data integration",
        "Multi-property comparison",
        "Portfolio analysis",
        "Investment metrics calculation",
        "Natural language chat interface"
      ],
      techStack: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Anthropic API",
        "Realtor.com API",
        "Node.js",
        "Stripe",
        "Digital Ocean"
      ],
      videoUrl: "/",
      link: "https://meridex.ai",
      secondaryLink: {
        url: "https://ovationdigitalsolutions.com/case-studies/meridex",
        text: "View Case Study"
      }
    },
    {
      title: "Ovation Digital Solutions",
      subtitle: "Professional Web Development & AI Integration",
      description: "Building innovative digital products with a focus on AI integration, real estate technology, and enterprise solutions. Specializing in full-stack web applications and delivering cutting-edge solutions for businesses across various sectors.",
      features: [
        "Custom software development",
        "AI integration solutions",
        "Real estate technology",
        "Enterprise platforms",
        "Web development",
        "Cloud infrastructure"
      ],
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "MongoDB",
        "AWS",
        "Digital Ocean",
        "Anthropic API",
        "OpenAI"
      ],
      imageUrl: "/ovationari1.png",
      link: "https://ovationdigitalsolutions.com",
    },
    {
      title: "Crowd Connect RSVP",
      subtitle: "Enterprise-Grade Event Management Platform",
      description: "Enterprise-level platform connecting admins, agents, and attendees in a seamless event management ecosystem. Features specialized portals for each user type, real-time notifications, and comprehensive analytics. The platform replaced legacy software with a modern, intuitive interface unifying previously fragmented workflows. (Note: Link directs to a presentation site showcasing the platform's capabilities, as the actual software is used internally by enterprise clients)",
      features: [
        "Three-tiered access control",
        "Real-time notifications",
        "Multi-tenant architecture",
        "Custom analytics engine",
        "Automated workflow management",
        "Intelligent data segregation"
      ],
      techStack: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT Auth",
        "Tailwind CSS"
      ],
      imageUrl: "/crowdconnectari1.jpeg",
      link: "https://www.crowdconnectrsvp.com",
      secondaryLink: {
        url: "https://ovationdigitalsolutions.com/case-studies/crowdconnect",
        text: "View Case Study"
      },
      tertiaryLink: {
        url: "https://presentation-sc.vercel.app/admin",
        text: "View Demo Site"
      }
    }
  ];

  return (
    <section id="projects" className="bg-white dark:bg-slate-950 mt-32">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-5xl font-bold text-center mb-20 text-slate-900 dark:text-slate-100">
          Featured Projects
        </h2>
        <div>
          {projects.map((project) => (
            <ProjectSection key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
