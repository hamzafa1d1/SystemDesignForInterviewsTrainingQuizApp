import { PageShell } from '../components/PageShell'
import { useState } from 'react'







export function AboutPage() {
  const basePath = import.meta.env.BASE_URL ?? '/'
  const authorPhoto = `${basePath}authorHamzaFaidi.png`
  const [imageLoaded, setImageLoaded] = useState(false)


  return (
    <PageShell
      title="About"
      description="Backend .NET Engineer specializing in fintech solutions and cloud architecture"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a1128] via-[#0d1836] to-[#060c1e] p-8 md:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(130,255,180,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(100,200,255,0.05),transparent_50%)]" />
        
        <div className="relative grid gap-8 lg:grid-cols-[auto,1fr] lg:gap-12">
          {/* Profile Image */}
          <div className="mx-auto lg:mx-0">
            <div className="group relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-mint via-foam to-mint opacity-30 blur-2xl transition-all duration-700 group-hover:opacity-50 group-hover:blur-3xl" />
              <div className={`relative transition-all duration-1000 ${imageLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                <img
                  src={authorPhoto}
                  alt="Hamza Faidi"
                  onLoad={() => setImageLoaded(true)}
                  className="h-48 w-48 rounded-full border-4 border-white/20 object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:border-mint/40"
                />
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-3">
              <div className="inline-block rounded-full border border-mint/30 bg-mint/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-mint">
                Software Engineer
              </div>
              <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
                Hamza Faidi
              </h1>
              <p className="text-lg text-white/70 md:text-xl">
                Building high scale software applications on Azure & AWS cloud providers.
              </p>
            </div>

            <p className="max-w-2xl text-base leading-relaxed text-white/60">
              Software Engineer with 2+ years crafting fintech payment and expense platforms using ASP.NET Core, 
              Web API, EF Core, and SQL Server on Azure. Full-stack capable with Angular/React experience. 
              AWS Certified Solutions Architect Associate & Cloud Practitioner.
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="mailto:hamza.faidi.software.eng@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:border-mint hover:bg-mint/10 hover:text-mint hover:shadow-[0_0_30px_rgba(130,255,180,0.2)]"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email Me</span>
              </a>
              <a
                href="https://www.linkedin.com/in/hamza-faidi/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-mint to-foam px-6 py-3 font-semibold text-dusk transition-all hover:shadow-[0_0_40px_rgba(130,255,180,0.4)] hover:scale-105"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Languages */}
            <div className="flex flex-wrap justify-center gap-2 pt-2 lg:justify-start">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">English (C1)</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">French (C1)</span>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
