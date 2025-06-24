'use client'
import React, { useState, useEffect } from 'react';
import VideoModal from './VideoModal';

const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_DURATION = 2000;

const roles = [
  'Full Stack Developer',
  'AI Integration Specialist',
  'WebAR Developer',
  'React Expert'
] as const;

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentRole.length) {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? DELETING_SPEED : TYPING_SPEED);

    return () => clearTimeout(timeout);
  }, [currentText, currentRoleIndex, isDeleting]);

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-24 lg:pt-40 pb-20 lg:pb-32">

          {/* Status indicator */}
          <div className="mb-12 opacity-0 animate-fade-in">
            <div className="inline-flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="font-mono">Available for opportunities</span>
            </div>
          </div>

          {/* Main content */}
          <div className="space-y-12">

            {/* Name and title */}
            <div className="space-y-8 opacity-0 animate-fade-in animation-delay-200">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-slate-900 dark:text-slate-100">
                  Jacob Delott
                </h1>
                <div className="w-16 h-px bg-slate-900 dark:bg-slate-100" />
              </div>

              {/* Animated role */}
              <div className="h-12 flex items-center">
                <p className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-600 dark:text-slate-400">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="opacity-0 animate-fade-in animation-delay-400">
              <p className="text-lg sm:text-xl font-light text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                Crafting innovative web experiences with modern technologies.
                Specializing in AI integration, WebAR development, and scalable React applications.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in animation-delay-600">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center h-12 px-8 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-slate-800 dark:hover:bg-slate-200"
              >
                View Work
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="group inline-flex items-center justify-center h-12 px-8 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:border-slate-900 dark:hover:border-slate-100 hover:text-slate-900 dark:hover:text-slate-100"
              >
                About
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>

            {/* Skills grid */}
            <div className="pt-16 opacity-0 animate-fade-in animation-delay-800">
              <div className="mb-8">
                <h3 className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  Technologies
                </h3>
                <div className="w-8 h-px bg-slate-300 dark:bg-slate-700 mt-2" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {[
                  'AI Integration',
                  'WebAR',
                  'React/Next.js',
                  'TypeScript',
                  'Mobile-First',
                  'UI/UX Design',
                  'Node.js',
                  'Tailwind CSS'
                ].map((skill, index) => (
                  <div
                    key={skill}
                    className="group cursor-default opacity-0 animate-fade-in"
                    style={{ animationDelay: `${1000 + index * 100}ms` }}
                  >
                    <div className="text-sm font-light text-slate-600 dark:text-slate-400 transition-colors duration-300 group-hover:text-slate-900 dark:group-hover:text-slate-100">
                      {skill}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            

          </div>
        </div>
      </div>

      <VideoModal
        isOpen={isVideoModalOpen}
        closeModal={() => setIsVideoModalOpen(false)}
        videoUrl="/selfIntro.mp4"
      />

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-800 { animation-delay: 800ms; }
        .animation-delay-1200 { animation-delay: 1200ms; }
        .animation-delay-1400 { animation-delay: 1400ms; }
      `}</style>
    </div>
  );
}