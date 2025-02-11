"use client";

export default function Hero() {
  return (
    <div className="bg-white dark:bg-slate-950 flex min-h-screen pb-32">
      {/* Left Panel */}
      <div className="flex-1 flex items-center justify-center pt-20">
        <div className="w-full max-w-xl p-8">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tighter">
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                  Hi ARI Team,
                </span>
              </h1>
              <div className="h-1 w-24 bg-slate-900 dark:bg-slate-100 mt-2" />
              <p className="text-lg sm:text-xl mt-4 font-light text-slate-700 dark:text-slate-300">
                I&apos;m Jacob Delott
              </p>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
                A Front End Engineer passionate about revolutionizing shopping experiences through AI
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {[
                  "Fashion E-commerce",
                  "AI Integration",
                  "React/Next.js",
                  "Mobile-First",
                  "Production Deployment",
                  "UI/UX"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm
                             bg-slate-100 dark:bg-slate-800/50 
                             text-slate-700 dark:text-slate-300
                             border border-slate-200 dark:border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                  With experience building both AI-powered platforms and fashion e-commerce applications, 
                  I&apos;m excited about contributing to ARI&apos;s vision. I&apos;ve successfully:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                  <li>Developed Meridex AI, integrating Anthropic&apos;s AI for personalized user experiences</li>
                  <li>Built Sneakar.io, an AR-integrated fashion e-commerce platform</li>
                  <li>Managed complete development lifecycles from concept to production</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#projects"
                  className="interactive group flex items-center justify-center h-10 px-6
                           bg-slate-900 text-white text-sm font-medium
                           rounded-lg whitespace-nowrap
                           hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700
                           transition-all duration-200 hover:translate-y-[-1px]"
                >
                  <span>View My Work</span>
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="mailto:jldelott@gmail.com"
                  className="interactive group flex items-center justify-center h-10 px-6
                           border border-slate-200 dark:border-slate-700
                           text-slate-700 dark:text-slate-300 text-sm font-medium
                           rounded-lg whitespace-nowrap
                           hover:bg-slate-100 dark:hover:bg-slate-800/50
                           hover:border-slate-300 dark:hover:border-slate-600
                           transition-all duration-200 hover:translate-y-[-1px]"
                >
                  <span>Let&apos;s Connect</span>
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Video */}
      <div className="hidden lg:flex flex-1 items-center justify-center pt-20">
        <div className="w-full max-w-2xl p-8">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl 
                        bg-gradient-to-br from-slate-100 to-slate-200 
                        dark:from-slate-900 dark:to-slate-800">
            <video 
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/sneakarvi221.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
