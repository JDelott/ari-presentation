'use client'

import React, { useState } from 'react';
import Link from 'next/link';

// Types
interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqCardProps {
  item: FaqItem;
  index: number;
  isActive: boolean;
  onActivate: () => void;
}

interface CtaButtonProps {
  href: string;
  children?: React.ReactNode;
  primary?: boolean;
  className?: string;
}

// Constants
const FAQS: readonly FaqItem[] = [
  {
    id: 'background',
    question: 'What is your background?',
    answer: "I'm a Full Stack Software Engineer specializing in React, Next.js, and TypeScript. I focus on building performant web applications that combine clean user interfaces with solid architecture, always staying current with modern development practices."
  },
  {
    id: 'projects',
    question: 'What types of projects have you worked on?',
    answer: 'My projects have included e-commerce platforms, dashboards, and data visualization tools. I particularly enjoy working on projects that involve complex UI interactions and data manipulation.'
  },
  {
    id: 'approach',
    question: 'What is your approach to problem-solving?',
    answer: 'I believe in breaking down complex problems into smaller, manageable pieces. I then use a structured approach to understand the requirements, explore potential solutions, and implement the best solution.'
  }
] as const;

// Components
const FaqCard = ({ item, index, isActive, onActivate }: FaqCardProps) => {
  return (
    <div
      className={`group relative cursor-pointer transition-all duration-500 ${isActive ? 'scale-105' : 'hover:scale-102'
        }`}
      onClick={onActivate}
    >
      {/* Electric border effect */}
      <div className={`absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
        }`} style={{ padding: '2px' }}>
        <div className="w-full h-full bg-white" />
      </div>

      {/* Main card content */}
      <div className={`relative bg-white border-2 transition-all duration-300 ${isActive
          ? 'border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.3)]'
          : 'border-gray-200 hover:border-gray-300'
        }`}>
        {/* Header with number */}
        <div className="flex items-start p-8">
          <div className="flex-shrink-0 mr-6">
            <div className={`w-12 h-12 border-2 flex items-center justify-center transition-all duration-300 ${isActive
                ? 'border-cyan-400 bg-cyan-50'
                : 'border-gray-300 group-hover:border-cyan-400'
              }`}>
              <span className={`text-lg font-medium transition-colors duration-300 ${isActive ? 'text-cyan-600' : 'text-gray-600'
                }`}>
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          </div>

          <div className="flex-1">
            <h3 className={`text-2xl font-semibold uppercase tracking-wide mb-4 transition-colors duration-300 ${isActive ? 'text-cyan-600' : 'text-gray-900'
              }`}>
              {item.question}
            </h3>

            <div className={`transition-all duration-500 ${isActive ? 'opacity-100 max-h-96' : 'opacity-60 max-h-20 overflow-hidden'
              }`}>
              <p className="text-gray-700 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        </div>

        {/* Electric accent line */}
        <div className={`h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'
          }`} />
      </div>
    </div>
  );
};

const CtaButton = ({
  href,
  children,
  primary = false,
  className = ''
}: CtaButtonProps) => {
  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center justify-center px-8 py-4 font-medium text-sm uppercase tracking-wide transition-all duration-300 overflow-hidden ${primary
          ? 'bg-cyan-400 text-black hover:bg-cyan-500 border-2 border-cyan-400 hover:border-cyan-500'
          : 'bg-white text-gray-900 border-2 border-gray-300 hover:border-cyan-400 hover:text-cyan-600'
        } ${className}`}
    >
      {/* Electric glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <span className="relative z-10 flex items-center">
        {children || 'Click Here'}
      </span>

      {/* Bottom electric line */}
      <div className="absolute bottom-0 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-500" />
    </Link>
  );
};

const ArrowIcon = () => (
  <svg
    className="ml-4 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M13 7l5 5m0 0l-5 5m5-5H6"
    />
  </svg>
);

// Main Component
const Faq = () => {
  const [activeItemId, setActiveItemId] = useState<string | null>(FAQS[0].id);

  const handleActivate = (id: string) => {
    setActiveItemId(activeItemId === id ? null : id);
  };

  return (
    <section className="relative min-h-screen bg-white py-20 px-6" aria-labelledby="faq-title">
      {/* Subtle electric accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h2 id="faq-title" className="text-6xl font-light text-gray-900 mb-4 uppercase tracking-widest">
              FAQ
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-px bg-cyan-400" />
          </div>
          <p className="text-gray-600 font-light leading-relaxed max-w-2xl mx-auto text-lg mt-8">
            Essential information about my background and approach
          </p>
        </div>

        {/* FAQ Cards Grid */}
        <div className="grid gap-6 mb-20">
          {FAQS.map((item, index) => (
            <FaqCard
              key={item.id}
              item={item}
              index={index}
              isActive={activeItemId === item.id}
              onActivate={() => handleActivate(item.id)}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center relative">
          {/* Electric accent line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-12 opacity-60" />

          <div className="relative">
            <h3 className="text-3xl font-light text-gray-900 mb-6 uppercase tracking-wide">
              Ready to collaborate?
            </h3>
            <p className="text-gray-600 font-light leading-relaxed max-w-2xl mx-auto mb-12">
              I'm always interested in discussing new opportunities and challenging projects.
              Let's connect and see how we can bring your ideas to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <CtaButton href="/contact" primary>
                Get in Touch
                <ArrowIcon />
              </CtaButton>
              <CtaButton href="/portfolio">
                View Portfolio
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;