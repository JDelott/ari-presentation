'use client'

import React, { useState } from 'react';
import Link from 'next/link';

// Types
interface FaqItem {
  id: string;
  question: string;
  answer: string;
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

const Faq = () => {
  const [selectedId, setSelectedId] = useState<string>(FAQS[0].id);

  return (
    <section className="min-h-screen bg-white py-20 px-6">
      {/* Subtle electric accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-6xl font-light text-gray-900 uppercase tracking-widest mb-4">
            FAQ
          </h2>
          <div className="w-20 h-px bg-cyan-400 mb-8" />
          <p className="text-gray-600 font-light text-lg max-w-2xl">
            Essential information about my background and approach
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column - Questions */}
          <div className="space-y-8">
            {FAQS.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`group w-full text-left transition-all duration-300 ${selectedId === item.id ? 'opacity-100' : 'opacity-60 hover:opacity-80'
                  }`}
              >
                <div className="flex items-start space-x-6">
                  <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center transition-colors duration-300 ${selectedId === item.id
                      ? 'text-cyan-600 font-medium'
                      : 'text-gray-400 group-hover:text-gray-600'
                    }`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-medium uppercase tracking-wide transition-colors duration-300 ${selectedId === item.id
                        ? 'text-cyan-600'
                        : 'text-gray-900 group-hover:text-gray-700'
                      }`}>
                      {item.question}
                    </h3>
                    <div className={`mt-3 h-px bg-gradient-to-r transition-all duration-300 ${selectedId === item.id
                        ? 'from-cyan-400 to-transparent opacity-100'
                        : 'from-gray-200 to-transparent opacity-50 group-hover:opacity-75'
                      }`} />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column - Answer */}
          <div className="lg:pl-12">
            <div className="sticky top-20">
              <div className="mb-8">
                <div className="w-12 h-px bg-cyan-400 mb-6" />
                <h4 className="text-sm font-medium text-cyan-600 uppercase tracking-widest mb-4">
                  Answer
                </h4>
              </div>
              <div className="transition-all duration-500">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {FAQS.find(item => item.id === selectedId)?.answer}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-12 opacity-60" />
          <h3 className="text-3xl font-light text-gray-900 mb-6 uppercase tracking-wide">
            Ready to collaborate?
          </h3>
          <p className="text-gray-600 font-light leading-relaxed max-w-2xl mx-auto mb-12">
            I'm always interested in discussing new opportunities and challenging projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-sm uppercase tracking-wide transition-all duration-300 bg-cyan-400 text-black hover:bg-cyan-500 border-2 border-cyan-400 hover:border-cyan-500"
            >
              Get in Touch
              <svg className="ml-4 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/portfolio"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-sm uppercase tracking-wide transition-all duration-300 bg-white text-gray-900 border-2 border-gray-300 hover:border-cyan-400 hover:text-cyan-600"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;