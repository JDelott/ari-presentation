'use client';

export default function Contact() {
  return (
    <section className="py-20" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
          Let&apos;s Discuss How I Can Help ARI
        </h2>
        <div className="inline-flex flex-col items-center space-y-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl p-8">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I&apos;m excited about the possibility of contributing to ARI&apos;s mission and would love to discuss how my experience with AI and fashion e-commerce aligns with your needs.
          </p>
          <a
            href="mailto:jldelott@gmail.com"
            className="text-lg hover:text-blue-500 transition-colors interactive"
          >
            jldelott@gmail.com
          </a>
          <a
            href="tel:+19402933160"
            className="text-lg hover:text-blue-500 transition-colors interactive"
          >
            (940) 293-3160
          </a>
        </div>
      </div>
    </section>
  );
}
