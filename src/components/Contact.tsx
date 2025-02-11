'use client';

export default function Contact() {
  return (
    <section className="py-12 sm:py-16 lg:py-20" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
            Let&apos;s Discuss How I Can Help ARI
          </h2>
          <div className="inline-flex flex-col items-center space-y-4 sm:space-y-6
                        bg-white dark:bg-black 
                        border border-gray-200 dark:border-gray-800 
                        rounded-xl sm:rounded-2xl 
                        p-6 sm:p-8 lg:p-10">
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              I&apos;m excited about the possibility of contributing to ARI&apos;s mission and would love to discuss how my experience with AI and fashion e-commerce aligns with your needs.
            </p>
            <div className="flex flex-col items-center space-y-3 sm:space-y-4">
              <a
                href="mailto:jldelott@gmail.com"
                className="text-base sm:text-lg hover:text-blue-500 transition-colors interactive"
              >
                jldelott@gmail.com
              </a>
              <a
                href="tel:+19402933160"
                className="text-base sm:text-lg hover:text-blue-500 transition-colors interactive"
              >
                (940) 293-3160
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
