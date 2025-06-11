'use client'

import React, { useState } from 'react';
import Link from 'next/link';

// Types
interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

interface CtaButtonProps {
  
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
}

// Constants
const FAQS: FaqItem[] = [
  {
    id: 'background',
    question: 'What is your background?',
    answer: 'As a Full Stack Software Engineer, I specialize in building modern web applications using React, Next.js, and TypeScript. With a strong foundation in frontend development, I craft performant, scalable solutions that combine elegant user interfaces with robust architecture. My passion lies in creating exceptional digital experiences that merge technical excellence with intuitive design principles. I stay current with emerging technologies and best practices to deliver innovative solutions that exceed client expectations.',
  },
  {
    id: 'projects',
    question: 'What types of projects have you worked on?',
    answer: 'My projects have included e-commerce platforms, dashboards, and data visualization tools. I particularly enjoy working on projects that involve complex UI interactions and data manipulation.',
  },
  {
    id: 'approach',
    question: 'What is your approach to problem-solving?',
    answer: 'I believe in breaking down complex problems into smaller, manageable pieces. I then use a structured approach to understand the requirements, explore potential solutions, and implement the best solution.',
  },
];

// Components
const FaqAccordion = ({ item, isOpen, onToggle }: FaqAccordionProps) => {
  const accordionId = `faq-answer-${item.id}`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
        aria-expanded={isOpen}
        aria-controls={accordionId}
      >
        <h3 className="text-xl font-semibold text-gray-900">{item.question}</h3>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          id={accordionId}
          className="px-6 py-4 text-gray-700 bg-gray-50"
          role="region"
          aria-labelledby={`question-${item.id}`}
        >
          {item.answer}
        </div>
      )}
    </div>
  );
};

const CtaButton = ({
  href,
  children,
  primary = false,
  className = ''
}: CtaButtonProps) => {
  const baseStyles = 'inline-flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-200';
  const variantStyles = primary
    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
    : 'bg-gray-100 text-gray-800 hover:bg-gray-200';

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </Link>
  );
};

const ArrowIcon = () => (
  <svg
    className="ml-2 w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 5l7 7-7 7M5 5l7 7-7 7"
    />
  </svg>
);

// Main Component
const Faq = () => {
  const [openItemId, setOpenItemId] = useState < string | null > (null);

  const handleToggle = (id: string) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <section className="max-w-4xl mx-auto py-16 px-4" aria-labelledby="faq-title">
      <div className="text-center mb-12">
        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
          Got Questions?
        </span>
        <h2 id="faq-title" className="text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Find answers to common questions about my experience and approach
        </p>
        <div className="flex justify-center gap-4 mb-12">
          <CtaButton href="/contact" primary>
            <span className="flex items-center">
              Schedule a Call
              <ArrowIcon />
            </span>
          </CtaButton>
          <CtaButton href="/portfolio">View My Work</CtaButton>
        </div>
      </div>

      <div className="space-y-4 mb-12">
        {FAQS.map((faq) => (
          <div key={faq.id}>
            <FaqAccordion
              item={faq}
              isOpen={openItemId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          </div>
        ))}
      </div>

      <div className="bg-blue-50 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Still have questions?
        </h3>
        <p className="text-gray-600 mb-6">
          Can&apos;t find the answer you&apos;re looking for? Feel free to reach out directly.
        </p>
        <div className="flex justify-center gap-4">
          <CtaButton href="/contact" primary>Contact Me</CtaButton>
          <CtaButton href="https://calendly.com/your-link">
            Book a Discovery Call
          </CtaButton>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500">
          Want to stay updated?{' '}
          <Link
            href="/newsletter"
            className="text-blue-600 hover:text-blue-700 underline"
          >
            Subscribe to my newsletter
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Faq;