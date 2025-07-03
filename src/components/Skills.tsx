'use client'

import React, { useState } from 'react';
import Link from 'next/link';

// Types
interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: readonly string[];
}

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: readonly string[];
  highlights: readonly string[];
}

// Constants
const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    description: 'Core languages powering modern applications',
    skills: ['Python 3', 'JavaScript ES6+', 'TypeScript', 'SQL', 'HTML5', 'CSS3']
  },
  {
    id: 'frontend',
    title: 'Front-End Technologies',
    description: 'Building exceptional user experiences',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Shadcn/ui', 'AOS', 'Three.js', 'A-Frame']
  },
  {
    id: 'backend',
    title: 'Back-End & Infrastructure',
    description: 'Scalable systems and robust architecture',
    skills: ['Express', 'Django 4', 'FastAPI', 'Node.js', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Digital Ocean', 'Nginx', 'PM2']
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    description: 'Cutting-edge artificial intelligence integration',
    skills: ['Anthropic Claude API', 'OpenAI', 'Whisper', 'Vapi', 'Computer Vision', 'NLP', 'OCR', 'PyTorch', 'Multimodal AI', 'Speech Processing']
  },
  {
    id: 'architecture',
    title: 'System Design',
    description: 'Enterprise-grade architectural patterns',
    skills: ['Microservices', 'Domain-Driven Design', 'Message Passing', 'API Design', 'Distributed Systems']
  }
] as const;

const FEATURED_PROJECTS: readonly Project[] = [
  {
    id: 'satellite-ide',
    title: 'Satellite IDE',
    description: 'Local AI IDE with Speech-to-Code capabilities',
    technologies: ['Electron', 'React', 'Monaco Editor', 'Anthropic Claude API'],
    highlights: ['Offline AI code generation', 'Speech-to-code commands', 'Secure local API management', 'Git integration']
  },
  {
    id: 'vaya-call',
    title: 'VAYA Call',
    description: 'AI Voice Assistant Platform with 3D avatars',
    technologies: ['Next.js', 'TypeScript', 'Vapi API', 'Three.js', 'React Three Fiber'],
    highlights: ['Multimodal AI conversations', '3D phoneme-based animation', 'Real-time state management']
  },
  {
    id: 'auction-place',
    title: 'AuctionPlace',
    description: 'AI-Powered Auction Platform with computer vision',
    technologies: ['Next.js', 'PostgreSQL', 'Anthropic Claude', 'Stripe', 'Web Speech API'],
    highlights: ['80% faster listing process', 'Conversational speech-to-form', 'AI-enhanced pricing', 'Creator verification']
  },
  {
    id: 'discord-triage',
    title: 'Discord Triage',
    description: 'AI-Powered GitHub Issue Creation Platform',
    technologies: ['Discord Bot', 'GitHub API', 'Anthropic Claude', 'OAuth2', 'DigitalOcean'],
    highlights: ['Automated issue creation', 'Multi-server support', 'Role-based access control']
  }
] as const;

type ViewMode = 'skills' | 'projects';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(SKILL_CATEGORIES[0].id);
  const [viewMode, setViewMode] = useState<ViewMode>('skills');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const selectedSkillCategory = SKILL_CATEGORIES.find(cat => cat.id === selectedCategory);

  return (
    <section className="min-h-screen bg-white py-20 px-6">
      {/* Subtle electric accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30" />

      {/* Floating Particles - Light version */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-6xl font-light text-gray-900 uppercase tracking-[0.2em] mb-4">
                Technical
              </h2>
              <h2 className="text-6xl font-light text-cyan-600 uppercase tracking-[0.2em] mb-4">
                Expertise
              </h2>
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-50 border border-gray-200 rounded-sm overflow-hidden">
              <button
                onClick={() => setViewMode('skills')}
                className={`px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 ${viewMode === 'skills'
                    ? 'bg-cyan-400 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
              >
                Skills
              </button>
              <button
                onClick={() => setViewMode('projects')}
                className={`px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 ${viewMode === 'projects'
                    ? 'bg-cyan-400 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
              >
                Projects
              </button>
            </div>
          </div>

          <div className="w-20 h-px bg-cyan-400 mb-8" />
          <p className="text-gray-600 font-light text-lg max-w-3xl">
            Full-stack expertise spanning modern web technologies, AI integration, and scalable system architecture
          </p>
        </div>

        {viewMode === 'skills' ? (
          /* Skills View */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Categories */}
            <div className="lg:col-span-1 space-y-4">
              {SKILL_CATEGORIES.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group w-full text-left p-6 border transition-all duration-300 ${selectedCategory === category.id
                      ? 'border-cyan-400 bg-cyan-50 shadow-lg shadow-cyan-400/20'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                >
                  <div className="flex items-center space-x-4 mb-3">
                    <div className={`w-8 h-8 flex items-center justify-center text-xs font-bold transition-colors duration-300 ${selectedCategory === category.id
                        ? 'text-cyan-600 bg-cyan-100'
                        : 'text-gray-500 bg-gray-100'
                      }`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${selectedCategory === category.id
                        ? 'text-cyan-600'
                        : 'text-gray-900 group-hover:text-gray-700'
                      }`}>
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {category.description}
                  </p>
                </button>
              ))}
            </div>

            {/* Right Column - Skills Grid */}
            <div className="lg:col-span-2">
              <div className="sticky top-20">
                <div className="mb-8">
                  <div className="w-12 h-px bg-cyan-400 mb-6" />
                  <h4 className="text-sm font-medium text-cyan-600 uppercase tracking-widest mb-2">
                    {selectedSkillCategory?.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {selectedSkillCategory?.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedSkillCategory?.skills.map((skill) => (
                    <div
                      key={skill}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`group relative p-4 border border-gray-200 bg-gray-50 hover:border-cyan-400 hover:bg-cyan-50 transition-all duration-300 cursor-pointer ${hoveredSkill === skill ? 'transform scale-105 shadow-lg shadow-cyan-400/20' : ''
                        }`}
                    >
                      <div className="text-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mx-auto mb-3 group-hover:animate-pulse" />
                        <span className="text-sm font-medium text-gray-900 group-hover:text-cyan-600 transition-colors duration-300">
                          {skill}
                        </span>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 border border-cyan-400/0 group-hover:border-cyan-400/30 transition-all duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Projects View */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {FEATURED_PROJECTS.map((project, index) => (
              <div
                key={project.id}
                className="group relative p-8 border border-gray-200 bg-gray-50 hover:border-cyan-400 hover:bg-cyan-50 transition-all duration-500"
              >
                {/* Project Number */}
                <div className="absolute top-4 right-4 text-xs font-bold text-gray-400 group-hover:text-cyan-600 transition-colors duration-300">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-xs font-medium text-cyan-600 uppercase tracking-wider mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-gray-100 text-gray-700 border border-gray-200 group-hover:border-cyan-400/30 group-hover:bg-cyan-50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="text-xs font-medium text-cyan-600 uppercase tracking-wider mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-xs text-gray-600 leading-relaxed">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border border-cyan-400/0 group-hover:border-cyan-400/20 transition-all duration-500" />
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-32 text-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-12 opacity-60" />
          <h3 className="text-3xl font-light text-gray-900 mb-6 uppercase tracking-[0.1em]">
            Ready to Build Something
          </h3>
          <h3 className="text-3xl font-light text-cyan-600 mb-6 uppercase tracking-[0.1em]">
            Extraordinary?
          </h3>
          <p className="text-gray-600 font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Let's discuss how we can leverage cutting-edge technology to bring your vision to life
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-sm uppercase tracking-wider transition-all duration-300 bg-cyan-400 text-white hover:bg-cyan-500 border border-cyan-400 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-400/30"
            >
              Initiate Contact
              <svg className="ml-4 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/portfolio"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-sm uppercase tracking-wider transition-all duration-300 bg-white text-gray-900 border border-gray-300 hover:border-cyan-400 hover:text-cyan-600 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              Explore Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;