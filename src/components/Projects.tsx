'use client';
import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import VideoModal from './VideoModal';

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

function ProjectCard({
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
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="w-full h-full flex flex-col">
      {/* Media Section */}
      <div className="mb-8">
        <div className="relative w-full aspect-[16/9] border border-gray-200 overflow-hidden group">
          {title === "Sneakar.io & Bold Brands" ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
              <source src="/newsneakararivid1.mp4" type="video/mp4" />
            </video>
          ) : imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill={true}
              className="object-contain transition-transform duration-700 group-hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          ) : null}
          {/* Electric border effect */}
          <div className="absolute inset-0 border border-cyan-400/0 group-hover:border-cyan-400/30 transition-all duration-500" />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="w-8 h-px bg-cyan-400 mx-auto mb-6" />
          <h3 className="text-3xl font-light text-gray-900 uppercase tracking-[0.1em] mb-4">
            {title}
          </h3>
          <p className="text-lg text-gray-600 font-light">
            {subtitle}
          </p>
        </div>

        {/* Overview */}
        <div className="text-center">
          <h4 className="text-xs font-medium text-cyan-600 uppercase tracking-[0.2em] mb-4">
            Overview
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed font-light">
            {description}
          </p>
        </div>

        {/* Features and Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
          {/* Left Column - Features */}
          <div className="space-y-4">
            <div>
              <div className="w-6 h-px bg-cyan-400 mb-4" />
              <h4 className="text-xs font-medium text-cyan-600 uppercase tracking-[0.2em] mb-4">
                Key Features
              </h4>
            </div>
            <div className="space-y-3">
              {features.slice(0, 4).map((feature, index) => (
                <div key={index} className="group flex items-start space-x-3">
                  <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center mt-1">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full group-hover:animate-pulse" />
                  </div>
                  <span className="text-gray-700 font-light text-sm leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Tech Stack */}
          <div className="space-y-4">
            <div>
              <div className="w-6 h-px bg-cyan-400 mb-4" />
              <h4 className="text-xs font-medium text-cyan-600 uppercase tracking-[0.2em] mb-4">
                Technology Stack
              </h4>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {techStack.slice(0, 6).map((tech) => (
                <div
                  key={tech}
                  className="group relative p-2 border border-gray-200 bg-gray-50 hover:border-cyan-400 hover:bg-cyan-50 transition-all duration-300 cursor-default"
                >
                  <div className="text-center">
                    <span className="text-xs font-medium text-gray-900 group-hover:text-cyan-600 transition-colors duration-300">
                      {tech}
                    </span>
                  </div>
                  <div className="absolute inset-0 border border-cyan-400/0 group-hover:border-cyan-400/20 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-4 mt-auto">
          <div className="w-6 h-px bg-cyan-400 mb-4" />
          <div className="space-y-3">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center w-full py-3 px-4 font-medium text-xs uppercase tracking-wider transition-all duration-300 bg-cyan-400 text-white hover:bg-cyan-500 border border-cyan-400 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-400/30"
              >
                View Main Site
                <svg className="ml-3 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            )}

            {secondaryLink && (
              <a
                href={secondaryLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center w-full py-3 px-4 font-medium text-xs uppercase tracking-wider transition-all duration-300 bg-white text-gray-900 border border-gray-300 hover:border-cyan-400 hover:text-cyan-600 hover:shadow-lg hover:shadow-cyan-400/20"
              >
                {secondaryLink.text}
                <svg className="ml-3 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            )}

            
            {tertiaryLink && (
              <div className="pt-2 border-t border-gray-200">
                <a
                  href={tertiaryLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center text-gray-600 hover:text-cyan-600 text-xs font-medium uppercase tracking-wider transition-colors duration-300"
                >
                  {tertiaryLink.text}
                  <svg className="ml-2 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {videoUrl && (
        <VideoModal
          isOpen={isVideoModalOpen}
          closeModal={() => setIsVideoModalOpen(false)}
          videoUrl={videoUrl}
        />
      )}
    </div>
  );
}

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      imageUrl: "/meridex.png",
      videoUrl: "/meridexarivid1.mp4",
      link: "https://meridexai.com",
      secondaryLink: {
        url: "https://ovationdigitalsolutions.com/case-studies/meridex",
        text: "View Case Study"
      }
    },
    {
      title: "Ovation Digital Solutions",
      subtitle: "Professional Web Development & AI Integration",
      description: "A professional software development company specializing in AI integration, WebAR solutions, E-commerce platforms, and enterprise-level applications. We partner with businesses to create innovative digital products that leverage cutting-edge technology to solve complex challenges and drive growth.",
      features: [
        "AI & LLM Integration Solutions",
        "WebAR & 3D Visualization",
        "E-commerce Development",
        "Enterprise Software Solutions",
        "Full-Stack Web Applications",
        "Cloud Infrastructure & DevOps"
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
        url: "https://presentation-sc.vercel.app/",
        text: "View Demo Site"
      }
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="projects" className="min-h-screen bg-white py-20 px-6 relative">
      {/* Subtle electric accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30" />

      {/* Global floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-light text-gray-900 uppercase tracking-[0.2em] mb-4">
            Featured
          </h2>
          <h2 className="text-6xl font-light text-cyan-600 uppercase tracking-[0.2em] mb-8">
            Projects
          </h2>
          <div className="w-20 h-px bg-cyan-400 mx-auto mb-8" />
          <p className="text-gray-600 font-light text-lg max-w-3xl mx-auto">
            Showcasing innovative solutions that bridge technology and business objectives
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-gray-300 hover:border-cyan-400 hover:bg-cyan-50 transition-all duration-300 group -ml-6"
            aria-label="Previous project"
          >
            <svg className="w-5 h-5 mx-auto text-gray-600 group-hover:text-cyan-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-gray-300 hover:border-cyan-400 hover:bg-cyan-50 transition-all duration-300 group -mr-6"
            aria-label="Next project"
          >
            <svg className="w-5 h-5 mx-auto text-gray-600 group-hover:text-cyan-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.title} className="w-full flex-shrink-0 px-8">
                  <div className="max-w-4xl mx-auto">
                    <div className="border border-gray-200 bg-gray-50/50 p-8 min-h-[700px]">
                      <ProjectCard {...project} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-3 mt-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 transition-all duration-300 ${index === currentIndex
                    ? 'bg-cyan-400 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Project Counter */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-4">
              <div className="w-8 h-px bg-cyan-400" />
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </span>
              <div className="w-8 h-px bg-cyan-400" />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-12 opacity-60" />
          <h3 className="text-3xl font-light text-gray-900 mb-6 uppercase tracking-[0.1em]">
            Ready to Build Your
          </h3>
          <h3 className="text-3xl font-light text-cyan-600 mb-6 uppercase tracking-[0.1em]">
            Next Project?
          </h3>
          <p className="text-gray-600 font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Let's discuss how we can bring your vision to life with cutting-edge technology and exceptional design
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-sm uppercase tracking-wider transition-all duration-300 bg-cyan-400 text-white hover:bg-cyan-500 border border-cyan-400 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-400/30"
            >
              Start a Project
              <svg className="ml-4 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-sm uppercase tracking-wider transition-all duration-300 bg-white text-gray-900 border border-gray-300 hover:border-cyan-400 hover:text-cyan-600 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}