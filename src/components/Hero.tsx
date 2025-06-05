'use client'
import React, { useState } from 'react';

import VideoModal from './VideoModal'

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 lg:pt-32 pb-16 lg:pb-32">
          <div className="space-y-16">

            {/* Header Section */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tighter">
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                  Hi, I'm Jacob Delott
                </span>
              </h1>
              <div className="h-1 w-24 bg-slate-900 dark:bg-slate-100" />
              <div className="space-y-4">
                <p className="text-xl sm:text-2xl font-light text-slate-700 dark:text-slate-300">
                  A Passionate Full Stack Developer
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                  Specializing in building innovative and user-friendly web applications with a focus on cutting-edge technologies like AI and WebAR.
                </p>
              </div>
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden sm:flex flex-wrap gap-4">
              <a
                href="#projects"
                className="interactive group inline-flex items-center justify-center h-14 px-8 bg-slate-900 text-white text-base font-medium rounded-lg whitespace-nowrap hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 transition-all duration-200 hover:translate-y-[-1px]"
              >
                <span>View Portfolio</span>
              </a>
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="interactive group inline-flex items-center justify-center h-14 px-8 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-base font-medium rounded-lg whitespace-nowrap hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200 hover:translate-y-[-1px]"
              >
                <span>About Me</span>
              </button>
            </div>

            {/* CTA Buttons - Mobile */}
            <div className="sm:hidden flex flex-col gap-3 px-4">
              <a
                href="#projects"
                className="interactive group flex items-center justify-center h-12 bg-slate-900 text-white text-sm font-medium rounded-lg whitespace-nowrap hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 transition-all duration-200"
              >
                View Portfolio
              </a>
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="interactive group flex items-center justify-center h-12 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg whitespace-nowrap hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200"
              >
                About Me
              </button>
            </div>

            {/* Experience Section */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-6">
                Experience
              </h3>
              <div className="prose dark:prose-invert">
                <p className="text-base text-slate-600 dark:text-slate-400">
                  With a passion for creating innovative and user-friendly web applications, I bring a unique blend of technical expertise and creative problem-solving skills to every project.
                </p>
                <ul className="mt-4 space-y-3 text-base text-slate-600 dark:text-slate-400 list-none pl-0">
                  <li className="flex items-center gap-3">
                    <div className="h-px w-4 bg-slate-400 dark:bg-slate-600"></div>
                    Proficient in cutting-edge technologies like AI, WebAR, and React/Next.js
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-px w-4 bg-slate-400 dark:bg-slate-600"></div>
                    Strong focus on mobile-first design and production-ready implementation
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-px w-4 bg-slate-400 dark:bg-slate-600"></div>
                    Excellent problem-solving and collaboration skills
                  </li>
                </ul>
              </div>
            </div>

            {/* Expertise Section */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-6">
                Expertise
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-8">
                {[
                  "AI Integration",
                  "WebAR",
                  "React/Next.js",
                  "Mobile-First",
                  "Production Deployment",
                  "UI/UX Design",
                  "TypeScript",
                  "Tailwind CSS",
                  "Agile Methodologies",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 text-slate-700 dark:text-slate-300"
                  >
                    <div className="h-px w-4 bg-slate-400 dark:bg-slate-600"></div>
                    <span className="text-sm">{skill}</span>
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
        videoUrl="/intro.mp4"
      />
    </div>
  )
}
