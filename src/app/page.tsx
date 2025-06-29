import React from 'react'

import Hero from "../components/Hero"
import  Projects from '../components/Projects'
import Skills  from '../components/Skills'
import Contact from '../components/Contact'
import Testimonial from '../components/Testimonial'
import  Faq  from '../components/Faq'

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="max-w-6xl mx-auto px-4">
        <Hero />
        <Projects />
        <Skills />
        <Faq />
        <Testimonial />
        <Contact />
      </main>
    </div>
  );
} 